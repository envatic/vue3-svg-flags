import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'GmIcon',
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
        "id": "flag-icons-gm",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "gm-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M0-48h640v480H0z"
      }, null)])]), _createVNode("g", {
        "fill-rule": "evenodd",
        "stroke-width": "1pt",
        "clip-path": "url(#gm-a)",
        "transform": "translate(0 48)"
      }, [_createVNode("path", {
        "fill": "red",
        "d": "M0-128h640V85.3H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M0 85.3h640V121H0z"
      }, null), _createVNode("path", {
        "fill": "#009",
        "d": "M0 120.9h640V263H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M0 263.1h640v35.6H0z"
      }, null), _createVNode("path", {
        "fill": "#090",
        "d": "M0 298.7h640V512H0z"
      }, null)])]);
    };
  }
};