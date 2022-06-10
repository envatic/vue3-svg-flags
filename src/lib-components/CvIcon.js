import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'CvIcon',
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
        "id": "flag-icons-cv",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "cv-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M-123.4 0h682.6v512h-682.6z"
      }, null)])]), _createVNode("g", {
        "fill-rule": "evenodd",
        "clip-path": "url(#cv-a)",
        "transform": "translate(115.7) scale(.94)"
      }, [_createVNode("path", {
        "fill": "#fff",
        "d": "M-123.4 233H723v206h-846.5z"
      }, null), _createVNode("path", {
        "fill": "#081873",
        "d": "M-122.8 0h846v256.6h-846zm.3 385.9h852.1V512h-852.1z"
      }, null), _createVNode("path", {
        "fill": "#de3929",
        "d": "M-122.5 302.6h846v39.6h-846z"
      }, null), _createVNode("path", {
        "fill": "#ffce08",
        "d": "m131 399.2 6.6 20.4H159l-17.4 12.7 6.6 20.5L131 440l-17.4 12.7 6.7-20.5-17.4-12.7h21.5M317 250.4l6.7 20.5H345l-17.4 12.6 6.6 20.5-17.4-12.7-17.4 12.7 6.6-20.5-17.4-12.6h21.6m-222 64.4 6.6 20.5h21.5L99 368.6l6.7 20.4-17.4-12.6L70.9 389l6.6-20.4-17.4-12.7h21.5M317 329.5l6.7 20.4H345l-17.4 12.7 6.6 20.4-17.4-12.6-17.4 12.7 6.6-20.5-17.4-12.7h21.6m-40.5-161.7 6.7 20.4H298l-17.4 12.7 6.6 20.5-17.4-12.7-17.4 12.7 6.7-20.5-17.5-12.7h21.6m-64.5-45.2 6.7 20.5h21.5l-17.4 12.6 6.6 20.5-17.4-12.6-17.4 12.6 6.7-20.5-17.4-12.6H192m-64.5 2.9 6.7 20.5h21.5l-17.4 12.6 6.7 20.5-17.5-12.7-17.4 12.7 6.7-20.5-17.4-12.6H121m-34.8 43.2 6.6 20.5h21.6l-17.5 12.6 6.7 20.5-17.4-12.7-17.4 12.7 6.6-20.5L58 271h21.5m119.2 149.4 6.7 20.5h21.5l-17.4 12.6 6.7 20.5-17.5-12.7-17.4 12.7 6.7-20.5-17.4-12.6H192m82.2-41.7 6.6 20.4h21.5L285 432.3l6.7 20.5-17.4-12.7-17.5 12.7 6.7-20.5-17.4-12.7h21.5"
      }, null)])]);
    };
  }
};