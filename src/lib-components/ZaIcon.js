import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'ZaIcon',
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
        "id": "flag-icons-za",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "za-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M-71.9 0h682.7v512H-71.9z"
      }, null)])]), _createVNode("g", {
        "clip-path": "url(#za-a)",
        "transform": "translate(67.4) scale(.93748)"
      }, [_createVNode("g", {
        "fill-rule": "evenodd",
        "stroke-width": "1pt"
      }, [_createVNode("path", {
        "d": "M-71.9 407.8V104.4L154 256.1-72 407.8z"
      }, null), _createVNode("path", {
        "fill": "#00c",
        "d": "m82.2 512.1 253.6-170.6H696V512H82.2z"
      }, null), _createVNode("path", {
        "fill": "red",
        "d": "M66 0h630v170.8H335.7S69.3-1.7 66 0z"
      }, null), _createVNode("path", {
        "fill": "#fc0",
        "d": "M-71.9 64v40.4L154 256-72 407.8v40.3l284.5-192L-72 64z"
      }, null), _createVNode("path", {
        "fill": "#093",
        "d": "M-71.9 64V0h95l301.2 204h371.8v104.2H324.3L23 512h-94.9v-63.9l284.4-192L-71.8 64z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M23 0h59.2l253.6 170.7H696V204H324.3L23 .1zm0 512.1h59.2l253.6-170.6H696v-33.2H324.3L23 512z"
      }, null)])])]);
    };
  }
};