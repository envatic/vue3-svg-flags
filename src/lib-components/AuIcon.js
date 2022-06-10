import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'AuIcon',
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
        "id": "flag-icons-au",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "id": "path617",
        "fill": "#00008B",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "id": "path971",
        "fill": "#fff",
        "d": "m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
      }, null), _createVNode("path", {
        "id": "path973",
        "fill": "#f00",
        "d": "M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
      }, null), _createVNode("path", {
        "id": "path975",
        "fill": "#fff",
        "d": "M120.5,0L120.5,240L200.5,240L200.5,0L120.5,0ZM0,80L0,160L320,160L320,80L0,80Z"
      }, null), _createVNode("path", {
        "id": "path977",
        "fill": "#f00",
        "d": "M0 96.5v48h320v-48zM136.5 0v240h48V0z"
      }, null), _createVNode("g", {
        "fill": "#fff"
      }, [_createVNode("path", {
        "d": "M527 396.7 l-20.5 2.6 2.2 20.5 -14.8-14.4 -14.7 14.5 2-20.5 -20.5-2.4 17.3-11.2 -10.9-17.5 19.6 6.5 6.9-19.5 7.1 19.4 19.5-6.7 -10.7 17.6 17.4 11.1Z"
      }, null), _createVNode("path", {
        "d": "M523.3 279.5 l2.7-13 -9.8-9 13.2-1.5 5.5-12.1 5.5 12.1 13.2 1.5 -9.8 9 2.7 13 -11.6-6.6 -11.6 6.6Z"
      }, null), _createVNode("path", {
        "d": "M419.2 219.5 l-20.3 2.2 1.8 20.3 -14.4-14.5 -14.8 14.1 2.4-20.3 -20.2-2.7 17.3-10.8 -10.5-17.5 19.3 6.8 7.2-19.1 6.7 19.3 19.4-6.3 -10.9 17.3 17.1 11.2Z"
      }, null), _createVNode("path", {
        "d": "M623 186.7 l-20.9 2.7 2.3 20.9 -15.1-14.7 -15 14.8 2.1-21 -20.9-2.4 17.7-11.5 -11.1-17.9 20 6.7 7-19.8 7.2 19.8 19.9-6.9 -11 18 17.8 11.3Z"
      }, null), _createVNode("path", {
        "d": "M526.9 103.2 l-20.7 2.3 1.9 20.8 -14.7-14.8 -15.1 14.4 2.4-20.7 -20.7-2.8 17.7-11 -10.7-17.9 19.7 6.9 7.3-19.5 6.8 19.7 19.8-6.5 -11.1 17.6 17.4 11.5Z"
      }, null), _createVNode("path", {
        "d": "M234 385.7 l-45.8 5.4 4.6 45.9 -32.8-32.4 -33 32.2 4.9-45.9 -45.8-5.8 38.9-24.8 -24-39.4 43.6 15 15.8-43.4 15.5 43.5 43.7-14.7 -24.3 39.2 38.8 25.1Z"
      }, null)])]);
    };
  }
};