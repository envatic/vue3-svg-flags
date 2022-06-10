import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'KrIcon',
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
        "id": "flag-icons-kr",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", {
        "id": "defs87"
      }, [_createVNode("clipPath", {
        "id": "kr-a"
      }, [_createVNode("path", {
        "id": "path84",
        "fill-opacity": ".7",
        "d": "M-95.8-.4h682.7v512H-95.8z"
      }, null)])]), _createVNode("g", {
        "id": "g119",
        "fill-rule": "evenodd",
        "clip-path": "url(#kr-a)",
        "transform": "translate(89.8 .4) scale(.9375)"
      }, [_createVNode("path", {
        "id": "path526",
        "fill": "#fff",
        "d": "M-95.8-.4H587v512H-95.8Z",
        "style": "stroke-width:10.0567"
      }, null), _createVNode("g", {
        "id": "g540",
        "transform": "scale(10.66667) rotate(-56.3 33.9 -9.5)"
      }, [_createVNode("g", {
        "id": "b2"
      }, [_createVNode("path", {
        "id": "b",
        "d": "M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z"
      }, null), _createVNode("use", {
        "id": "use529",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "44"
      }, null)]), _createVNode("path", {
        "id": "path532",
        "stroke": "#fff",
        "d": "M0 17v10"
      }, null), _createVNode("path", {
        "id": "path534",
        "fill": "#cd2e3a",
        "d": "M0-12a12 12 0 0 1 0 24Z"
      }, null), _createVNode("path", {
        "id": "path536",
        "fill": "#0047a0",
        "d": "M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z"
      }, null), _createVNode("circle", {
        "id": "circle538",
        "cx": "0",
        "cy": "-6",
        "r": "6",
        "fill": "#cd2e3a"
      }, null)]), _createVNode("g", {
        "id": "g546",
        "transform": "scale(-10.66667) rotate(56.3 10.9 -33.5)"
      }, [_createVNode("use", {
        "id": "use542",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0"
      }, null), _createVNode("path", {
        "id": "path544",
        "stroke": "#fff",
        "d": "M0-23.5v3M0 17v3.5m0 3v3"
      }, null)])])]);
    };
  }
};