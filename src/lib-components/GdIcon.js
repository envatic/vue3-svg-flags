import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'GdIcon',
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
        "id": "flag-icons-gd",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("g", {
        "id": "c"
      }, [_createVNode("g", {
        "id": "b"
      }, [_createVNode("path", {
        "id": "a",
        "fill": "#fcd116",
        "d": "M0-1v1h.5",
        "transform": "rotate(18 0 -1)"
      }, null), _createVNode("use", {
        "transform": "scale(-1 1)"
      }, null)]), _createVNode("use", {
        "transform": "rotate(72)"
      }, null), _createVNode("use", {
        "transform": "rotate(144)"
      }, null), _createVNode("use", {
        "transform": "rotate(216)"
      }, null), _createVNode("use", {
        "transform": "rotate(288)"
      }, null)])]), _createVNode("path", {
        "fill": "#ce1126",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "fill": "#007a5e",
        "d": "M67.2 67.2h505.6v345.6H67.2z"
      }, null), _createVNode("path", {
        "fill": "#fcd116",
        "d": "M67.2 67.3h505.6L67.2 412.9h505.6z"
      }, null), _createVNode("circle", {
        "cx": "319.9",
        "cy": "240.1",
        "r": "57.6",
        "fill": "#ce1126"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "matrix(52.8 0 0 52.8 320 240)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "x": "-100",
        "transform": "translate(-30.3)"
      }, null), _createVNode("use", {
        "id": "d",
        "width": "100%",
        "height": "100%",
        "transform": "matrix(31.2 0 0 31.2 320 33.6)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "x": "100",
        "transform": "translate(30.3)"
      }, null), _createVNode("path", {
        "fill": "#ce1126",
        "d": "M102.3 240.7a80.4 80.4 0 0 0 33.5 33.2 111 111 0 0 0-11.3-45l-22.2 11.8z"
      }, null), _createVNode("path", {
        "fill": "#fcd116",
        "d": "M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 0 1-10.9-41.9 70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8z"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "x": "-100",
        "transform": "translate(-30.3 414.6)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "matrix(31.2 0 0 31.2 320 448.2)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "x": "100",
        "transform": "translate(30.3 414.6)"
      }, null)]);
    };
  }
};