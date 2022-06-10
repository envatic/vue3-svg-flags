import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'DgIcon',
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
        "id": "flag-icons-dg",
        "version": "1.1",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", {
        "id": "defs1221"
      }, [_createVNode("clipPath", {
        "id": "dg-a"
      }, [_createVNode("path", {
        "id": "path1218",
        "fill-opacity": ".7",
        "d": "M0 0h682.7v512H0z"
      }, null)])]), _createVNode("path", {
        "id": "path1225",
        "fill": "#000063",
        "fill-rule": "evenodd",
        "d": "M640 416.2c-7.2 6.7-13.3 22-32.4 22-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.6 32.5-47.6 32.5-38.2 0-47.7-32.5-76.2-32.5-19 0-24.8 23.2-36.2 23.2v41.7c11.4 0 17.1-23 36.3-23 28.5 0 38 32.4 76 32.4 19.1 0 28.6-32.5 47.7-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.4-32.5 47.5-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.2 32.5 76.2 32.5 19 0 25.2-9.2 32.4-15.8zm0-81.2c-7.2 6.7-13.3 22-32.4 22-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.6 32.5-47.6 32.5-38.2 0-47.7-32.5-76.2-32.5-19 0-24.8 23.2-36.2 23.2v41.8c11.4 0 17.1-23.1 36.3-23.1 28.5 0 38 32.5 76 32.5 19.1 0 28.6-32.5 47.7-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.4-32.5 47.5-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.5-32.5 47.5-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.2 32.5 76.2 32.5 19 0 25.2-9.2 32.4-15.8zm0-81.1c-7.2 6.7-13.3 22-32.4 22-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.6 32.5-47.6 32.5-38.2 0-47.7-32.5-76.2-32.5-19 0-24.8 23.2-36.2 23.2v41.8c11.4 0 17.1-23.2 36.3-23.2 28.5 0 38 32.5 76 32.5 19.1 0 28.6-32.5 47.7-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.4-32.5 47.5-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.5-32.5 47.5-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.2 32.5 76.2 32.5 19 0 25.2-9.2 32.4-15.8zm0-81.1c-7.2 6.6-13.3 22-32.4 22-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.6 32.5-47.6 32.5-38.2 0-47.7-32.5-76.2-32.5-19 0-24.8 23.2-36.2 23.2v41.7c11.4 0 17.1-23 36.3-23 28.5 0 38 32.4 76 32.4 19.1 0 28.6-32.5 47.7-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.4-32.5 47.5-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.5-32.5 47.5-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.2 32.5 76.2 32.5 19 0 25.2-9.3 32.4-15.9zm0-81.3c-7.2 6.7-13.3 22.1-32.4 22.1-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.6 32.5-47.6 32.5-38.2 0-47.7-32.5-76.2-32.5-19 .1-24.8 23.3-36.2 23.3v41.8c11.4 0 17.1-23.1 36.2-23.1 28.5 0 38.1 32.5 76.2 32.5 19 0 28.5-32.5 47.6-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.4-32.5 47.4-32.5 28.7 0 38.2 32.5 76.3 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.2 32.5 76.2 32.5 19 0 25.2-9.3 32.4-15.9v-48Zm0-81c-7.2 6.6-13.3 22-32.4 22C569.5 32.5 560 0 531.4 0c-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5C198 32.5 188.6 0 160 0c-19 0-28.6 32.5-47.6 32.5C74.2 32.5 64.7 0 36.2 0 17.2 0 11.4 23.2 0 23.2v41.9C11.4 65 17.1 42 36.2 42c28.5 0 38.1 32.4 76.2 32.4 19 0 28.5-32.4 47.6-32.4 28.6 0 38.1 32.4 76.3 32.4 19 0 28.4-32.4 47.4-32.4 28.7 0 38.2 32.4 76.3 32.4 19 0 28.6-32.4 47.6-32.4 28.6 0 38.1 32.4 76.2 32.4 19 0 28.6-32.4 47.6-32.4 28.6 0 38.2 32.4 76.2 32.4 19 0 25.2-9.2 32.4-15.8z",
        "style": "stroke-width:.772821"
      }, null), _createVNode("path", {
        "id": "path1237",
        "fill": "#a24300",
        "fill-rule": "evenodd",
        "stroke": "#fff",
        "stroke-width": "2.1",
        "d": "m474.8 131.7-3.5 329c0 17.3 15.7 17.3 17.4 0l-3.5-329Z"
      }, null), _createVNode("path", {
        "id": "path1239",
        "fill": "#006d00",
        "fill-rule": "evenodd",
        "stroke": "#fff",
        "stroke-width": "1.8",
        "d": "m510.7 254-11-11.9-2.6 12.1-4.7-17.5-4.5 8.8-.8-18.6-4.4 8.8-.8-18.6-4.4 8.8L475 204l-4.4 8.8L468 191l-4.5 8.8-2.5-21.9-1.3-11 2.2-4.3 5.8 2.1 9.1 8.7 18.3 17.4-11.3-4.3 18.3 17.4-11.4-4.3 18.3 17.3-11.4-4.2 16.6 14-11.3-4.2 16.5 14-11.3-4.2 12.6 15.2-13.1-7.6 3 14.3z"
      }, null), _createVNode("path", {
        "id": "path1241",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "M510.7 254 462 162.6m33.1 28.2L469 175.6l-5.4 24.1"
      }, null), _createVNode("path", {
        "id": "path1243",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m502.2 203.8-26.3-15.1-5.3 24.1"
      }, null), _createVNode("path", {
        "id": "path1245",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m509.1 216.8-26.2-15-5.4 24"
      }, null), _createVNode("path", {
        "id": "path1247",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m514.3 226.7-24.5-11.9-7 21"
      }, null), _createVNode("path", {
        "id": "path1249",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "M519.5 236.5 495 224.6l-7 21"
      }, null), _createVNode("path", {
        "id": "path1251",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m520.8 247.4-22.3-16.2-1.4 23"
      }, null), _createVNode("path", {
        "id": "path1253",
        "fill": "#006d00",
        "fill-rule": "evenodd",
        "stroke": "#fff",
        "stroke-width": "2",
        "d": "m383 97.9 17.8 6.8-5.2-13.5 15.6 15.3-1.5-11 12.6 18.4-1.5-11 12.6 18.4-1.5-11 16.3 20.8-1.5-11 16.3 20.8-1.4-11 16.2 20.8 8.2 10.4.7 5.5-6.7.6-14-4.3-28.2-8.7 13.3-1.1-28.1-8.7 13.3-1.1-28.1-8.7 13.3-1.2-24.4-6.2 13.3-1.1-24.4-6.2 13.3-1.2-21.5-9.3 17.1 1.3L383.1 98z"
      }, null), _createVNode("path", {
        "id": "path1255",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m383 97.9 103.7 68.7m-48.9-12.4 34.1 2.6-10.3-26.9"
      }, null), _createVNode("path", {
        "id": "path1257",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m423 144.4 34 2.6-10.3-27"
      }, null), _createVNode("path", {
        "id": "path1259",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m408.2 134.6 34 2.6-10.3-27"
      }, null), _createVNode("path", {
        "id": "path1261",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m397 127.2 30.5.1-6.7-24.4"
      }, null), _createVNode("path", {
        "id": "path1263",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m386 119.8 30.4.2-6.7-24.5"
      }, null), _createVNode("path", {
        "id": "path1265",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m377.8 109.4 31.1 5.7-13.2-23.9"
      }, null), _createVNode("path", {
        "id": "path1267",
        "fill": "#006d00",
        "fill-rule": "evenodd",
        "stroke": "#fff",
        "stroke-width": "2",
        "d": "M589.8 120.8 575 131.7l16.4 1.8-22.9 5.4 12.2 3.6-24.7 1.8 12.2 3.6-24.7 1.8 12.1 3.7-28.9 3.6 12.2 3.6-28.9 3.6 12.2 3.6-28.9 3.6-14.5 1.8-6-1.8 2.2-5.4 10.7-9 21.3-18.1-4.6 10.8 21.3-18-4.6 10.8 21.3-18-4.6 10.8L553 119l-4.5 10.9 17-16.3-4.5 10.8 19-12.6-8.7 12.7 18.6-3.6z"
      }, null), _createVNode("path", {
        "id": "path1269",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m589.8 120.8-117 50.6m34.1-32.5-17.4 25.3 32.7 3.6"
      }, null), _createVNode("path", {
        "id": "path1271",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "M523.7 131.7 506.2 157l32.7 3.6"
      }, null), _createVNode("path", {
        "id": "path1273",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m540.4 124.4-17.5 25.3 32.7 3.7"
      }, null), _createVNode("path", {
        "id": "path1275",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m553 119-13.3 23.5 28.5 5.4"
      }, null), _createVNode("path", {
        "id": "path1277",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m565.5 113.6-13.3 23.5 28.5 5.4"
      }, null), _createVNode("path", {
        "id": "path1279",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m580 111.8-19.4 21.7h30.7"
      }, null), _createVNode("path", {
        "id": "path1281",
        "fill": "#006d00",
        "fill-rule": "evenodd",
        "stroke": "#fff",
        "stroke-width": "2",
        "d": "M587.4 230.3 569 225l6.6 13-17.1-14 2.6 10.7-14.5-17.2 2.7 10.8-14.5-17.3 2.6 10.8-18.5-19.4 2.7 10.8-18.5-19.4 2.7 10.8-18.5-19.4-9.2-9.7-1.3-5.4 6.6-1.2 14.5 3.2 29 6.4-13.2 2.2 29 6.4-13.2 2.2 29 6.4-13.2 2.3 25 4.2-13.2 2.2 25 4.2L569 211l22.3 7.5h-17l13 12z"
      }, null), _createVNode("path", {
        "id": "path1283",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m587.4 230.3-110.6-60.2m50 8.4-34.2.2 13.2 26"
      }, null), _createVNode("path", {
        "id": "path1285",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m542.6 187.1-34.2.2 13.2 26"
      }, null), _createVNode("path", {
        "id": "path1287",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m558.4 195.7-34.2.2 13.2 26"
      }, null), _createVNode("path", {
        "id": "path1289",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m570.3 202.2-30.3 2.3 9.3 23.8"
      }, null), _createVNode("path", {
        "id": "path1291",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m582.2 208.7-30.3 2.2 9.2 23.8"
      }, null), _createVNode("path", {
        "id": "path1293",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m591.3 218.4-31.5-3.2 15.8 22.8"
      }, null), _createVNode("path", {
        "id": "path1295",
        "fill": "#006d00",
        "fill-rule": "evenodd",
        "stroke": "#fff",
        "stroke-width": "1.8",
        "d": "m395.2 236.6 9.3-13-14.1 2.1 17.4-9.9-11.1-.5 20-7-11.1-.6 20-7-11.1-.6 23-9.6-11.2-.5 23-9.7-11.1-.5 23-9.6 11.5-4.9 5.6.3-.4 5.3-6.3 10.4-12.6 20.8.8-10.6-12.6 20.8.7-10.7-12.6 20.8.7-10.6-9.6 18.2.7-10.6-9.6 18.2.7-10.6-12.2 15.4 3.7-13.2-14.5 7.4z"
      }, null), _createVNode("path", {
        "id": "path1297",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m395.2 236.6 83-71m-19.1 36.5 7.3-26.4-28.2 4.1"
      }, null), _createVNode("path", {
        "id": "path1299",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m447.2 212.3 7.3-26.4-28.2 4"
      }, null), _createVNode("path", {
        "id": "path1301",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m435.3 222.4 7.4-26.4-28.2 4.1"
      }, null), _createVNode("path", {
        "id": "path1303",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m426.4 230 4.4-23.8-25.2 1.5"
      }, null), _createVNode("path", {
        "id": "path1305",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m417.5 237.6 4.4-23.8-25.2 1.5"
      }, null), _createVNode("path", {
        "id": "path1307",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m406 242.4 10-23.5-25.6 6.8"
      }, null), _createVNode("path", {
        "id": "path1309",
        "fill": "#006d00",
        "fill-rule": "evenodd",
        "stroke": "#fff",
        "stroke-width": "2",
        "d": "m563 66.2-17.9 12-2.9-12.9-10.5 17.8-2-8.5-8.6 18.2-1.2-8.4-6.7 18.7-3.8-9-6.7 22.7-3.8-9-6.7 22.7-3.9-9-6.7 22.7-3.3 11.4 1.9 4.5 7.2-2.4 12.4-9.2 25-18.4-14.4 4.7 24.9-18.5-14.4 4.8 24.9-18.5-14.4 4.8 25-14.4-17 4L566 83.3l-16.3 4.2 19.7-15.6-17 8.1z"
      }, null), _createVNode("path", {
        "id": "path1311",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m556 72.7-25.8 22.2-50 65.2"
      }, null), _createVNode("path", {
        "id": "path1313",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m519.3 132.8-28.6 13.5-2.4-20.8"
      }, null), _createVNode("path", {
        "id": "path1315",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m530.2 119.2-29 13.4-2.3-20.8"
      }, null), _createVNode("path", {
        "id": "path1317",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m540.5 105.5-28.7 13.4-2.2-20.7"
      }, null), _createVNode("path", {
        "id": "path1319",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m549.1 95.3-26.8 9.9-3-17"
      }, null), _createVNode("path", {
        "id": "path1321",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "M559 85.5 530.2 95l-1-16.4"
      }, null), _createVNode("path", {
        "id": "path1323",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m562.8 76.2-26.6 13.6 5.2-20.6"
      }, null), _createVNode("path", {
        "id": "path1325",
        "fill": "#006d00",
        "fill-rule": "evenodd",
        "stroke": "#fff",
        "stroke-width": "2",
        "d": "m466.1 43.8 8 18.2 10.3-9.6-1.7 19.8 6.8-6.4-3.7 19.4 6-6.6-5.5 19 8.7-6-8 22.3 8.6-6-8 22.5 8.7-6-8 22.4-4 11.2-4.4 3-4.8-5.3-5-13.4-10-26.9 9.4 10.5-10.1-27 9.4 10.6-10-27L468 93l-12.5-23.4 12 11.1-14.4-23.9 11.3 11-7.3-22.2 9.6 14.6z"
      }, null), _createVNode("path", {
        "id": "path1327",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m468.2 52.4 8.5 30.5 3.2 78"
      }, null), _createVNode("path", {
        "id": "path1329",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m463 120.2 16.2 24.3 14.7-16.7"
      }, null), _createVNode("path", {
        "id": "path1331",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m462 103.7 16.5 24.4 14.7-16.7"
      }, null), _createVNode("path", {
        "id": "path1333",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m461.5 87.3 16.4 24.4L492.3 95"
      }, null), _createVNode("path", {
        "id": "path1335",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m460.4 74.9 16.8 20.4 13-13"
      }, null), _createVNode("path", {
        "id": "path1337",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m458 62 18.7 21 11-13.6"
      }, null), _createVNode("path", {
        "id": "path1339",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m460.3 52.4 14.4 23.5 8.1-19.9"
      }, null), _createVNode("path", {
        "id": "path1341",
        "fill": "#006d00",
        "fill-rule": "evenodd",
        "stroke": "#fff",
        "stroke-width": "1.9",
        "d": "m359 178 23.3-16.2-11.7-6 20.5 3.4-7-9.3 19.8 7.5-7-9.3 19.9 7.4-7-9.2 24 8.1-7-9.3 23.3 12.1-7-9.3 24 8.2 11.7 6 3.5 4.6-4.7 3.3-12.9 1.8-20.7 8.6 3.8-7.4-25.7 3.6 9.3-6.4-26.3 7.6 9.4-6.5-22.2 8.3 9.9-10.4-22.8 12.2 10-10.4-18.8 13 10.5-14.4z"
      }, null), _createVNode("path", {
        "id": "path1343",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m366.3 173.6 24.2-10.5 12.9-1.8 10.7-.2 18.5 1.2 16.7.7 33 3.7"
      }, null), _createVNode("path", {
        "id": "path1345",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m447.2 176.9 18.5-11.4-18.8-14.7"
      }, null), _createVNode("path", {
        "id": "path1347",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m426.5 175.2 22.7-12.2-18.7-14.8"
      }, null), _createVNode("path", {
        "id": "path1349",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m411.7 174.8 20.9-12.5-19-13.7m-29.5 29.6 19.3-16.9-15.6-8.5"
      }, null), _createVNode("path", {
        "id": "path1351",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "m375.5 179.3 15-16.1-12-4.5m18.4 17.7 19-15.2-15.2-10.4"
      }, null), _createVNode("g", {
        "id": "g1473",
        "fill-rule": "evenodd",
        "transform": "matrix(.94693 0 0 .94693 115.2 18.3)"
      }, [_createVNode("path", {
        "id": "path1353",
        "fill": "#c00",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "m541.5 1173.3-1.7-229.1-61.1-107c-15.3-52.6-7.8-78 17-79.8 24.7-1.6 49.2 13.6 84.8 15.3 35.6 1.7 28.9-59.4 81.5-57.7 52.6 1.7 144.3 32.3 222.3 37.4 78.1 5 118.8-27.2 208.8-30.6 90-3.4 113.7 42.4 118.8 42.4 5.1 0 30.6-18.6 56-22 25.5-3.4 34 10.2 34 10.2s-1.7 57.7-13.6 91.6c-11.9 34-54.3 90-56 90-1.7 0-15.3 249.5-15.3 251.2 0 1.7-675.5-6.8-675.5-11.9z",
        "transform": "matrix(.13659 0 0 .12573 266.4 208.2)"
      }, null), _createVNode("g", {
        "id": "g1387",
        "stroke": "#000",
        "stroke-width": "1pt"
      }, [_createVNode("path", {
        "id": "path1355",
        "fill": "#fff100",
        "d": "M531.5 584.6s-68-52-69.8-177.1c-1-72 34.4-124 123-124 124 0 301.1 53.1 301.1 53.1v17.7s-141.7-53.1-301.2-53.1c-70.8 0-106.3 52-106.3 105.2 0 88.6 71 178.3 71 178.3v141.7h-17.8z",
        "transform": "matrix(-.13659 0 0 .12573 508.4 252.7)"
      }, null), _createVNode("path", {
        "id": "path1357",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 506.2 252.5)"
      }, null), _createVNode("path", {
        "id": "path1359",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 508.6 247.4)"
      }, null), _createVNode("path", {
        "id": "path1361",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 509.9 242.2)"
      }, null), _createVNode("path", {
        "id": "path1363",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 510.8 236.7)"
      }, null), _createVNode("path", {
        "id": "path1365",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 510.6 230.7)"
      }, null), _createVNode("path", {
        "id": "path1367",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 502.7 257)"
      }, null), _createVNode("path", {
        "id": "path1369",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 508.5 225)"
      }, null), _createVNode("path", {
        "id": "path1371",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 504 220.5)"
      }, null), _createVNode("path", {
        "id": "path1373",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 498 217.5)"
      }, null), _createVNode("path", {
        "id": "path1375",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 492 217.1)"
      }, null), _createVNode("path", {
        "id": "path1377",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 485.5 217.3)"
      }, null), _createVNode("path", {
        "id": "path1379",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 479 218.2)"
      }, null), _createVNode("path", {
        "id": "path1381",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 472.6 219)"
      }, null), _createVNode("path", {
        "id": "path1383",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 465.6 220)"
      }, null), _createVNode("path", {
        "id": "path1385",
        "fill": "#fff",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(-.13659 0 0 .12573 459.6 221.6)"
      }, null)]), _createVNode("path", {
        "id": "path1389",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 268.6 252.5)"
      }, null), _createVNode("path", {
        "id": "path1391",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 266.1 247.4)"
      }, null), _createVNode("path", {
        "id": "path1393",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 264.9 242.2)"
      }, null), _createVNode("path", {
        "id": "path1395",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 264 236.7)"
      }, null), _createVNode("path", {
        "id": "path1397",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 264.2 230.7)"
      }, null), _createVNode("path", {
        "id": "path1399",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 266.2 225)"
      }, null), _createVNode("path", {
        "id": "path1401",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 270.6 220.5)"
      }, null), _createVNode("path", {
        "id": "path1403",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 276.7 217.5)"
      }, null), _createVNode("path", {
        "id": "path1405",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 282.7 217.1)"
      }, null), _createVNode("path", {
        "id": "path1407",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 289.2 217.3)"
      }, null), _createVNode("path", {
        "id": "path1409",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 295.7 218.2)"
      }, null), _createVNode("path", {
        "id": "path1411",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 302.2 219)"
      }, null), _createVNode("path", {
        "id": "path1413",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 309.1 220)"
      }, null), _createVNode("path", {
        "id": "path1415",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 315.1 221.6)"
      }, null), _createVNode("path", {
        "id": "path1417",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 272 257)"
      }, null), _createVNode("path", {
        "id": "path1419",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M531.5 584.6s-68-52-69.8-177.1c-1-72 34.4-124 123-124 124 0 301.1 53.1 301.1 53.1v17.7s-141.7-53.1-301.2-53.1c-70.8 0-106.3 52-106.3 105.2 0 88.6 71 178.3 71 178.3v141.7h-17.8z",
        "transform": "matrix(.13659 0 0 .12573 266.4 252.7)"
      }, null), _createVNode("path", {
        "id": "path1421",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "3",
        "d": "M1240.2 531.5s15.3-35.4 70.9-35.4c37.8 0 70.8 35.4 70.8 70.8v70.9h35.5v-70.9c0-35.4 35.4-70.8 70.8-70.8 53.2 0 70.9 35.4 70.9 35.4s0-106.3-70.9-106.3c-53.1 0-70.8 35.4-70.8 35.4s17.7-53.1 17.7-106.3c0-53.2-35.4-88.6-35.4-88.6 0 6.8-35.5 35.5-35.5 88.6 0 53.1 17.7 106.3 17.7 106.3s-17.7-35.4-70.8-35.4c-70.9 0-70.9 106.3-70.9 106.3z",
        "transform": "matrix(.04553 0 0 .0479 299.4 309)"
      }, null), _createVNode("path", {
        "id": "path1423",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "3",
        "d": "M1240.2 531.5s15.3-35.4 70.9-35.4c37.8 0 70.8 35.4 70.8 70.8v70.9h35.5v-70.9c0-35.4 35.4-70.8 70.8-70.8 53.2 0 70.9 35.4 70.9 35.4s0-106.3-70.9-106.3c-53.1 0-70.8 35.4-70.8 35.4s17.7-53.1 17.7-106.3c0-53.2-35.4-88.6-35.4-88.6 0 6.8-35.5 35.5-35.5 88.6 0 53.1 17.7 106.3 17.7 106.3s-17.7-35.4-70.8-35.4c-70.9 0-70.9 106.3-70.9 106.3z",
        "transform": "matrix(.04553 0 0 .0479 347.8 309)"
      }, null), _createVNode("path", {
        "id": "path1425",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M531.5 832.7V673.2s35.4 53.2 88.6 53.2c43.5 0 88.6-70.9 88.6-70.9s41.5 53.2 88.6 53.2c42 0 88.5-68.6 88.5-68.6s43.2 68.6 88.6 68.6c45.5 0 88.6-53.2 88.6-53.2s46.3 70.9 106.3 70.9c53.1 0 70.9-53.2 70.9-53.2v159.5z",
        "transform": "matrix(.13659 0 0 .12573 266.4 252.7)"
      }, null), _createVNode("path", {
        "id": "path1427",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M708.7 832.7v-124S815 744 815 832.7z",
        "transform": "matrix(.13659 0 0 .12573 242.2 252.7)"
      }, null), _createVNode("path", {
        "id": "path1429",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M708.7 832.7v-124S815 744 815 832.7z",
        "transform": "matrix(-.13659 0 0 .12573 532.5 252.7)"
      }, null), _createVNode("path", {
        "id": "path1431",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M602.4 832.7C602.4 744 708.7 688 708.7 688S815 744 815 832.7z",
        "transform": "matrix(.13659 0 0 .12573 266.4 252.7)"
      }, null), _createVNode("path", {
        "id": "path1433",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M602.4 832.7C602.4 744 708.7 688 708.7 688S815 744 815 832.7z",
        "transform": "matrix(.13659 0 0 .12573 314.8 252.7)"
      }, null), _createVNode("path", {
        "id": "path1435",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M584.6 847.5c0-88.6 124.1-159.4 124.1-159.4s124 70.8 124 159.4h-248z",
        "transform": "matrix(.13659 0 0 .12573 290.6 250.9)"
      }, null), _createVNode("path", {
        "id": "path1437",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M1275.6 655.5c-35.4-17.7-166-35.4-376.3-35.4s-350 17.7-385.5 35.4c-35.4 17.7-35.4 53.2 0 70.9 35.4 17.7 175.3 35.4 385.5 35.4s340.9-17.7 376.3-35.4c35.4-17.7 35.4-53.2 0-70.9z",
        "transform": "matrix(.13505 0 0 .12573 265.9 275)"
      }, null), _createVNode("path", {
        "id": "path1439",
        "fill": "gray",
        "d": "M435.8 366.3c0 4.5-40.3 4.5-48.4 4.5-8.8 0-48.4 1.2-48.4-4.5 0-4.4 39.9-4.4 48.4-4.4 8.4 0 48.4.9 48.4 4.4z"
      }, null), _createVNode("path", {
        "id": "path1441",
        "fill": "#c00",
        "d": "M343.8 350.3c0 1.5-1 2.7-2.4 2.7s-2.4-1.2-2.4-2.7c0-1.5 1-2.6 2.4-2.6 1.3 0 2.4 1.2 2.4 2.6zm92 0c0 1.5-1.1 2.7-2.5 2.7-1.3 0-2.4-1.2-2.4-2.7 0-1.5 1.1-2.6 2.4-2.6 1.4 0 2.4 1.2 2.4 2.6z"
      }, null), _createVNode("path", {
        "id": "path1443",
        "d": "M392.2 349c0 1.4-2.2 2.6-4.8 2.6-2.6 0-4.9-1.2-4.9-2.7 0-1.5 2.2-2.6 4.9-2.6s4.8 1.2 4.8 2.6z"
      }, null), _createVNode("path", {
        "id": "path1445",
        "fill": "#006300",
        "d": "M415.4 349c0 1.4-1.6 2.6-3.6 2.6s-3.6-1.2-3.6-2.7c0-1.5 1.6-2.6 3.6-2.6s3.6 1.2 3.6 2.6zm-49.8 0c0 1.4-1.6 2.6-3.6 2.6s-3.7-1.2-3.7-2.7c0-1.5 1.6-2.6 3.7-2.6 2 0 3.6 1.2 3.6 2.6z"
      }, null), _createVNode("path", {
        "id": "path1447",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "2.2",
        "d": "M1257.9 496s35.4-53 70.9-53h35.4v35.3c0 53.2-53.1 71-53.1 71h141.7s-53.2-17.8-53.2-71V443h35.5c35.4 0 70.8 53.2 70.8 53.2V354.3s-35.4 53.2-70.8 53.2h-35.5V372c0-53.1 53.2-70.8 53.2-70.8H1311s53.1 17.7 53.1 70.8v35.5h-35.4c-35.5 0-70.9-53.2-70.9-53.2v141.8z",
        "transform": "matrix(.07805 0 0 .07185 279.5 298)"
      }, null), _createVNode("path", {
        "id": "path1449",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "3.3",
        "d": "M1381.9 549.2h70.9s-53.2-17.7-53.2-70.9V443h35.4c35.5 0 71 53.2 71 53.2V354.3s-35.5 53.2-71 53.2h-35.4V372c0-53.1 53.2-70.8 53.2-70.8h-70.9z",
        "transform": "matrix(.03903 0 0 .06287 285 307.3)"
      }, null), _createVNode("path", {
        "id": "path1451",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "3.3",
        "d": "M1381.9 549.2h70.9s-53.2-17.7-53.2-70.9V443h35.4c35.5 0 71 53.2 71 53.2V354.3s-35.5 53.2-71 53.2h-35.4V372c0-53.1 53.2-70.8 53.2-70.8h-70.9z",
        "transform": "matrix(-.03903 0 0 .06287 489.7 307.3)"
      }, null), _createVNode("path", {
        "id": "path1453",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M903.5 602.4a17.7 17.7 0 1 1-35.4 0 17.7 17.7 0 0 1 35.4 0z",
        "transform": "matrix(.13659 0 0 .12573 266.4 252.7)"
      }, null), _createVNode("path", {
        "id": "path1455",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "2.2",
        "d": "M1257.9 496s35.4-53 70.9-53h35.4v35.3c0 53.2-53.1 71-53.1 71h141.7s-53.2-17.8-53.2-71V443h35.5c35.4 0 70.8 53.2 70.8 53.2V354.3s-35.4 53.2-70.8 53.2h-35.5V372c0-53.1 53.2-70.8 53.2-70.8H1311s53.1 17.7 53.1 70.8v35.5h-35.4c-35.5 0-70.9-53.2-70.9-53.2v141.8z",
        "transform": "matrix(.07805 0 0 .07185 279.5 251.2)"
      }, null), _createVNode("path", {
        "id": "path1457",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M903.5 602.4a17.7 17.7 0 1 1-35.4 0 17.7 17.7 0 0 1 35.4 0z",
        "transform": "matrix(.13659 0 0 .12573 266.6 206.3)"
      }, null), _createVNode("path", {
        "id": "path1459",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M850.4 655.5h70.9v53.2h-71z",
        "transform": "matrix(.13659 0 0 .12573 266.4 208.2)"
      }, null), _createVNode("path", {
        "id": "path1461",
        "fill": "#fff100",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M850.4 683.3h70.9v202.5h-71z",
        "transform": "matrix(.13659 0 0 .12573 266.4 208.2)"
      }, null), _createVNode("path", {
        "id": "path1463",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 324.4 246)"
      }, null), _createVNode("path", {
        "id": "path1465",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 324.4 240.3)"
      }, null), _createVNode("path", {
        "id": "path1467",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 324.4 235)"
      }, null), _createVNode("path", {
        "id": "path1469",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": "1pt",
        "d": "M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z",
        "transform": "matrix(.13659 0 0 .12573 324.4 229.4)"
      }, null), _createVNode("path", {
        "id": "path1471",
        "d": "M392.5 357.5c0 1-2.2 1.8-5 1.8s-4.8-.8-4.8-1.8 2.2-1.8 4.9-1.8 4.9.8 4.9 1.8zm44.6 4.4c-.3.7-2.7.8-5.4.1-2.7-.6-4.6-1.6-4.4-2.3.3-.7 2.7-.8 5.4-.1 2.7.6 4.6 1.6 4.4 2.3zm-18.7-3c0 .9-2.4 1.4-5.2 1.3-2.7-.2-4.9-1.1-4.8-2 .1-.9 2.5-1.4 5.2-1.2 2.8.2 5 1 4.8 1.9zm-81.8 3c.2.7 2.6.8 5.3.1 2.7-.6 4.7-1.6 4.4-2.3-.3-.7-2.7-.8-5.4-.1-2.6.6-4.6 1.6-4.3 2.3zm19.5-3.4c.1.9 2.5 1.4 5.2 1.2 2.8-.2 5-1 4.8-2 0-.8-2.4-1.4-5.2-1.2-2.7.2-4.9 1-4.8 2z"
      }, null)]), _createVNode("path", {
        "id": "path824",
        "fill": "#012169",
        "d": "M0 0h320v240H0Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path826",
        "fill": "#fff",
        "d": "m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path828",
        "fill": "#c8102e",
        "d": "M212 140.5 320 220v20l-135.5-99.5Zm-92 10 3 17.5-96 72H0ZM320 0v1.5l-124.5 94 1-22L295 0ZM0 0l119.5 88h-30L0 21Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path830",
        "fill": "#fff",
        "d": "M120.5 0v240h80V0ZM0 80v80h320V80Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path832",
        "fill": "#c8102e",
        "d": "M0 96.5v48h320v-48zM136.5 0v240h48V0Z",
        "style": "stroke-width:.5"
      }, null)]);
    };
  }
};