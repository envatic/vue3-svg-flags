import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'NuIcon',
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
        "id": "flag-icons-nu",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "fill": "#fedd00",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "fill": "#012169",
        "d": "M0 0h320v240H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
      }, null), _createVNode("path", {
        "fill": "#c8102e",
        "d": "M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M120.5 0v240h80V0zM0 80v80h320V80z"
      }, null), _createVNode("path", {
        "fill": "#c8102e",
        "d": "M0 96.5v48h320v-48zM136.5 0v240h48V0z"
      }, null), _createVNode("circle", {
        "cx": "160",
        "cy": "120",
        "r": "40.8",
        "fill": "#012169"
      }, null), _createVNode("path", {
        "fill": "#fedd00",
        "d": "m160 79.2 24 73.8-62.8-45.6h77.6L136 153M66.7 98.3l14 43.4L43.9 115h45.7l-37 26.8m200.7-43.5 14.1 43.4-36.9-26.8h45.7l-37 26.8M160 178.3l14.1 43.4-37-26.8h45.7l-37 26.8M160 18.3l14.1 43.4-37-26.8h45.7l-37 26.8"
      }, null)]);
    };
  }
};