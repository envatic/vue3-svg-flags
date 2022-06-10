import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'TfIcon',
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
        "id": "flag-icons-tf",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", null, [_createVNode("path", {
        "id": "a",
        "fill": "#fff",
        "d": "m0-21 12.3 38L-20-6.5h40L-12.3 17z"
      }, null)]), _createVNode("path", {
        "fill": "#002395",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "M0 0h292.8v196.8H0z"
      }, null), _createVNode("path", {
        "fill": "#002395",
        "d": "M0 0h96v192H0z"
      }, null), _createVNode("path", {
        "fill": "#ed2939",
        "d": "M192 0h96v192h-96z"
      }, null), _createVNode("path", {
        "fill": "#fff",
        "d": "m426 219.6 15.4 24.6h44V330l-33-51.6-44.4 70.8h21.6l22.8-40.8 46.8 84 46.8-84 22.8 40.8h21.6L546 278.4 513 330v-47.4h19.8l14.7-23.4H513v-15h44l15.4-24.6H426zm51.6 105h-48v16.8h48zm91.2 0h-48v16.8h48z"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "x": "416",
        "y": "362",
        "transform": "scale(1.2)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "x": "371",
        "y": "328",
        "transform": "scale(1.2)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "x": "461",
        "y": "328",
        "transform": "scale(1.2)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "x": "333",
        "y": "227",
        "transform": "scale(1.2)"
      }, null), _createVNode("use", {
        "width": "100%",
        "height": "100%",
        "x": "499",
        "y": "227",
        "transform": "scale(1.2)"
      }, null)]);
    };
  }
};