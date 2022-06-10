import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'NzIcon',
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
        "id": "flag-icons-nz",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", {
        "id": "defs30"
      }, [_createVNode("clipPath", {
        "id": "nz-c"
      }, [_createVNode("path", {
        "id": "path10",
        "d": "M0 0h600v300H0z"
      }, null)]), _createVNode("clipPath", {
        "id": "nz-d"
      }, [_createVNode("path", {
        "id": "path13",
        "d": "m0 0 300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z"
      }, null)]), _createVNode("g", {
        "id": "b"
      }, [_createVNode("g", {
        "id": "a"
      }, [_createVNode("path", {
        "id": "path16",
        "d": "M0 0v.5L1 0z",
        "transform": "translate(0 -.3)"
      }, null), _createVNode("path", {
        "id": "path18",
        "d": "M0 0v-.5L1 0z",
        "transform": "rotate(-36 .5 -.2)"
      }, null)]), _createVNode("use", {
        "id": "use21",
        "transform": "scale(-1 1)"
      }, null), _createVNode("use", {
        "id": "use23",
        "transform": "rotate(72 0 0)"
      }, null), _createVNode("use", {
        "id": "use25",
        "transform": "rotate(-72 0 0)"
      }, null), _createVNode("use", {
        "id": "use27",
        "transform": "scale(-1 1) rotate(72)"
      }, null)])]), _createVNode("path", {
        "id": "path32",
        "fill": "#00247d",
        "fill-rule": "evenodd",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("g", {
        "id": "g38",
        "transform": "translate(-111 36.1) scale(.66825)"
      }, [_createVNode("use", {
        "id": "use34",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "fill": "#fff",
        "transform": "matrix(45.4 0 0 45.4 900 120)"
      }, null), _createVNode("use", {
        "id": "use36",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "fill": "#cc142b",
        "transform": "matrix(30 0 0 30 900 120)"
      }, null)]), _createVNode("g", {
        "id": "g44",
        "transform": "rotate(82 525.2 114.6) scale(.66825)"
      }, [_createVNode("use", {
        "id": "use40",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "fill": "#fff",
        "transform": "rotate(-82 519 -457.7) scale(40.4)"
      }, null), _createVNode("use", {
        "id": "use42",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "fill": "#cc142b",
        "transform": "rotate(-82 519 -457.7) scale(25)"
      }, null)]), _createVNode("g", {
        "id": "g50",
        "transform": "rotate(82 525.2 114.6) scale(.66825)"
      }, [_createVNode("use", {
        "id": "use46",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "fill": "#fff",
        "transform": "rotate(-82 668.6 -327.7) scale(45.4)"
      }, null), _createVNode("use", {
        "id": "use48",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "fill": "#cc142b",
        "transform": "rotate(-82 668.6 -327.7) scale(30)"
      }, null)]), _createVNode("g", {
        "id": "g56",
        "transform": "translate(-111 36.1) scale(.66825)"
      }, [_createVNode("use", {
        "id": "use52",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "fill": "#fff",
        "transform": "matrix(50.4 0 0 50.4 900 480)"
      }, null), _createVNode("use", {
        "id": "use54",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "fill": "#cc142b",
        "transform": "matrix(35 0 0 35 900 480)"
      }, null)]), _createVNode("path", {
        "id": "path1592",
        "fill": "#012169",
        "stroke-width": ".5",
        "d": "M0 0h320v240H0z"
      }, null), _createVNode("path", {
        "id": "path1594",
        "fill": "#fff",
        "stroke-width": ".5",
        "d": "m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
      }, null), _createVNode("path", {
        "id": "path1596",
        "fill": "#c8102e",
        "stroke-width": ".5",
        "d": "M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
      }, null), _createVNode("path", {
        "id": "path1598",
        "fill": "#fff",
        "stroke-width": ".5",
        "d": "M120.5 0v240h80V0zM0 80v80h320V80z"
      }, null), _createVNode("path", {
        "id": "path1600",
        "fill": "#c8102e",
        "stroke-width": ".5",
        "d": "M0 96.5v48h320v-48zM136.5 0v240h48V0z"
      }, null)]);
    };
  }
};