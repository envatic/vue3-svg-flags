import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'JoIcon',
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
        "id": "flag-icons-jo",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "jo-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M-117.8 0h682.6v512h-682.6z"
      }, null)])]), _createVNode("g", {
        "clip-path": "url(#jo-a)",
        "transform": "translate(110.5) scale(.9375)"
      }, [_createVNode("g", {
        "fill-rule": "evenodd",
        "stroke-width": "1pt"
      }, [_createVNode("path", {
        "d": "M-117.8 0h1024v170.7h-1024z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M-117.8 170.7h1024v170.6h-1024z"
      }, null), _createVNode("path", {
        "fill": "#090",
        "d": "M-117.8 341.3h1024V512h-1024z"
      }, null), _createVNode("path", {
        "fill": "red",
        "d": "m-117.8 512 512-256-512-256v512z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "m24.5 289 5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
      }, null)])])]);
    };
  }
};