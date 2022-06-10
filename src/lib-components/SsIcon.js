import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'SsIcon',
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
        "id": "flag-icons-ss",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "fill": "#078930",
        "d": "M0 336h640v144H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M0 144h640v192H0z"
      }, null), _createVNode("path", {
        "d": "M0 0h640v144H0z"
      }, null), _createVNode("path", {
        "fill": "#da121a",
        "d": "M0 168h640v144H0z"
      }, null), _createVNode("path", {
        "fill": "#0f47af",
        "d": "m0 0 415.7 240L0 480z"
      }, null), _createVNode("path", {
        "fill": "#fcdd09",
        "d": "M200.7 194.8 61.7 240l139 45.1L114.9 167v146z"
      }, null)]);
    };
  }
};