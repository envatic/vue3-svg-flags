import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'EhIcon',
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
        "id": "flag-icons-eh",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", {
        "id": "defs13030"
      }, [_createVNode("clipPath", {
        "id": "eh-a"
      }, [_createVNode("path", {
        "id": "path13027",
        "fill-opacity": ".7",
        "d": "M-158.7 0H524v512h-682.7z"
      }, null)])]), _createVNode("g", {
        "id": "g13044",
        "fill-rule": "evenodd",
        "clip-path": "url(#eh-a)",
        "transform": "translate(148.8) scale(.94)"
      }, [_createVNode("path", {
        "id": "rect13190",
        "fill": "#000",
        "d": "M-158.3 0h680.9v255.3h-680.9z",
        "style": "stroke-width:1.38978"
      }, null), _createVNode("path", {
        "id": "rect13192",
        "fill": "#007a3d",
        "d": "M-158.3 255.3h680.9v255.3h-680.9z",
        "style": "stroke-width:1.38978"
      }, null), _createVNode("path", {
        "id": "rect13194",
        "fill": "#fff",
        "d": "M-158.3 148.9h680.9v212.8h-680.9z",
        "style": "stroke-width:1.55382"
      }, null), _createVNode("path", {
        "id": "path13196",
        "fill": "#c4111b",
        "d": "m-158.3 0 340.4 255.3-340.4 255.3Z",
        "style": "stroke-width:1.70213"
      }, null), _createVNode("circle", {
        "id": "circle13198",
        "cx": "352.3",
        "cy": "255.3",
        "r": "68.1",
        "fill": "#c4111b",
        "style": "stroke-width:1.70213"
      }, null), _createVNode("circle", {
        "id": "circle13200",
        "cx": "377.9",
        "cy": "255.3",
        "r": "68.1",
        "fill": "#fff",
        "style": "stroke-width:1.70213"
      }, null), _createVNode("path", {
        "id": "path13202",
        "fill": "#c4111b",
        "d": "m334 296.5 29.1-20.7 28.8 21-10.8-34 29-20.9-35.7-.2-11-34-11.2 33.9-35.7-.2 28.7 21.2-11.1 34z",
        "style": "stroke-width:1.70213"
      }, null)])]);
    };
  }
};