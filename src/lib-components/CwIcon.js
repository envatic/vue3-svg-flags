import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'CwIcon',
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
        "id": "flag-icons-cw",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "cw-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M0 0h682.7v512H0z"
      }, null)]), _createVNode("path", {
        "id": "b",
        "d": "m0-1 .2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z"
      }, null)]), _createVNode("g", {
        "clip-path": "url(#cw-a)",
        "transform": "scale(.94)"
      }, [_createVNode("path", {
        "fill": "#002b7f",
        "d": "M0 0h768v512H0z"
      }, null), _createVNode("path", {
        "fill": "#f9e814",
        "d": "M0 320h768v64H0z"
      }, null), _createVNode("use", {
        "width": "13500",
        "height": "9000",
        "x": "2",
        "y": "2",
        "fill": "#fff",
        "transform": "scale(42.67)"
      }, null), _createVNode("use", {
        "width": "13500",
        "height": "9000",
        "x": "3",
        "y": "3",
        "fill": "#fff",
        "transform": "scale(56.9)"
      }, null)])]);
    };
  }
};