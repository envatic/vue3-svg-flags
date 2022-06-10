import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'MmIcon',
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
        "id": "flag-icons-mm",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("path", {
        "id": "a",
        "fill": "#fff",
        "d": "m0-.5.2.5h-.4z",
        "transform": "scale(8.844)"
      }, null), _createVNode("g", {
        "id": "b"
      }, [_createVNode("use", {
        "width": "18",
        "height": "12",
        "transform": "rotate(-144)"
      }, null), _createVNode("use", {
        "width": "18",
        "height": "12",
        "transform": "rotate(-72)"
      }, null), _createVNode("use", {
        "width": "18",
        "height": "12"
      }, null), _createVNode("use", {
        "width": "18",
        "height": "12",
        "transform": "rotate(72)"
      }, null), _createVNode("use", {
        "width": "18",
        "height": "12",
        "transform": "rotate(144)"
      }, null)])]), _createVNode("path", {
        "fill": "#fecb00",
        "d": "M0-.1h640V160H0z"
      }, null), _createVNode("path", {
        "fill": "#ea2839",
        "d": "M0 320h640v160H0z"
      }, null), _createVNode("path", {
        "fill": "#34b233",
        "d": "M0 160h640v160H0z"
      }, null), _createVNode("use", {
        "width": "18",
        "height": "12",
        "x": "9",
        "y": "6.4",
        "transform": "matrix(40 0 0 40 -40 0)"
      }, null)]);
    };
  }
};