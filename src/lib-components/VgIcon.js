import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'VgIcon',
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
        "id": "flag-icons-vg",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", {
        "id": "defs1705"
      }, [_createVNode("linearGradient", {
        "id": "a"
      }, [_createVNode("stop", {
        "id": "stop1685",
        "offset": "0",
        "stop-color": "red"
      }, null), _createVNode("stop", {
        "id": "stop1687",
        "offset": "1",
        "stop-color": "#ff0"
      }, null)]), _createVNode("linearGradient", {
        "id": "c",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 191.4 180)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "d",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 190.8 144)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "e",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 317.4 111.1)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "f",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 193.8 76.1)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "g",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 194 41.6)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "h",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 194.6 6.7)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "i",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 318.4 7.2)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "j",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 317.3 41.5)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "k",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 315.7 76.7)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "l",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85004 0 0 1.92222 317.3 180.4)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "m",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 317.1 145.6)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "n",
        "x1": "103.1",
        "x2": "92.5",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.85002 0 0 1.92212 216.4 113.5)",
        "gradientUnits": "userSpaceOnUse"
      }, null), _createVNode("linearGradient", {
        "id": "grad",
        "x1": "103.1",
        "x2": "92.6",
        "y1": "111.3",
        "y2": "107.8",
        "gradientTransform": "matrix(.99614 0 0 2.25255 703.8 -75)",
        "gradientUnits": "userSpaceOnUse"
      }, [_createVNode("stop", {
        "id": "stop833",
        "offset": "0",
        "stop-color": "red"
      }, null), _createVNode("stop", {
        "id": "stop835",
        "offset": "1",
        "stop-color": "#ff0"
      }, null)]), _createVNode("clipPath", {
        "id": "vg-b"
      }, [_createVNode("path", {
        "id": "path1702",
        "fill-opacity": ".7",
        "d": "M0 0h640v480H0z"
      }, null)])]), _createVNode("path", {
        "id": "path1707",
        "fill": "#006",
        "d": "M0 0h640v480H0Z",
        "style": "stroke-width:.816497"
      }, null), _createVNode("path", {
        "id": "path2609",
        "fill": "#012169",
        "d": "M0 0h320v240H0Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path2611",
        "fill": "#fff",
        "d": "m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path2613",
        "fill": "#c8102e",
        "d": "M212 140.5 320 220v20l-135.5-99.5Zm-92 10 3 17.5-96 72H0ZM320 0v1.5l-124.5 94 1-22L295 0ZM0 0l119.5 88h-30L0 21Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path2615",
        "fill": "#fff",
        "d": "M120.5 0v240h80V0ZM0 80v80h320V80Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path2617",
        "fill": "#c8102e",
        "d": "M0 96.5v48h320v-48zM136.5 0v240h48V0Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("g", {
        "id": "g1028",
        "transform": "translate(-217.5 -9.4) scale(.77497)"
      }, [_createVNode("path", {
        "id": "path855",
        "fill": "#fff",
        "d": "m776.3 144 250.4-.9-.5 223s8.8 34-105 85.5c40.9-4.2 85.5-47.8 85.5-47.8s18.1-23.3 27-10.3c8.8 13 17.1 19.6 23.6 24.7 6.5 5 11.6 19 1.9 29.2-9.8 10.3-25.1 11.6-29.3-.9-6.5 3.3-46.4 51.6-128.2 53.9C818.5 499 773 446 773 446s-11.1 17.7-27 3.8c-15.3-18.2-3.7-29.8-3.7-29.8s13-7.4 16.8-12.5c6-7 7.9-16.3 18-16.3 12.2 1 16.8 10.7 16.8 10.7s41.8 44.1 86.9 49.7c-101.7-48.8-105.5-79-105-86.4l.5-221.1z"
      }, null), _createVNode("path", {
        "id": "path857",
        "fill": "#006129",
        "stroke": "#000",
        "stroke-width": "1.9",
        "d": "m782.3 150.1 238.8-1.4v214.6c.5 28-46.5 56.3-119.9 92.5-75.7-39-119.4-62.7-119.8-93l.9-212.7z"
      }, null), _createVNode("g", {
        "id": "lamp",
        "fill": "#ffc72c",
        "stroke": "#000",
        "stroke-width": ".9"
      }, [_createVNode("path", {
        "id": "path859",
        "fill": "none",
        "stroke": "#ffc72c",
        "stroke-width": "1.9",
        "d": "m814.8 181.8 14-20.7 14.3 20.8"
      }, null), _createVNode("path", {
        "id": "path861",
        "d": "M831.7 174a2.8 2.8 0 1 1-5.6 0 2.8 2.8 0 0 1 5.6 0z"
      }, null), _createVNode("path", {
        "id": "path863",
        "d": "M817.4 197.1h21.9s.3-2.8-2.3-4.5c11.5-1.6 8.5-11.6 18-12.2 2 .3-5 4.3-5 4.3s-5.7 4-3 6.1c2 1.7 3-1 3.2-3 .3-2 9.3-3.3 8-9-2.1-4.7-14.7 3.2-14.7 3.2l-9-.1c-.6-1-3-5-5.6-5-3 0-5.2 5-5.2 5h-20.3s-.7 5.3 9.6 6.3c2.3 3 4.1 3.8 6.2 4.6-1.4 1.1-1.8 2.5-1.8 4.3z"
      }, null), _createVNode("path", {
        "id": "path865",
        "d": "M819 192.7h18.2"
      }, null), _createVNode("path", {
        "id": "path867",
        "d": "M810.7 182s1.4 8.5 8.2 10.5"
      }, null), _createVNode("path", {
        "id": "path869",
        "fill": "url(#grad)",
        "d": "M809.6 181.8c.6-3.2 1.9-3.8 3.2-8 .2-4-3.2-3.5-2.2-6 1.8-2.9.9-5.6-2.5-7.7.7 3.7-4.4 7.2-4.4 10.2 0 3 2.6 2.4 2.3 7 .2 2.6-.7 2-1 4.5h4.6z",
        "style": "fill:url(#grad)"
      }, null), _createVNode("path", {
        "id": "path871",
        "d": "M831.5 161.7a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0z"
      }, null)]), _createVNode("use", {
        "id": "use874",
        "width": "100%",
        "height": "100%",
        "x": "-.8",
        "y": "41.3"
      }, null), _createVNode("use", {
        "id": "use876",
        "width": "100%",
        "height": "100%",
        "x": "-1.1",
        "y": "82"
      }, null), _createVNode("use", {
        "id": "use878",
        "width": "100%",
        "height": "100%",
        "x": "25.6",
        "y": "126.1"
      }, null), _createVNode("use", {
        "id": "use880",
        "width": "100%",
        "height": "100%",
        "x": "-4.6",
        "y": "162.2"
      }, null), _createVNode("use", {
        "id": "use882",
        "width": "100%",
        "height": "100%",
        "x": "-3.8",
        "y": "204.8"
      }, null), _createVNode("use", {
        "id": "use884",
        "width": "100%",
        "height": "100%",
        "x": "146.3",
        "y": ".7"
      }, null), _createVNode("use", {
        "id": "use886",
        "width": "100%",
        "height": "100%",
        "x": "144.9",
        "y": "41.2"
      }, null), _createVNode("use", {
        "id": "use888",
        "width": "100%",
        "height": "100%",
        "x": "143.1",
        "y": "82.7"
      }, null), _createVNode("use", {
        "id": "use890",
        "width": "100%",
        "height": "100%",
        "x": "145.2",
        "y": "123.4"
      }, null), _createVNode("use", {
        "id": "use892",
        "width": "100%",
        "height": "100%",
        "x": "144.7",
        "y": "164.2"
      }, null), _createVNode("use", {
        "id": "use894",
        "width": "100%",
        "height": "100%",
        "x": "144.9",
        "y": "205.2"
      }, null), _createVNode("g", {
        "id": "g996",
        "fill": "#ffc6b5",
        "stroke": "#000",
        "stroke-width": ".9"
      }, [_createVNode("path", {
        "id": "path896",
        "fill": "#ffc72c",
        "d": "M915.8 406.3s5.7 13.2 12.2 5c6.5-8 4.2-11.5 4.2-11.5l-14.6-7.9-4.3 9 2.5 5.4z"
      }, null), _createVNode("path", {
        "id": "path898",
        "d": "M928.4 404.6s1 .1 1.7-1.3c.8-1.4-1.7-2-2.9-3.6l-1.2 2.5z"
      }, null), _createVNode("path", {
        "id": "path900",
        "d": "m895.4 401-12.8 7s-6.4 1.3-6.8 0c-.5-1.2.1-2.3 3.5-2.5 3.3-.1 12.3-8.4 12.3-8.4l3.8 4z"
      }, null), _createVNode("path", {
        "id": "path902",
        "d": "m895.6 173.1.4 4.6c.2 1.6-2.5 5-2.6 4.8-.2-.2-1.5.2-1.3 1.1.1 1 2 1.3 2 1.3s-.7 3.3 0 3.5c.8.1-2 4.2 0 5.3 2.1 1.1 5.6 2.6 7.2 2.3 1.6-.4 0 6.1 0 6.1l-4.5 9.5 24.4-2.5-5-8s-2.4-1.7-1.8-6.3c.7-4.5-.3-25.3-.3-25.3l-17.4-2.4-1.1 6z"
      }, null), _createVNode("path", {
        "id": "path904",
        "d": "M891.1 209.3s-7.9 3.6-7.6 13.4c-2 9.5-3.1 19-3.1 19s-9.4 10.6-12.2 14.5c-2.9 3.8-7.2 11.5-8.7 13.6-1.6 2-7.8 8.8-7.7 11.4.2 2.5-1.4 13.8 4.8 15 1.6.7 6.7-13 6.7-13s.3-5.8-1.5-7c-1.7-1 3.8-4.8 3.8-4.8l13-9.7c2.4-2 8.9-9.2 8.9-9.2l3.6-43.2z"
      }, null), _createVNode("path", {
        "id": "path906",
        "fill": "#fff",
        "d": "M900.2 201.8s2 5.6 6.6 4.6 10-5.2 10-5.2 4.3-.2 4.9.5c.6.6 11.6 11.2 11.2 14.5-.3 3.4-5 2.4-6.8 4.6-1.7 2.2-4.6 7.8-3.8 12 .8 4 3.2 9.4 2.9 11.5-.3 2-2 2.7-2 3.8 0 1 1.4 3 1.4 5 0 2.1-2 5.1-1.6 7.2.3 2 .4 8 .4 8l-.4 28s1.6.9 1.7 2.5c.2 1.5 10.8 47.6 10.8 47.6s-.5 1.5-1.6 1.3c-1.1-.2 4.3 7.1 4.4 9.2.2 2 5.6 18.2 5.4 20.4-.1 2.2-1 7.2-1.4 7.3-.5.2 3.5 10.2 2.8 11.7-.6 1.6-7 1.5-7 1.5l-1.8-.4s.1 2.1-1.1 2.3c-1.3.1-10.6-.5-10.6-.5s-2.7 4.1-4.3 4c-1.6-.2-3.7-3-4.1-2.6-.5.5 1.4 3.2 1 4-.6.8-8.6 2.5-10.2-1.3-1.6-3.8 1-2.8.4-3.6-.4-.8-4-2.9-5.2-2.3-1 .7 2.9 1.6 2.7 3.2-.1 1.6-3.5 4-4.7 4-1.3 0-4.3-5.9-8.8-5.3-4.4.7-7.2 1.8-7.2 1.8s-5.3 2.2-7.5 1.7c-2.2-.4-3.2-2.2-3.2-3.1 0-1 1.6-5.1 1.5-6.4-.2-1.2-1.5-2.5-1.5-4.4 0-2 3.7-8.4 3.7-8.4l-.2-29.2s-3.3 0-3.5-2c-.1-2 5.1-46.1 6-49l2.8-13s-2.4 1.2-2.6 0c-.1-1 7.2-26.2 7.2-26.2s1.2-12.6 1.2-15.9c0-3.3-.6-7.9-.6-7.9s-6.5-2.8-6.7-7c-.6-6.7 6.2-10.4 7-12.6l3.2-9s3.5-6 9.2-6.9z"
      }, null), _createVNode("path", {
        "id": "path908",
        "fill": "#ffc72c",
        "d": "M897.8 403s-15.4 8-17.6 8.7c-2.2.6-3.6-2.7-1.4-3.3 2.2-.7 5.7-1 5.7-1s-5.2-4.1-5-4.3l7.2-2.6c.2 0 2.2 4 3.6 3.8a31 31 0 0 0 5.6-3.5l1.9 2.2z"
      }, null), _createVNode("path", {
        "id": "path910",
        "d": "M919.4 407.4c1.5 1.9 2 5.1 5.4 3.2 3.3-1.9-1.7-5.4-1.7-5.4z"
      }, null), _createVNode("path", {
        "id": "path912",
        "d": "M925.5 407.1s1.6 1.3 3-.2c1.4-1.4-2.8-4.4-2.8-4.4l-2.1 2.4z"
      }, null), _createVNode("path", {
        "id": "path914",
        "d": "M932.3 217c.2 0 5.2 15.6 5.9 19.6.6 4 2.7 19.8 1.9 22-.8 2.2-8.9 12.8-9.8 15.5-1 2.7-6.7 13-6.7 13s-1.4 10.2-2 10.6c-.7.5 1.6 3 1.4 3.8-.3 1-4.6 5.4-6.5 5-2-.5-5-2.7-5-4.8-.3-2 0-8.9 1.5-10.6 1.4-1.8 8.9-19.3 9.3-20.4.5-1.2 6.8-15 7-17.3.2-2.4-2-7.9-4.2-9.9-5-14.7-3-23.5 7.2-26.5z"
      }, null), _createVNode("path", {
        "id": "path916",
        "fill": "#9c5100",
        "d": "M895 172.2s3.6.5 5.5-.6 4.1-1.6 5.7.6c1.6 2.2 2.7 2 2.7 2s-2.4 6 0 6.6c2.3.6 3.5.6 3.6 1.4.2.8-2 2.5-1.4 3.3.6.8 1.7 1.7 1.9 2.4.1.6-1.4 3.3-1 4 .5.6 2 3.1 2.9 3.1 1 0 .3 4 3.2 3 2.8-1 2.7-3.5 2.7-3.5s3-.4 3.8-3.1c.7-2.7 2.6-3.4 2.6-3.4s3.8-2-1.2-5.2c0-22.2-14.6-19.8-14.6-19.8s-1.7-4-4.6-3.5c-2.8.5-3 3.8-5 3.5-2.1-.3-2.6-1.7-2.7-1.6-.2.2-2 3.4-2 4.1 0 .8-5.5-1-5 3 .5 4.2 3.2 4 3 3.7z"
      }, null), _createVNode("g", {
        "id": "g994",
        "fill": "none"
      }, [_createVNode("path", {
        "id": "path918",
        "d": "M920.8 208s-14.1 9-13.8 12.2"
      }, null), _createVNode("path", {
        "id": "path920",
        "d": "M924 209.6s-3.2 3.5-3.4 3.5"
      }, null), _createVNode("path", {
        "id": "path922",
        "d": "M928.2 213.4s-7 5.7-5.9 9.3"
      }, null), _createVNode("path", {
        "id": "path924",
        "d": "M895.3 207.2s-2.1 4.3-1.6 5.7c.4 1.4 4 6.8 4.4 10.1.5 3.4 0 5.7 0 5.7"
      }, null), _createVNode("path", {
        "id": "path926",
        "d": "M891.6 215.1s.6 5 1.6 6 3.5 5.3 3.8 7"
      }, null), _createVNode("path", {
        "id": "path928",
        "d": "M890.3 236.2s4.2 2 8-5.9"
      }, null), _createVNode("path", {
        "id": "path930",
        "d": "M904.4 224.8c-.1 0-3 7.7 2.1 10.6 5 2.9 8.9 2.5 11 1.7 2.3-.7 4.7-2.2 4.7-2.2"
      }, null), _createVNode("path", {
        "id": "path932",
        "d": "M902.2 234.3s.3 10.4 15.7 20.7"
      }, null), _createVNode("path", {
        "id": "path934",
        "d": "M902.9 244.1s-.2 9.2 5.8 13.3"
      }, null), _createVNode("path", {
        "id": "path936",
        "d": "M899.7 233.3s-4.6 13.7-8.3 15"
      }, null), _createVNode("path", {
        "id": "path938",
        "d": "M898.3 243.3s-.2 9.8-1.5 13.3"
      }, null), _createVNode("path", {
        "id": "path940",
        "d": "M895.6 259s3.1 4 6.6 3.6c3.5-.3 5-4.4 7.3-3.8 2.4.7 4.6 2.6 10.1 2.1"
      }, null), _createVNode("path", {
        "id": "path942",
        "d": "M911.7 265s0 8.1 1.5 8.9c1.4.8.7 8.2.7 8.2"
      }, null), _createVNode("path", {
        "id": "path944",
        "d": "M892.4 261.2s-.2 7.6-1.1 10.3c-1 2.7-2.9 7.3-2.5 11.3"
      }, null), _createVNode("path", {
        "id": "path946",
        "d": "M882.7 287.2c.8-.3 3.5-2.7 3.5-2.7"
      }, null), _createVNode("path", {
        "id": "path948",
        "d": "M887.6 286.2s-6.8 29.2-4.9 46.6"
      }, null), _createVNode("path", {
        "id": "path950",
        "d": "M889.2 287.7s-3.5 21.8-1.9 26"
      }, null), _createVNode("path", {
        "id": "path952",
        "d": "m887.5 287 13.3 1"
      }, null), _createVNode("path", {
        "id": "path954",
        "d": "M902.7 286.2s3.6 2 8.7 1.6"
      }, null), _createVNode("path", {
        "id": "path956",
        "d": "M901.1 296.9s-.6 37.3-1.6 45.6"
      }, null), _createVNode("path", {
        "id": "path958",
        "d": "M920.6 305.4s4.1 32.8 6.5 35.8"
      }, null), _createVNode("path", {
        "id": "path960",
        "d": "M912.7 309.5s2.5 29 4 31.6"
      }, null), _createVNode("path", {
        "id": "path962",
        "d": "M876.7 351.2s5-1.6 9.4-6.3c5 6.8 12.8.3 12.8.3s12 8.2 17.4-1c8.3 5.4 12.4-.8 12.4-.8s3 4.6 5.2 4.1"
      }, null), _createVNode("path", {
        "id": "path964",
        "d": "M920.8 350.7s6.1 29 15.3 37.2"
      }, null), _createVNode("path", {
        "id": "path966",
        "d": "M889 347.7s.7 24.2 2.1 41.3"
      }, null), _createVNode("path", {
        "id": "path968",
        "d": "M887.8 375.1s-.8 15.8-1.7 17"
      }, null), _createVNode("path", {
        "id": "path970",
        "d": "M878.5 393.6s1.7 6.9 10.4.5c8.7-6.3 8.9 2.4 9.2 3.3.3 1 1.7 7.8 5 2.1"
      }, null), _createVNode("path", {
        "id": "path972",
        "d": "M910.1 390.2s-1.4 14 11.1 3.8c12.5-10.3 14.6-.2 15 3"
      }, null), _createVNode("path", {
        "id": "path974",
        "d": "M910.3 166.8s-1.1 7 6.3 6.3c-1 3.9 2 5.1 2 5.1"
      }, null), _createVNode("path", {
        "id": "path976",
        "d": "M924 182.5c.2 0 3.4 2 0 4.6"
      }, null), _createVNode("path", {
        "id": "path978",
        "d": "M913.3 188s1.6 2 3.3 1.5c1.8-.5 4.6 1.7 4.6 1.7s2.4.8 2.7.3"
      }, null), _createVNode("path", {
        "id": "path980",
        "d": "M903.6 194s5.4 2.1 9-6.4"
      }, null), _createVNode("path", {
        "id": "path982",
        "d": "m893.7 185 3.1.2"
      }, null), _createVNode("path", {
        "id": "path984",
        "d": "m858.5 285 .3 6.9"
      }, null), _createVNode("path", {
        "id": "path986",
        "d": "M852 284.4s4.5 7.5 4 11.4"
      }, null), _createVNode("path", {
        "id": "path988",
        "stroke-linejoin": "round",
        "d": "M894.1 188.2h2.9l-2.5 1.1"
      }, null), _createVNode("path", {
        "id": "path990",
        "stroke-linejoin": "round",
        "d": "M911.7 300s3.3-.4 3.2 5.2c2.1-7 6.4-7.1 6.4-7.1"
      }, null), _createVNode("path", {
        "id": "path992",
        "stroke-linejoin": "round",
        "stroke-width": "1.7",
        "d": "M898.1 179.3c.5 0 2.2-.6 2.5-.1.4.4-1.9.8-2.5.1z"
      }, null)])]), _createVNode("g", {
        "id": "g1008",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": "1.9"
      }, [_createVNode("path", {
        "id": "path998",
        "fill": "#ffc72c",
        "d": "M900.3 458.6a160.4 160.4 0 0 0 109.6-50.7c-.4-.4 8.9-13.4 16.3-11.6 7.4 1.9 18.1 23.7 31.1 28.4 6.5 10.2-1.8 19.5-4.6 21.3-2.8 1.9-15.4 7-17.2-.4-1.9-7.5-5.6-6-5.6-6s-59.5 58-128.2 55.7c-71 .4-129.6-55.8-129.6-55.8l-5.1 5.6s-5.6 6-8.4 5.6c-2.8-.5-14.9-8.4-15.8-16.3-1-7.9 7.4-13 7.4-13s20.5-15.8 22.8-24.1c4.7-4.7 13.5 3.2 13.5 3.2s53.9 61.8 113.8 58z"
      }, null), _createVNode("path", {
        "id": "path1000",
        "d": "M748.9 422.6s5.5-1.4 7.5.9 16 16 16 16"
      }, null), _createVNode("path", {
        "id": "path1002",
        "d": "m761.5 429.1-5.6 4.1s14 2.8 10.8 12"
      }, null), _createVNode("path", {
        "id": "path1004",
        "d": "M1052.3 422.2s-2.7-1.5-7 1.7c-4.4 3.3-15.3 15.5-15.3 15.5"
      }, null), _createVNode("path", {
        "id": "path1006",
        "d": "m1039.9 428.7 6 4.6s-12.5.9-9.8 12.7"
      }, null)]), _createVNode("g", {
        "id": "g1026",
        "fill": "#000"
      }, [_createVNode("path", {
        "id": "path1010",
        "d": "M819.7 437.4c-.4 1-1.4 0-2.2.2-2 0-3.8 1.4-5.6 2.4l-18.4 10.7c-.6-.2-.5-.7-.3-1.2l5-23c.2-1.3.6-3-.7-4-.5-.4.3-1.1.7-.4l9.4 6.7c-.3.9-.9.2-1.4-.1-1.3-1.3-2.9-.1-2.8 1.5l-3.4 15.1c4.2-2.4 8.4-4.8 12.6-7.4 1.4-.6 2.5-2.6 1-3.8-.6-.4-1.6-1.3-.6-1.5l6.7 4.8z"
      }, null), _createVNode("path", {
        "id": "path1012",
        "d": "M826.3 469.4c-.2.6-.5.7-1 .3l-11-6c.1-.7.4-.8.9-.4 1 .7 2.6 1 3.4-.2l4-7.3 5.6-10.2c.8-1.3-.1-2.8-1.3-3.3-.4-.2-1-.4-.5-.8.2-.3.8.3 1.1.4l10.6 5.8c-.1.6-.4.7-.9.3-1-.7-2.6-1-3.4.2l-4 7.3-5.6 10.2c-.8 1.2.1 2.8 1.3 3.3l.8.4z"
      }, null), _createVNode("path", {
        "id": "path1014",
        "d": "m868.9 459.4-3 8.4c-1.3-.1-.4-1.7-.8-2.5a9.5 9.5 0 0 0-7-8.2c-3-.8-6 .7-7.8 3.1a22.9 22.9 0 0 0-4.4 12.2 7 7 0 0 0 3.2 6.4 10 10 0 0 0 5.9 1.5l2.1-6.3c.3-1.4-1.2-2.3-2.3-2.6-.2-.4.2-1 .7-.5l11 4c0 1.3-1.6-.2-2.5.4-1.3.5-1.4 2.1-2 3.3l-1.3 3.8c-5 .3-10-.7-14.4-3.2-4.1-2.6-7-7.7-6.1-12.7.6-4.3 3.3-8.3 7.2-10.2 3.6-2 8-1.9 11.8-.4 2 .7 3.8 2 5.4 3.4 1 1.3 2.8 1.3 3.6-.1l.7.2"
      }, null), _createVNode("path", {
        "id": "path1016",
        "d": "M886.8 488.2c0 .4 0 .9-.6.6l-12.6-1.9c0-.5 0-.9.6-.6 1 .2 2.6.2 3-1 .6-1.7.7-3.5 1-5.2l2.2-14.6c.3-1 0-2.2-1.1-2.6-.7-.3-1.3-.3-2-.5 0-.4 0-.8.6-.6l12.6 2c0 .4 0 .8-.6.6-1-.3-2.5-.2-3 1-.6 1.6-.7 3.4-1 5.1l-2.2 14.6c-.3 1 0 2.3 1.2 2.7l2 .4z"
      }, null), _createVNode("path", {
        "id": "path1018",
        "d": "m921 480-.5 8.9-22.6 1.1c-.1-.5 0-.8.6-.7 1.1 0 2.6-.5 2.8-1.8l-.3-6.6-.7-13.4c.1-1.3-1-2.3-2.3-2.2-.4-.2-1.5.4-1.4-.3-.2-.6.7-.3 1-.4l12.6-.7c0 .6 0 .9-.7.8-1.1 0-2.6.2-3 1.6-.1 1.9.1 3.8.2 5.7l.7 14c0 1.1 1 2.2 2.2 2 1.8-.1 3.7 0 5.5-.5 2.5-.7 3.8-3.2 4.5-5.5.5-.6 0-2.2 1-2h.4"
      }, null), _createVNode("path", {
        "id": "path1020",
        "d": "M938.5 458.2c-.6 0-.3.8-.5 1.2-1 7.5-1.9 15-3 22.4-.2 1.7-.6 3.6-2.2 4.4-.6.3-.1 1.2.5.7l7.5-2.3c-.1-1.2-1.6 0-2.4-.3-1.7 0-2-2.1-1.7-3.4 0-1 .2-1.8.3-2.7l8.6-2.6c1.1 1.4 2.3 2.7 3.3 4.2.8 1.4-1 2-2 2.3-.6 0-.2 1 .3.6l11.3-3.4c0-1.3-1.6 0-2.3-1-2.2-1.5-3.7-3.7-5.4-5.7l-12.3-14.4zm0 9 6 7.3-7.3 2.2 1.3-9.5z"
      }, null), _createVNode("path", {
        "id": "path1022",
        "d": "m977.1 441.4 3.3 6c-1 1-1.6-1.1-2.5-1.4a4.7 4.7 0 0 0-5.5-.5l-2 1.1 9.8 18.3c.5 1.5 2.4 1.8 3.7 1 .4-.4.9-.6 1 .1-1.6 1-3.5 1.9-5.2 2.8l-6.5 3.5c-.5-.5-.2-.8.4-1a2.4 2.4 0 0 0 1.1-3.7l-9.7-18c-1.8 1-4 1.8-4.5 4-.5 1.5.2 3.2.2 4.4-.5.6-.7-.2-1-.6l-2.7-5.2 20.1-10.8z"
      }, null), _createVNode("path", {
        "id": "path1024",
        "d": "m992.4 432.3 6.2 8.3c1.4-1 2.6-2.6 2.2-4.4.2-1.4-1.8-3-1.1-4 .4-.2.7.8 1 1.1l7.2 9.5c-1 1-1.6-1.1-2.6-1.4-1.4-1-3.3-1.5-4.8-.4-1.1.4-1 1-.3 1.7 1.6 2.1 3.2 4.4 5 6.5 1 1 2.4 0 3.3-.8 2.4-1.6 4.5-4.2 4.4-7.2.2-1.4-.7-2.8-.7-4 .6-.7.7.4 1 .8l3.4 6-17.6 13.3c-.7-.5 0-.9.5-1.2 1.6-1 1.1-3.1 0-4.2L988.1 437c-1-1.3-2.8-.6-3.7.3-.5.6-1-.5-.3-.6l16.5-12.5 4.5 6c-1 1-2-1.3-3.1-1.4-2.2-1.2-4.8-.3-6.6 1.2l-3.1 2.3"
      }, null)])])]);
    };
  }
};