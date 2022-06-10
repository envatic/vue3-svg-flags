import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'KeIcon',
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
        "id": "flag-icons-ke",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("path", {
        "id": "a",
        "stroke-miterlimit": "10",
        "d": "m-28.6 47.5 1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
      }, null)]), _createVNode("path", {
        "fill": "#fff",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "d": "M0 0h640v144H0z"
      }, null), _createVNode("path", {
        "fill": "#060",
        "d": "M0 336h640v144H0z"
      }, null), _createVNode("g", {
        "id": "b",
        "transform": "matrix(3 0 0 3 320 240)"
      }, [_createVNode("use", {
        "width": "100%",
        "height": "100%",
        "stroke": "#000"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "fill": "#fff"
      }, null)]), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "matrix(-1 0 0 1 640 0)"
      }, null), _createVNode("path", {
        "fill": "#b00",
        "d": "M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.2v144H263c9 24 39 72 57 72s48-48 57-72h263.5V168z"
      }, null), _createVNode("path", {
        "id": "c",
        "d": "M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "matrix(-1 0 0 1 640 0)"
      }, null), _createVNode("g", {
        "fill": "#fff",
        "transform": "matrix(3 0 0 3 320 240)"
      }, [_createVNode("ellipse", {
        "rx": "4",
        "ry": "6"
      }, null), _createVNode("path", {
        "id": "d",
        "d": "M1 5.8s4 8 4 21-4 21-4 21z"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "scale(-1)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "scale(-1 1)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "scale(1 -1)"
      }, null)])]);
    };
  }
};