import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'InIcon',
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
        "id": "flag-icons-in",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "fill": "#f93",
        "d": "M0 0h640v160H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M0 160h640v160H0z"
      }, null), _createVNode("path", {
        "fill": "#128807",
        "d": "M0 320h640v160H0z"
      }, null), _createVNode("g", {
        "transform": "matrix(3.2 0 0 3.2 320 240)"
      }, [_createVNode("circle", {
        "r": "20",
        "fill": "#008"
      }, null), _createVNode("circle", {
        "r": "17.5",
        "fill": "#fff"
      }, null), _createVNode("circle", {
        "r": "3.5",
        "fill": "#008"
      }, null), _createVNode("g", {
        "id": "d"
      }, [_createVNode("g", {
        "id": "c"
      }, [_createVNode("g", {
        "id": "b"
      }, [_createVNode("g", {
        "id": "a",
        "fill": "#008"
      }, [_createVNode("circle", {
        "r": ".9",
        "transform": "rotate(7.5 -8.8 133.5)"
      }, null), _createVNode("path", {
        "d": "M0 17.5.6 7 0 2l-.6 5L0 17.5z"
      }, null)]), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "rotate(15)"
      }, null)]), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "rotate(30)"
      }, null)]), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "rotate(60)"
      }, null)]), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "rotate(120)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "rotate(-120)"
      }, null)])]);
    };
  }
};