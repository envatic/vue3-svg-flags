const path = require('path')
const glob = require('glob-promise')
const {pascalCase} = require('pascal-case')
const fse = require('fs-extra')
const svgsPath = path.resolve('./svgs');
const componentTemplate = (name, svg) =>
  `
  import {toRefs,computed,reactive} from 'vue'
  export default {
  name: '${name}',
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },
  functional: true,
    setup: function setup(props, { attrs: attributes }) {
        const { size: propSize } = toRefs(props);
        const size = computed(() =>
            propSize.value.slice(-1) === "x"
                ? propSize.value.slice(0, propSize.value.length - 1) + "em"
                : parseInt(propSize.value) + "px"
        );
        const attrs = reactive({
            ...attributes,
            width: computed(() => attributes.width ?? size.value),
            height: computed(() => attributes.height ?? size.value),
        });
      return ()=> ${svg.replace(/<svg([^>]+)>/, "<svg$1 {...attrs}>").replace(/xlink:href="(.*?)"/gm,'')}
  }
}
`.trim();
const handleComponentName = (name) => name.replace(/\-(\d+)/, "$1");
const make = async (svgPaths)=>{
    await Promise.all(
        svgPaths.map(async (svgPath) => {
            const svgBuffer = await fse.readFile(svgPath);
            const svgString = svgBuffer.toString();
            const svgPathWithoutExtension = svgPath.slice(0, -4);
            const svgName = svgPathWithoutExtension.substr(
                svgPathWithoutExtension.lastIndexOf('/') + 1
            );
            const pascalCasedComponentName = pascalCase(`${handleComponentName(svgName)}-icon`);
            const component = componentTemplate(pascalCasedComponentName, svgString);
            const filepath = `./icons/${pascalCasedComponentName}.js`;
            return fse
                .ensureDir(path.dirname(filepath))
                .then(() => fse.writeFile(filepath, component, "utf8"));
        })
    ).then(() => {
        const main = svgPaths
            .map(
                (svgPath) => {
                    const svgPathWithoutExtension = svgPath.slice(0, -4);
                    const svgName = svgPathWithoutExtension.substr(
                        svgPathWithoutExtension.lastIndexOf('/') + 1
                    );
                    const pascalCasedComponentName = pascalCase(`${handleComponentName(svgName)}-icon`);
                    return `export { default as ${pascalCasedComponentName} } from './${pascalCasedComponentName}'`
                }
            )
            .join("\n\n");
        return fse.outputFile("./src/lib-components/index.js", main, "utf8");
    });
}
fse.ensureDir(svgsPath).then(()=>{
    glob.promise(path.join(svgsPath, '**/*.svg')).then(make)
});
