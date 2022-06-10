import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'EuIcon',
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
        "id": "flag-icons-eu",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("g", {
        "id": "d"
      }, [_createVNode("g", {
        "id": "b"
      }, [_createVNode("path", {
        "id": "a",
        "d": "m0-1-.3 1 .5.1z"
      }, null), _createVNode("use", {
        "transform": "scale(-1 1)"
      }, null)]), _createVNode("g", {
        "id": "c"
      }, [_createVNode("use", {
        "transform": "rotate(72)"
      }, null), _createVNode("use", {
        "transform": "rotate(144)"
      }, null)]), _createVNode("use", {
        "transform": "scale(-1 1)"
      }, null)])]), _createVNode("path", {
        "fill": "#039",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("g", {
        "fill": "#fc0",
        "transform": "translate(320 242.3) scale(23.7037)"
      }, [_createVNode("use", {
        "width": "100%",
        "height": "100%",
        "y": "-6"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "y": "6"
      }, null), _createVNode("g", {
        "id": "e"
      }, [_createVNode("use", {
        "width": "100%",
        "height": "100%",
        "x": "-6"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "rotate(-144 -2.3 -2.1)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "rotate(144 -2.1 -2.3)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "rotate(72 -4.7 -2)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "rotate(72 -5 .5)"
      }, null)]), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "scale(-1 1)"
      }, null)])]);
    };
  }
};