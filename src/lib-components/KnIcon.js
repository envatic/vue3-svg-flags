import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'KnIcon',
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
        "id": "flag-icons-kn",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "kn-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M-80.1 0h682.7v512H-80.1z"
      }, null)])]), _createVNode("g", {
        "fill-rule": "evenodd",
        "clip-path": "url(#kn-a)",
        "transform": "translate(75.1) scale(.9375)"
      }, [_createVNode("path", {
        "fill": "#ffe900",
        "d": "M-107.8.2h737.6v511.3h-737.6z"
      }, null), _createVNode("path", {
        "fill": "#35a100",
        "d": "m-108.2.2.8 368.6L466.6 0l-574.8.2z"
      }, null), _createVNode("path", {
        "fill": "#c70000",
        "d": "m630.7 511.5-1.4-383.2-579 383.5 580.4-.3z"
      }, null), _createVNode("path", {
        "d": "m-107.9 396.6.5 115.4 125.3-.2 611.7-410.1L629 1.4 505.2.2l-613 396.4z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "m380.4 156.6-9.8-42.2 33.3 27 38-24.6-17.4 41.3 33.4 27-44.2-1.5-17.3 41.3-9.9-42.2-44.1-1.5zm-275.2 179-9.9-42.3 33.3 27 38-24.6-17.4 41.3 33.4 27-44.1-1.5-17.4 41.3-9.8-42.2-44.1-1.5z"
      }, null)])]);
    };
  }
};