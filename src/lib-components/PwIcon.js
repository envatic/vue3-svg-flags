import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'PwIcon',
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
        "id": "flag-icons-pw",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "pw-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M-70.3 0h640v480h-640z"
      }, null)])]), _createVNode("g", {
        "fill-rule": "evenodd",
        "stroke-width": "1pt",
        "clip-path": "url(#pw-a)",
        "transform": "translate(70.3)"
      }, [_createVNode("path", {
        "fill": "#4aadd6",
        "d": "M-173.4 0h846.3v480h-846.3z"
      }, null), _createVNode("path", {
        "fill": "#ffde00",
        "d": "M335.6 232.1a135.9 130.1 0 1 1-271.7 0 135.9 130.1 0 1 1 271.7 0z"
      }, null)])]);
    };
  }
};