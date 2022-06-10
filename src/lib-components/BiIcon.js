import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'BiIcon',
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
        "id": "flag-icons-bi",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("clipPath", {
        "id": "bi-a"
      }, [_createVNode("path", {
        "fill-opacity": ".7",
        "d": "M-90.5 0H592v512H-90.5z"
      }, null)])]), _createVNode("g", {
        "fill-rule": "evenodd",
        "clip-path": "url(#bi-a)",
        "transform": "translate(84.9) scale(.9375)"
      }, [_createVNode("path", {
        "fill": "#18b637",
        "d": "m-178 0 428.8 256L-178 512zm857.6 0L250.8 256l428.8 256z"
      }, null), _createVNode("path", {
        "fill": "#cf0921",
        "d": "m-178 0 428.8 256L679.6 0zm0 512 428.8-256 428.8 256z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M679.6 0h-79.9L-178 464.3V512h79.9L679.6 47.7z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M398.9 256a148 148 0 1 1-296.1 0 148 148 0 0 1 296 0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M-178 0v47.7L599.7 512h79.9v-47.7L-98.1 0z"
      }, null), _createVNode("path", {
        "fill": "#cf0921",
        "stroke": "#18b637",
        "stroke-width": "3.9",
        "d": "m280 200.2-19.3.3-10 16.4-9.9-16.4-19.2-.4 9.3-16.9-9.2-16.8 19.2-.4 10-16.4 9.9 16.5 19.2.4-9.3 16.8zm-64.6 111.6-19.2.3-10 16.4-9.9-16.4-19.2-.4 9.3-16.9-9.2-16.8 19.2-.4 10-16.4 9.9 16.5 19.2.4-9.3 16.8zm130.6 0-19.2.3-10 16.4-10-16.4-19.1-.4 9.3-16.9-9.3-16.8 19.2-.4 10-16.4 10 16.5 19.2.4-9.4 16.8z"
      }, null)])]);
    };
  }
};