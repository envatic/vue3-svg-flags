import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'CfIcon',
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
        "id": "flag-icons-cf",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "cf-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M-12.4 32h640v480h-640z"
      }, null)])]), _createVNode("g", {
        "fill-rule": "evenodd",
        "clip-path": "url(#cf-a)",
        "transform": "translate(12.4 -32)"
      }, [_createVNode("path", {
        "fill": "#00f",
        "d": "M-52 32h719.3v119H-52z"
      }, null), _createVNode("path", {
        "fill": "#ff0",
        "d": "M-52 391.6h719.3V512H-52z"
      }, null), _createVNode("path", {
        "fill": "#009a00",
        "d": "M-52 271.3h719.3v120.3H-52z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M-52 151h719.3v120.3H-52z"
      }, null), _createVNode("path", {
        "fill": "red",
        "d": "M247.7 32.5h119.9V512H247.7z"
      }, null), _createVNode("path", {
        "fill": "#ff0",
        "d": "m99.3 137.7-31.5-21.8-31.3 22L47.4 101 16.9 78l38.2-1 12.5-36.3L80.3 77l38.1.7L88.2 101"
      }, null)])]);
    };
  }
};