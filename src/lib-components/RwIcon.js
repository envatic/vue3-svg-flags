import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'RwIcon',
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
        "id": "flag-icons-rw",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "fill": "#20603d",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "fill": "#fad201",
        "d": "M0 0h640v360H0z"
      }, null), _createVNode("path", {
        "fill": "#00a1de",
        "d": "M0 0h640v240H0z"
      }, null), _createVNode("g", {
        "transform": "translate(511 125.4) scale(.66667)"
      }, [_createVNode("g", {
        "id": "b"
      }, [_createVNode("path", {
        "id": "a",
        "fill": "#e5be01",
        "d": "M116.1 0 35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "scale(1 -1)"
      }, null)]), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "transform": "scale(-1 1)"
      }, null), _createVNode("circle", {
        "r": "34.3",
        "fill": "#e5be01",
        "stroke": "#00a1de",
        "stroke-width": "3.4"
      }, null)])]);
    };
  }
};