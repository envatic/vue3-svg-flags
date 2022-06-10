import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'CeftaIcon',
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
        "id": "flag-icons-cefta",
        "version": "1.1",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "id": "rect598",
        "d": "M0 0h640v480H0z",
        "style": "fill:#039;stroke-width:2.05565"
      }, null), _createVNode("circle", {
        "id": "circle600",
        "cx": "320",
        "cy": "249.8",
        "r": "30.4",
        "style": "fill:none;stroke:#fc0;stroke-width:27.4847"
      }, null), _createVNode("circle", {
        "id": "bigger_circle",
        "cx": "320",
        "cy": "249.8",
        "r": "88.3",
        "style": "fill:none;stroke:#fc0;stroke-width:27.4847"
      }, null), _createVNode("path", {
        "id": "rect603",
        "d": "M402.9-169.4h119.8v119.8H402.9z",
        "style": "fill:#039;stroke-width:1.96319",
        "transform": "rotate(45)"
      }, null), _createVNode("path", {
        "id": "rect605",
        "d": "M175.7 236.1h59.2v27.5h-59.2z",
        "style": "fill:#fc0;stroke-width:1.96319"
      }, null), _createVNode("path", {
        "id": "rect607",
        "d": "M434.8 236.1h88.3v27.5h-88.3z",
        "style": "fill:#fc0;stroke-width:1.96319"
      }, null), _createVNode("path", {
        "id": "rect609",
        "d": "M124.2 389.2H179v27.5h-54.8z",
        "style": "fill:#fc0;stroke-width:1.96319",
        "transform": "rotate(-45)"
      }, null), _createVNode("path", {
        "id": "rect611",
        "d": "M306.3 48.6h27.5v107.1h-27.5z",
        "style": "fill:#fc0;stroke-width:1.96319"
      }, null), _createVNode("circle", {
        "id": "circle613",
        "cx": "225.1",
        "cy": "159.6",
        "r": "13.7",
        "style": "fill:#fc0;stroke-width:1.96319"
      }, null), _createVNode("circle", {
        "id": "circle615",
        "cx": "144.3",
        "cy": "249.8",
        "r": "13.7",
        "style": "fill:#fc0;stroke-width:1.96319"
      }, null), _createVNode("circle", {
        "id": "circle617",
        "cx": "320",
        "cy": "381.4",
        "r": "13.7",
        "style": "fill:#fc0;stroke-width:1.96319"
      }, null), _createVNode("circle", {
        "id": "circle619",
        "cx": "320",
        "cy": "425.5",
        "r": "13.7",
        "style": "fill:#fc0;stroke-width:1.96319"
      }, null), _createVNode("circle", {
        "id": "circle621",
        "cx": "408.3",
        "cy": "249.8",
        "r": "13.7",
        "style": "fill:#fc0;stroke-width:1.96319"
      }, null), _createVNode("path", {
        "id": "rect623",
        "d": "M-94.2 388.8h27.5v27.5h-27.5z",
        "style": "fill:#fc0;stroke-width:1.96319",
        "transform": "rotate(-45)"
      }, null), _createVNode("path", {
        "id": "rect625",
        "d": "M35.8 548.4h27.5v27.5H35.8z",
        "style": "fill:#fc0;stroke-width:1.96319",
        "transform": "rotate(-45)"
      }, null)]);
    };
  }
};