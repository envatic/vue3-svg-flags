import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'NaIcon',
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
        "id": "flag-icons-na",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "na-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M0 0h640v480H0z"
      }, null)])]), _createVNode("g", {
        "fill-rule": "evenodd",
        "clip-path": "url(#na-a)"
      }, [_createVNode("path", {
        "fill": "#fff",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "fill": "#3662a2",
        "d": "m-26.4.2.8 345.6L512.5 0-26.4.2z"
      }, null), _createVNode("path", {
        "fill": "#38a100",
        "d": "M666.4 479.6 665 120.3 122.3 479.8l544-.2z"
      }, null), _createVNode("path", {
        "fill": "#c70000",
        "d": "m-26 371.8.4 108.2 117.5-.1L665.4 95.4l-.7-94.1-116-1L-26 371.7z"
      }, null), _createVNode("path", {
        "fill": "#ffe700",
        "d": "m219.6 172-21.8-13.2-12.6 22.1-12.2-22.2-22 12.9.6-25.4-25.4.2 13.2-21.8-22.1-12.5 22.2-12.3-12.8-22 25.4.6-.1-25.5 21.7 13.2L186.3 44l12.2 22.2 22-12.9-.6 25.4 25.4-.2-13.2 21.8 22.1 12.5-22.2 12.3 12.8 22-25.4-.6z"
      }, null), _createVNode("path", {
        "fill": "#3662a2",
        "d": "M232.4 112.4c0 25.6-20.9 46.3-46.6 46.3s-46.6-20.7-46.6-46.3 20.8-46.2 46.6-46.2 46.6 20.7 46.6 46.2z"
      }, null), _createVNode("path", {
        "fill": "#ffe700",
        "d": "M222.3 112.4a36.5 36.5 0 1 1-73 0 36.5 36.5 0 0 1 73 0z"
      }, null)])]);
    };
  }
};