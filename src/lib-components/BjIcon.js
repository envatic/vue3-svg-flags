import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'BjIcon',
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
        "id": "flag-icons-bj",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "bj-a"
      }, [_createVNode("path", {
        "fill": "gray",
        "d": "M67.6-154h666v666h-666z"
      }, null)])]), _createVNode("g", {
        "clip-path": "url(#bj-a)",
        "transform": "matrix(.961 0 0 .7207 -65 111)"
      }, [_createVNode("g", {
        "fill-rule": "evenodd",
        "stroke-width": "1pt"
      }, [_createVNode("path", {
        "fill": "#319400",
        "d": "M0-154h333v666H0z"
      }, null), _createVNode("path", {
        "fill": "#ffd600",
        "d": "M333-154h666v333H333z"
      }, null), _createVNode("path", {
        "fill": "#de2110",
        "d": "M333 179h666v333H333z"
      }, null)])])]);
    };
  }
};