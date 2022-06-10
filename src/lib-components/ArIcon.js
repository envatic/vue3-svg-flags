import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'ArIcon',
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  setup: function setup(props, _ref) {
    var attributes = _ref.attrs;

    var _toRefs = toRefs(props),
        propSize = _toRefs.size;

    var size = computed(function () {
      return propSize.value.slice(-1) === "x" ? propSize.value.slice(0, propSize.value.length - 1) + "em" : parseInt(propSize.value) + "px";
    });
    var attrs = reactive(_extends({}, attributes, {
      width: computed(function () {
        var _attributes$width;

        return (_attributes$width = attributes.width) != null ? _attributes$width : size.value;
      }),
      height: computed(function () {
        var _attributes$height;

        return (_attributes$height = attributes.height) != null ? _attributes$height : size.value;
      })
    }));
    return function () {
      return _createVNode("svg", _mergeProps({
        "xmlns": "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "id": "flag-icons-ar",
        "version": "1.1",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "id": "rect478",
        "fill": "#74acdf",
        "d": "M0 0h640v480H0z",
        "style": "stroke-width:.876356"
      }, null), _createVNode("path", {
        "id": "rect480",
        "fill": "#fff",
        "d": "M0 160h640v160H0z",
        "style": "stroke-width:.876356"
      }, null), _createVNode("g", {
        "id": "rays",
        "transform": "translate(-64) scale(.96)"
      }, [_createVNode("path", {
        "id": "ray1",
        "fill": "#f6b40e",
        "stroke": "#85340a",
        "stroke-width": "1.1",
        "d": "m396.8 251.3 28.5 62s.5 1.2 1.3.9c.8-.4.3-1.6.3-1.6l-23.7-64m-.7 24.2c-.4 9.4 5.4 14.6 4.7 23-.8 8.5 3.8 13.2 5 16.5 1 3.3-1.2 5.2-.3 5.7 1 .5 3-2.1 2.4-6.8-.7-4.6-4.2-6-3.4-16.3.8-10.3-4.2-12.7-3-22"
      }, null), _createVNode("use", {
        "id": "use483",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "rotate(22.5 400 250)"
      }, null), _createVNode("use", {
        "id": "use485",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "rotate(45 400 250)"
      }, null), _createVNode("use", {
        "id": "use487",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "rotate(67.5 400 250)"
      }, null), _createVNode("path", {
        "id": "ray2",
        "fill": "#85340a",
        "d": "M404.3 274.4c.5 9 5.6 13 4.6 21.3 2.2-6.5-3.1-11.6-2.8-21.2m-7.7-23.8 19.5 42.6-16.3-43.9"
      }, null), _createVNode("use", {
        "id": "use490",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "rotate(22.5 400 250)"
      }, null), _createVNode("use", {
        "id": "use492",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "rotate(45 400 250)"
      }, null), _createVNode("use", {
        "id": "use494",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "rotate(67.5 400 250)"
      }, null)]), _createVNode("use", {
        "id": "use497",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "rotate(90 320 240)"
      }, null), _createVNode("use", {
        "id": "use499",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "rotate(180 320 240)"
      }, null), _createVNode("use", {
        "id": "use501",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "rotate(-90 320 240)"
      }, null), _createVNode("circle", {
        "id": "circle503",
        "cx": "320",
        "cy": "240",
        "r": "26.7",
        "fill": "#f6b40e",
        "stroke": "#85340a",
        "stroke-width": "1.4"
      }, null), _createVNode("path", {
        "id": "loweyecontour",
        "fill": "#843511",
        "d": "M329 234.3c-1.7 0-3.5.8-4.5 2.4 2 1.9 6.6 2 9.7-.2a7 7 0 0 0-5.1-2.2zm0 .4c1.8 0 3.5.8 3.7 1.6-2 2.3-5.3 2-7.4.4 1-1.4 2.4-2 3.8-2z",
        "style": "stroke-width:.96"
      }, null), _createVNode("use", {
        "id": "use506",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "matrix(-1 0 0 1 640.2 0)"
      }, null), _createVNode("use", {
        "id": "use508",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "matrix(-1 0 0 1 640.2 0)"
      }, null), _createVNode("use", {
        "id": "use510",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "translate(18.1)"
      }, null), _createVNode("use", {
        "id": "use512",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "matrix(-1 0 0 1 640.2 0)"
      }, null), _createVNode("path", {
        "id": "path514",
        "fill": "#85340a",
        "d": "M316 243.7a1.8 1.8 0 1 0 1.8 2.9c.7.5 1.7.6 2.2.6h.2c.6 0 1.6-.1 2.3-.6.3.5.9.7 1.5.7a1.8 1.8 0 0 0 .3-3.6c.5.2.8.6.8 1.2a1.2 1.2 0 0 1-2.4 0 3 3 0 0 1-2.6 1.7 3 3 0 0 1-2.5-1.7c0 .7-.6 1.2-1.3 1.2-.6 0-1.2-.6-1.2-1.2s.3-1 .8-1.2z",
        "style": "stroke-width:.96"
      }, null), _createVNode("path", {
        "id": "path516",
        "fill": "#85340a",
        "d": "M318 249.1c-2.1 0-3 2-4.8 3.1 1-.4 1.8-1.2 3.3-2 1.4-.8 2.6.2 3.5.2.8 0 2-1 3.5-.2 1.4.8 2.3 1.6 3.3 2-1.9-1.2-2.7-3-4.8-3-.4 0-1.2.2-2 .6l-2-.7z",
        "style": "stroke-width:.96"
      }, null), _createVNode("path", {
        "id": "path518",
        "fill": "#85340a",
        "d": "M317.2 251.6c-.8 0-1.8.2-3.4.6 3.7-.8 4.5.5 6.2.5 1.6 0 2.5-1.3 6.1-.5-4-1.2-4.9-.4-6.1-.4-.8 0-1.4-.3-2.8-.2z",
        "style": "stroke-width:.96"
      }, null), _createVNode("path", {
        "id": "path520",
        "fill": "#85340a",
        "d": "M314 252.2h-.8c4.3.5 2.3 3 6.8 3s2.5-2.5 6.8-3c-4.5-.4-3.1 2.3-6.8 2.3-3.5 0-2.4-2.3-6-2.3z",
        "style": "stroke-width:.96"
      }, null), _createVNode("path", {
        "id": "path522",
        "fill": "#85340a",
        "d": "M323.7 258.9a3.7 3.7 0 0 0-7.4 0 3.8 3.8 0 0 1 7.4 0z",
        "style": "stroke-width:.96"
      }, null), _createVNode("path", {
        "id": "eyebrow_nose",
        "fill": "#85340a",
        "d": "M303.4 234.3c4.7-4.1 10.7-4.8 14-1.7a8 8 0 0 1 1.5 3.4c.4 2.4-.3 4.9-2.1 7.5l.8.4c1.6-3.1 2.2-6.3 1.6-9.4l-.6-2.3c-4.5-3.7-10.7-4-15.2 2z",
        "style": "stroke-width:.96"
      }, null), _createVNode("path", {
        "id": "uppalpebra",
        "fill": "#85340a",
        "d": "M310.8 233c2.7 0 3.3.6 4.5 1.7 1.2 1 1.9.8 2 1 .3.2 0 .8-.3.6-.5-.2-1.3-.6-2.5-1.6s-2.5-1-3.7-1c-3.7 0-5.7 3-6.1 2.8-.5-.2 2-3.5 6.1-3.5z",
        "style": "stroke-width:.96"
      }, null), _createVNode("use", {
        "id": "use526",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "translate(-18.4)"
      }, null), _createVNode("circle", {
        "id": "pupil",
        "cx": "310.9",
        "cy": "236.3",
        "r": "1.8",
        "fill": "#85340a",
        "style": "stroke-width:.96"
      }, null), _createVNode("path", {
        "id": "lowpalpebra",
        "fill": "#85340a",
        "d": "M305.9 237.5c3.5 2.7 7 2.5 9 1.3 2-1.3 2-1.7 1.6-1.7-.4 0-.8.4-2.4 1.3-1.7.8-4.1.8-8.2-.9z",
        "style": "stroke-width:.96"
      }, null)]);
    };
  }
};