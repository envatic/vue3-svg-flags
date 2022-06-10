import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'MyIcon',
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
        "id": "flag-icons-my",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "id": "rect2186",
        "d": "M0 0h640v480H0z",
        "style": "fill:#c00;fill-opacity:1;stroke:none;stroke-width:1"
      }, null), _createVNode("path", {
        "id": "rect2188-1",
        "d": "M.5 39.9h639v38.4H.5z",
        "style": "fill:#fff;fill-opacity:1;stroke:none;stroke-width:.979059"
      }, null), _createVNode("path", {
        "id": "rect2188-1-9",
        "d": "M.5 118.6h639V157H.5z",
        "style": "fill:#fff;fill-opacity:1;stroke:none;stroke-width:.979059"
      }, null), _createVNode("path", {
        "id": "rect2188-1-9-1",
        "d": "M.5 197.4h639v38.4H.5z",
        "style": "fill:#fff;fill-opacity:1;stroke:none;stroke-width:.979059"
      }, null), _createVNode("path", {
        "id": "path837",
        "fill": "#006",
        "d": "M0 .5h320v280H0Z",
        "style": "stroke-width:.0571662"
      }, null), _createVNode("path", {
        "id": "path841",
        "fill": "#fc0",
        "d": "m207.5 73.8 6 40.7 23-34-12.4 39.2 35.5-20.8-28.1 30 41-3.2-38.3 14.8 38.3 14.8-41-3.2 28.1 30-35.5-20.8 12.3 39.3-23-34.1-6 40.7-5.9-40.7-23 34 12.4-39.2-35.5 20.8 28-30-41 3.2 38.4-14.8-38.3-14.8 41 3.2-28.1-30 35.5 20.8-12.4-39.3 23 34.1zm-33.3 1.7a71.1 71.1 0 1 0 0 130 80 80 0 1 1 0-130z",
        "style": "stroke-width:.0555556"
      }, null), _createVNode("path", {
        "id": "rect2188-1-9-1-4",
        "d": "M.5 276.2h639v38.4H.5z",
        "style": "fill:#fff;fill-opacity:1;stroke:none;stroke-width:.979059"
      }, null), _createVNode("path", {
        "id": "rect2188-1-9-1-4-4",
        "d": "M.5 354.4h639v38.4H.5z",
        "style": "fill:#fff;fill-opacity:1;stroke:none;stroke-width:.979059"
      }, null), _createVNode("path", {
        "id": "rect2188-1-9-1-4-4-6",
        "d": "M0 441.6h639V480H0z",
        "style": "fill:#fff;fill-opacity:1;stroke:none;stroke-width:.979059"
      }, null)]);
    };
  }
};