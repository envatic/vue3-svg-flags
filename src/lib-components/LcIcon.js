import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'LcIcon',
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
        "id": "flag-icons-lc",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("g", {
        "fill-rule": "evenodd"
      }, [_createVNode("path", {
        "fill": "#65cfff",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "m318.9 42 162.7 395.3-322.6.9L318.9 42z"
      }, null), _createVNode("path", {
        "d": "m319 96.5 140.8 340-279 .8L319 96.5z"
      }, null), _createVNode("path", {
        "fill": "#ffce00",
        "d": "m318.9 240.1 162.7 197.6-322.6.5 159.9-198.1z"
      }, null)])]);
    };
  }
};