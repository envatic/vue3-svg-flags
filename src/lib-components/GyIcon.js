import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'GyIcon',
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
        "id": "flag-icons-gy",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("g", {
        "fill-rule": "evenodd"
      }, [_createVNode("path", {
        "fill": "#399408",
        "d": "M2.4 0H640v480H2.4z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M.2 0c-.9 0 619.6 241.5 619.6 241.5L0 479.8.2 0z"
      }, null), _createVNode("path", {
        "fill": "#ffde08",
        "d": "M.3 20.2c3.4 0 559 217.9 555.9 220L1.9 463.2.3 20.3z"
      }, null), _createVNode("path", {
        "d": "M1.9.8c1.8 0 290.9 240.9 290.9 240.9L1.8 477V.8z"
      }, null), _createVNode("path", {
        "fill": "#de2110",
        "d": "M.3 33.9c1.6-15 260.9 208.4 260.9 208.4L.2 451.7V33.9z"
      }, null)])]);
    };
  }
};