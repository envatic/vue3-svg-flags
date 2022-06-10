import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'CnIcon',
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
        "id": "flag-icons-cn",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("path", {
        "id": "a",
        "fill": "#ffff00",
        "d": "M-.6.8 0-1 .6.8-1-.3h2z"
      }, null)]), _createVNode("path", {
        "fill": "#ee1c25",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("use", {
        "width": "30",
        "height": "20",
        "transform": "matrix(71.9991 0 0 72 120 120)"
      }, null), _createVNode("use", {
        "width": "30",
        "height": "20",
        "transform": "matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"
      }, null), _createVNode("use", {
        "width": "30",
        "height": "20",
        "transform": "matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"
      }, null), _createVNode("use", {
        "width": "30",
        "height": "20",
        "transform": "matrix(6.5991 -23.0749 23.0746 6.59919 288 168)"
      }, null), _createVNode("use", {
        "width": "30",
        "height": "20",
        "transform": "matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"
      }, null)]);
    };
  }
};