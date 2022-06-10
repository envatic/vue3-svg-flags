import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'MhIcon',
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
        "id": "flag-icons-mh",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("g", {
        "fill-rule": "evenodd"
      }, [_createVNode("path", {
        "fill": "#3b5aa3",
        "d": "M0 0h639.9v480H0z"
      }, null), _createVNode("path", {
        "fill": "#e2ae57",
        "d": "M0 467 639.9 0v87L0 480v-13z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M22.4 480 640 179.2l-.1-95.5L0 480h22.4zm153-464.8L169 118l-27-65.6 10.4 69.8-41.9-56.4 27.5 64.3-55-42.6 42.8 53.6-62.1-27.6 54.4 41.2-67.7-9 64 25.4L14 180.3l100.6 6.7-63.7 26.2 67-9-54.3 40 63-27.6-43 54 54.6-41.3-27 62.9 43.6-54.7-11.8 68.1 27.5-63.7 6.2 100.7 9.7-100.4 23.7 64-9-69 43.4 54.8-28.6-64 54.6 44-43.4-54.9 64.9 27-57.4-41.9 69.9 11.8-67-25.7 104.1-6.5-104-9.7 68.5-22.8-71 9 58.6-41-66 26.5 45.6-55.3-55.6 43.4 26.7-66.4-43.1 56.4 9.3-70.4-25.7 66.5-9.6-102.8z"
      }, null)])]);
    };
  }
};