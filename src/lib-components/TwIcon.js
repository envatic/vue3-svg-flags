import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'TwIcon',
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
        "id": "flag-icons-tw",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("clipPath", {
        "id": "tw-a"
      }, [_createVNode("path", {
        "d": "M0 0h640v480H0z"
      }, null)]), _createVNode("g", {
        "clip-path": "url(#tw-a)"
      }, [_createVNode("path", {
        "fill": "red",
        "d": "M0 0h720v480H0z"
      }, null), _createVNode("path", {
        "fill": "#000095",
        "d": "M0 0h360v240H0z"
      }, null), _createVNode("g", {
        "fill": "#fff"
      }, [_createVNode("path", {
        "d": "m154 126.9-2.5 9.6 9.4 2.6-1.8-7.1zm46.9 5.1-1.8 7.1 9.4-2.6-2.5-9.6zm-41.8-24-5.1 5.1 1.9 6.9z"
      }, null), _createVNode("path", {
        "d": "m155.9 120-1.9 6.9 5.1 5.1z"
      }, null), _createVNode("path", {
        "d": "m154 113.1-6.9 6.9 6.9 6.9 1.9-6.9zm14 27.8 5.1 5.1 6.9-1.9zm18.9 5.1 9.6 2.5 2.6-9.4-7.1 1.8z"
      }, null), _createVNode("path", {
        "d": "m192 140.9 7.1-1.8 1.8-7.1zm-31.1-1.8 2.6 9.4 9.6-2.5-5.1-5.1zm19.1 5 6.9 1.9 5.1-5.1z"
      }, null), _createVNode("path", {
        "d": "m173.1 146 6.9 6.9 6.9-6.9-6.9-1.9zm-12.2-45.1-9.4 2.6 2.5 9.6 5.1-5.1zm-1.8 31.1 1.8 7.1 7.1 1.8zm45-12 1.9-6.9-5.1-5.1z"
      }, null), _createVNode("path", {
        "d": "m168 99.1-7.1 1.8-1.8 7.1zm32.9 8.9-1.8-7.1-7.1-1.8zm5.1 18.9 6.9-6.9-6.9-6.9-1.9 6.9z"
      }, null), _createVNode("path", {
        "d": "m200.9 108-8.9-8.9-12-3.2-12 3.2-8.9 8.9-3.2 12 3.2 12 8.9 8.9 12 3.2 12-3.2 8.9-8.9 3.2-12z"
      }, null), _createVNode("path", {
        "d": "m200.9 132 5.1-5.1-1.9-6.9zm5.1-18.9 2.5-9.6-9.4-2.6 1.8 7.1zm-6.9-12.2-2.6-9.4-9.6 2.5 5.1 5.1zm-26-6.9-9.6-2.5-2.6 9.4 7.1-1.8zm6.9 1.9-6.9-1.9-5.1 5.1z"
      }, null), _createVNode("path", {
        "d": "m186.9 94-6.9-6.9-6.9 6.9 6.9 1.9z"
      }, null), _createVNode("path", {
        "d": "m192 99.1-5.1-5.1-6.9 1.9zM173.1 146l-9.6 2.5 4.5 16.6 12-12.2zm-5.1 19.1 12 44.9 12-44.9-12-12.2zm-7.1-26-9.4-2.6-4.4 16.4 16.4-4.4z"
      }, null), _createVNode("path", {
        "d": "m147.1 152.9-12 45.1 32.9-32.9-4.5-16.6zm-12-20.9L102 165.1l45.1-12.2 4.4-16.4z"
      }, null), _createVNode("path", {
        "d": "m154 126.9-6.9-6.9-12 12 16.4 4.5zm0-13.8-2.5-9.6-16.4 4.5 12 12z"
      }, null), _createVNode("path", {
        "d": "M135.1 108 90 120l45.1 12 12-12zm90 24-16.6 4.5 4.4 16.4 45.1 12.2z"
      }, null), _createVNode("path", {
        "d": "m199.1 139.1-2.6 9.4 16.4 4.4-4.4-16.4zm-12.2 6.9-6.9 6.9 12 12.2 4.5-16.6zm19.1-19.1 2.5 9.6 16.6-4.5-12.2-12z"
      }, null), _createVNode("path", {
        "d": "m192 165.1 33.1 32.9-12.2-45.1-16.4-4.4zm7.1-64.2 9.4 2.6 4.4-16.4-16.4 4.4z"
      }, null), _createVNode("path", {
        "d": "M225.1 108 258 75.1l-45.1 12-4.4 16.4zm-12.2-20.9L225.1 42 192 75.1l4.5 16.4zm12.2 44.9 44.9-12-44.9-12-12.2 12z"
      }, null), _createVNode("path", {
        "d": "m206 113.1 6.9 6.9 12.2-12-16.6-4.5zm-38-38L135.1 42l12 45.1 16.4 4.4z"
      }, null), _createVNode("path", {
        "d": "m160.9 100.9 2.6-9.4-16.4-4.4 4.4 16.4z"
      }, null), _createVNode("path", {
        "d": "m147.1 87.1-45.1-12 33.1 32.9 16.4-4.5zm39.8 6.9 9.6-2.5-4.5-16.4-12 12z"
      }, null), _createVNode("path", {
        "d": "M192 75.1 180 30l-12 45.1 12 12z"
      }, null), _createVNode("path", {
        "d": "m173.1 94 6.9-6.9-12-12-4.5 16.4z"
      }, null)]), _createVNode("circle", {
        "cx": "180",
        "cy": "120",
        "r": "51.1",
        "fill": "#000095"
      }, null), _createVNode("circle", {
        "cx": "180",
        "cy": "120",
        "r": "45.1",
        "fill": "#fff"
      }, null)])]);
    };
  }
};