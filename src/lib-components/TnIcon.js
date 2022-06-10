import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'TnIcon',
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
        "id": "flag-icons-tn",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "tn-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M-85.3 0h682.6v512H-85.3z"
      }, null)])]), _createVNode("g", {
        "fill-rule": "evenodd",
        "clip-path": "url(#tn-a)",
        "transform": "translate(80) scale(.9375)"
      }, [_createVNode("path", {
        "fill": "#e70013",
        "d": "M-128 0h768v512h-768z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M385.8 255.8a129.1 129.1 0 1 1-258.2 0 129.1 129.1 0 0 1 258.2 0z"
      }, null), _createVNode("path", {
        "fill": "#e70013",
        "d": "M256.7 341.4a85.7 85.7 0 0 1 0-171.3c11.8 0 25.3 2.8 34.4 9.5-62.6 2.3-78.5 55.5-78.5 76.9s10.1 69.1 78.5 76.2c-7.8 5-22.6 8.7-34.4 8.7z"
      }, null), _createVNode("path", {
        "fill": "#e70013",
        "d": "m332.1 291.8-38.9-14.2-25.7 32.4 1.5-41.3-38.8-14.5 39.8-11.4 1.7-41.3 23.2 34.3 39.8-11-25.5 32.5z"
      }, null)])]);
    };
  }
};