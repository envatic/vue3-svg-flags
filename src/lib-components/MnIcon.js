import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'MnIcon',
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
        "id": "flag-icons-mn",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "fill": "#c4272f",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "fill": "#015197",
        "d": "M213.3 0h213.4v480H213.3z"
      }, null), _createVNode("circle", {
        "cx": "107",
        "cy": "189.1",
        "r": "35",
        "fill": "#f9cf02"
      }, null), _createVNode("circle", {
        "cx": "107",
        "cy": "173.2",
        "r": "38.2",
        "fill": "#c4272f"
      }, null), _createVNode("path", {
        "fill": "#f9cf02",
        "fill-rule": "evenodd",
        "d": "M91.1 131.8a15.9 15.9 0 0 0 31.8 0c0-6.3-4-7.2-4-9.5 0-2.4 2.4-5.6-2.4-9.6 2.4 4-1.6 4.8-1.6 8.8 0 4 1.6 4 1.6 7.1a3.2 3.2 0 0 1-6.3 0c0-3.1 3.1-6.3 3.1-11 0-4.9-.7-6.5-3.1-10.4-2.4-4-6.4-7.2-3.2-10.4-4.8 1.6-2.4 8-2.4 12s-3.2 6.3-3.2 11 2.4 5.7 2.4 8.8a3.2 3.2 0 0 1-6.3 0c0-3.1 1.6-3.1 1.6-7.1s-4-4.8-1.6-8.8c-4.8 4-2.4 7.2-2.4 9.6 0 2.4-4 3.1-4 9.5z"
      }, null), _createVNode("circle", {
        "cx": "107",
        "cy": "179.5",
        "r": "25.4",
        "fill": "#f9cf02"
      }, null), _createVNode("path", {
        "fill": "#f9cf02",
        "d": "M37 230.4v152.7h31.8V230.4zm108.2 0v152.7H177V230.4zm-70 25.5v12.7h63.6v-12.7zm0 89v12.8h63.6V345zm0-114.5h63.6L107 249.5zm0 133.7h63.6L107 383z"
      }, null), _createVNode("circle", {
        "cx": "107",
        "cy": "306.8",
        "r": "33.7",
        "fill": "#f9cf02",
        "stroke": "#c4272f",
        "stroke-width": "3.8"
      }, null), _createVNode("path", {
        "fill": "none",
        "stroke": "#c4272f",
        "stroke-width": "3.8",
        "d": "M107 273a16.9 16.9 0 0 1 0 33.8 16.9 16.9 0 1 0 0 33.7"
      }, null), _createVNode("circle", {
        "cx": "107",
        "cy": "289.9",
        "r": "6.4",
        "fill": "#c4272f"
      }, null), _createVNode("circle", {
        "cx": "107",
        "cy": "323.6",
        "r": "6.4",
        "fill": "#c4272f"
      }, null)]);
    };
  }
};