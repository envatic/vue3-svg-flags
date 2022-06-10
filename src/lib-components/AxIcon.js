import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'AxIcon',
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
        "id": "flag-icons-ax",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "ax-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M106.3 0h1133.3v850H106.3z"
      }, null)])]), _createVNode("g", {
        "clip-path": "url(#ax-a)",
        "transform": "matrix(.56472 0 0 .56482 -60 -.1)"
      }, [_createVNode("path", {
        "fill": "#0053a5",
        "d": "M0 0h1300v850H0z"
      }, null), _createVNode("g", {
        "fill": "#ffce00"
      }, [_createVNode("path", {
        "d": "M400 0h250v850H400z"
      }, null), _createVNode("path", {
        "d": "M0 300h1300v250H0z"
      }, null)]), _createVNode("g", {
        "fill": "#d21034"
      }, [_createVNode("path", {
        "d": "M475 0h100v850H475z"
      }, null), _createVNode("path", {
        "d": "M0 375h1300v100H0z"
      }, null)])])]);
    };
  }
};