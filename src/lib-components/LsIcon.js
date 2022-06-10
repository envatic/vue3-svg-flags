import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'LsIcon',
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
        "id": "flag-icons-ls",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "fill": "#fff",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "fill": "#009543",
        "d": "M0 336h640v144H0z"
      }, null), _createVNode("path", {
        "fill": "#00209f",
        "d": "M0 0h640v144H0z"
      }, null), _createVNode("path", {
        "stroke": "#000",
        "stroke-width": "1.6",
        "d": "M319.6 153c-2.7 0-5.4 3-5.4 3l.3 32.4-10.3 10.7h8.3v18.5l-49 66-7.2-2.6-12.7 27s31.3 19.6 76.7 19c49.8-.5 76.9-19.9 76.9-19.9l-13-26.6-6.5 2.8-49.6-65.6v-19.1h8.2L325.1 188v-32.2s-2.7-3-5.5-2.9z"
      }, null), _createVNode("path", {
        "fill": "none",
        "stroke": "#000",
        "stroke-width": "8",
        "d": "M336.7 230.4h-33.9s-12.2-25.9-10.3-44c2-18.4 12.6-27.1 26.6-27.3 16.6-.1 25.2 8.1 27.8 26.6 2.6 18.3-10.2 44.7-10.2 44.7z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M260.5 292.1c-.6.7-4.7 8.9-4.7 8.9l7-1.5-2.3-7.4zm4 10.5-7.4 2.4 8.9 3.5-1.5-5.9zm3.3-10.3 3.7 10.9 9-2.6-2.3-5.2-10.4-3.1zm5.8 14.8 1.2 4.4 12 3-4.8-10.2-8.4 2.8zm13.2-9.3 4.3 10.2 9-3.5-3-4.5-10.3-2.2zm6 13.9 1.4 3.8 14 2-5.9-9.2-9.6 3.4zm13.4-11 5.2 9.1 13-4.8-1.4-3.5-16.8-.7zm7.6 12.4 2.7 4.8 16.2-.5-6-9-13 4.7zm17.1-12 4.4 7.6 10.4-5-2.8-4-12 1.4zm17 5.8-10.3 5.1 2.7 4.5 13.8-2.2-6.2-7.4zm3.3-8 5.3 6.7 8.7-6.9-3-3-11 3.2zm15.9 3.5-8.3 6.3 2.2 3.9 11.4-3-5.3-7.2zm11.4-13 2 2.9-5.7 8.5-5.9-7.6 9.6-3.8zm3.9 7.3 3.5 7-7 2.4-.6-3.3 4-6z"
      }, null)]);
    };
  }
};