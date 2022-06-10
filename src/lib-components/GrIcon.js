import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'GrIcon',
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
        "id": "flag-icons-gr",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "fill": "#005bae",
        "fill-rule": "evenodd",
        "stroke-width": "6.7",
        "d": "M0 0h640v53.3H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "fill-rule": "evenodd",
        "stroke-width": "6.7",
        "d": "M0 53.3h640v53.4H0z"
      }, null), _createVNode("path", {
        "fill": "#005bae",
        "fill-rule": "evenodd",
        "stroke-width": "6.7",
        "d": "M0 106.7h640V160H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "fill-rule": "evenodd",
        "stroke-width": "6.7",
        "d": "M0 160h640v53.3H0z"
      }, null), _createVNode("path", {
        "fill": "#005bae",
        "stroke-width": ".9",
        "d": "M0 0h266.7v266.7H0z"
      }, null), _createVNode("path", {
        "fill": "#005bae",
        "fill-rule": "evenodd",
        "stroke-width": "6.7",
        "d": "M0 213.3h640v53.4H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "fill-rule": "evenodd",
        "stroke-width": "6.7",
        "d": "M0 266.7h640V320H0z"
      }, null), _createVNode("path", {
        "fill": "#005bae",
        "fill-rule": "evenodd",
        "stroke-width": "6.7",
        "d": "M0 320h640v53.3H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "fill-rule": "evenodd",
        "stroke-width": "6.7",
        "d": "M0 373.3h640v53.4H0z"
      }, null), _createVNode("g", {
        "fill": "#fff",
        "fill-rule": "evenodd",
        "stroke-width": "1.3"
      }, [_createVNode("path", {
        "d": "M20 0h10v50H20z",
        "transform": "scale(5.33333)"
      }, null), _createVNode("path", {
        "d": "M0 20h50v10H0z",
        "transform": "scale(5.33333)"
      }, null)]), _createVNode("path", {
        "fill": "#005bae",
        "stroke-width": ".6",
        "d": "M0 426.7h640V480H0z"
      }, null)]);
    };
  }
};