import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'MsIcon',
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
        "id": "flag-icons-ms",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "id": "rect950",
        "fill": "#012169",
        "stroke-width": ".7",
        "d": "M0 0h640v480H0z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path962",
        "fill": "#fff",
        "stroke-width": ".8",
        "d": "M384.9 111h205.5l-.3 146.3c1.7 58.7-34.9 95.2-102.3 111.7-47.9-12-103-36.5-103.2-110l.3-148z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path964",
        "fill": "#00a2bd",
        "stroke": "#000",
        "stroke-width": "1.8",
        "d": "M389.4 115.4h196.4l-.2 140.2c1.6 56.3-33.4 91.2-97.8 107-45.8-11.4-98.5-35-98.6-105.4l.2-141.8z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path966",
        "fill": "#a53d08",
        "stroke-width": ".8",
        "d": "M584.3 272.2c-7.2 53.7-48.6 77.2-96.5 89.7-42.5-11.4-88.2-29.6-97-89.5l193.5-.2z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path968",
        "fill": "#000",
        "stroke-width": ".8",
        "d": "m480 141.5-.3-17.6 14 .1.1 17.5H532l.1 13.7-38.3.2-.3 161.4-13.6.1-.2-161.7-38 .2v-14z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path970",
        "fill": "#ff9a08",
        "fill-rule": "evenodd",
        "stroke": "#000",
        "stroke-width": ".8",
        "d": "m449 278.8 35 36.3c12.1-13.3 3.7-63-12.2-72.1-1.9 5.9-5.1 13-8.6 15.2-7.5 5.2-26.1 11.2-19.9 15 1.4-1.9 5.1-3.7 6.9.6 2 6.9-7.8 7.3-7.8 7.3s-6.2-.8-7.3-7c-1-6.4 9.3-12.2 10.2-12.6.8-.3 14.3-4 16.6-15.9 2.9-11.8 5.8-10 6.3-10.2 17.7 1.7 29.2 33.3 29.9 55.5.6 22.2-9 37-10.8 38-1.7.9-42-47.9-42-47.9l3.8-2.2z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path972",
        "fill": "#ff9a08",
        "stroke": "#000",
        "stroke-width": ".8",
        "d": "m474.6 245 .2 65.5",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path974",
        "fill": "#ff9a08",
        "stroke": "#000",
        "stroke-width": ".8",
        "d": "m470.6 246.3.3 59.4",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path976",
        "fill": "#ff9a08",
        "stroke": "#000",
        "stroke-width": ".8",
        "d": "m466.4 254.9.2 47.2",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path978",
        "fill": "#ff9a08",
        "stroke": "#000",
        "stroke-width": ".8",
        "d": "m462.9 258.2.2 39.1",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path980",
        "fill": "#ff9a08",
        "stroke": "#000",
        "stroke-width": ".8",
        "d": "M459.2 260v33",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path982",
        "fill": "#ff9a08",
        "stroke": "#000",
        "stroke-width": ".8",
        "d": "M455.2 262.6v26.1",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path984",
        "fill": "#ff9a08",
        "stroke": "#000",
        "stroke-width": ".8",
        "d": "M451.7 264.7v20",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("g", {
        "id": "g994",
        "fill": "none",
        "stroke": "#ffdf00",
        "stroke-linecap": "round",
        "stroke-width": "1.8",
        "opacity": "1",
        "transform": "matrix(.8 0 0 .8 -230.7 -7)"
      }, [_createVNode("path", {
        "id": "path986",
        "stroke-width": "1",
        "d": "m849 362.4 45.1 51.6"
      }, null), _createVNode("path", {
        "id": "path988",
        "d": "M896.3 329.9s20.4 44.7 1.5 81.4"
      }, null), _createVNode("path", {
        "id": "path990",
        "d": "M843.7 353s1.5-3.9 3.4-2.3"
      }, null), _createVNode("path", {
        "id": "path992",
        "d": "M840.2 341.6s-8.2 7.2-3.7 11.9"
      }, null)]), _createVNode("path", {
        "id": "path998",
        "fill": "#008021",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "M494 175.4c2.3-2 3.6-3.3 5.1-3 1.5.2 3.5 0 5-.4a31 31 0 0 1 12-.4c1 .2 2.5.7 4.6 2.5 2.1 1.8 5.2 5 4.2 13.6s-.7 12.3-1.2 17.2c-.8 8.5-2.7 15.5-6 15 4.5 8 5 15 8 20.5s4.8 16.8 3.7 29c-1.2 12.3-4.4 39.7 5.3 58.2-1.6 1.1-5.5 0-9-3.7s-5-3.6-7.8-1.4c-8.8 6.7-17 14.8-29.1 6.7-2.8-1.8-3.6-4-1.6-9.7 5-14 7.5-33.4 6.7-42.4V175.4z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("g", {
        "id": "g1010",
        "fill": "#ffe1cf",
        "stroke": "#000",
        "stroke-width": ".4",
        "opacity": "1",
        "transform": "matrix(.8 0 0 .8 -230.7 -7)"
      }, [_createVNode("path", {
        "id": "path1000",
        "d": "M916.2 217.2a12 12 0 0 1-.1 8.5c-1.3 3-1.6 6.4.6 10.6 3.4-5 8.3-4 11.2-6.8 2.9-2.9 3.5-5.6 5.6-6.2-2.1-1.9-5.4-4-4.7-9.4.7-5.5 8.3-10 1.4-18.3a10 10 0 0 0-16.7 1.5c-.4 1 .2 3-.9 4.3-.7 1-1.6 1.8-2.6 2.5-.6.5-1 1.1-.3 2 .3.3.8.3 1.3.5l-1 1.8c-.4.4-.2.8.2 1.2-.6 1.7.5 2-.2 3.2-.7 1.1-1.5 2.5.8 3.8.7.3 3.8 1 5.4.8z"
      }, null), _createVNode("path", {
        "id": "path1002",
        "d": "M888.1 246c-4 1-10.5-.8-15.4-.2-2.2.2-3.9-.9-3.6-3 .3-2.2.6-5.5.1-8.6a39.5 39.5 0 0 1 4.8-18.4 41.2 41.2 0 0 0 4.8-14.6c0-2.3.2-4.8 2.2-6.1 1.5-1 1.8-1.9 2.3-2.7 1.2-1.8 2.4-2.2 2.5-1.1.1.6-.1 1.2-.7 2 1.3-1 3.5-2.3 4-2.6.5-.4 3-2.2 3.2-.5 1-.5 1.7-.5 2 0 .2.7 0 .9-.4 1.3.7-.1 1.5 1.1 0 2.3.8-.3 1.6 1 .2 2.1-1.3 1.2-3 2-3.4 3-.5 1-4 3.6-5.3 4.1-1.4.6-1.5 1.4-1.5 3.4 0 22.2-2.6 20.4-2.6 25.8 0 1.4-.3 2.7 1.1 2.3 1.5-.5 3.6-1.1 5.7-1.1v12.5z"
      }, null), _createVNode("path", {
        "id": "path1004",
        "d": "M889 293.8c6.5-3.3 14-4.5 17.9-5.5a78 78 0 0 0 13-5.6c3.1-1.6 5.6-3.8 7.3-4.3a8.1 8.1 0 0 0 4.8-4 63 63 0 0 0 8.6-27.3c0-5-1.3-10.7-6.2-6.7a37 37 0 0 0-11 16.5c-2 8-3.7 9.8-4.1 11.4-.5 1.6-2.1 1.6-4 2a33.4 33.4 0 0 0-17 8 170 170 0 0 1-17.8 11.5c-4.6 2.6-5.5 2.8-6.5 5-1 2-2 3.6-2.8 4.5-.9 1-1.1 2-1 3.2.2 1-.2 5.3-.3 6.7 0 1.5.3 1.8.9 1.9.5 0 1.3-.2 1.6-2-.3 1.8 2.1 1.2 2.2-.1 0 1.9 2.5.8 2.6-1 0 1.3 2 .4 2.1-.1.5-1.5.8-3 1.4-4.2.8-1.7 1.7-3.9 3.4-5 1.9-1.4 1-3 4.9-5z"
      }, null), _createVNode("path", {
        "id": "path1006",
        "d": "M935.7 411.9c.4 1.6 1.2 3.4 1.5 4.5.3 1-.2 1.4-.5 2a41 41 0 0 0-3.4 11c-.1 1.5-1.2 3-1.7 4-.6 1-.3 1.8 1 2.8.5.4 2.5-.2 2.7-1.2.8.7 2 .5 2.6-.6.7.6 1.8.2 2.5-.9.6.4 1.6-.4 2-1 1 .5 2-.1 2-2 0-.5.3-1.2.6-1.6.3-.5.4-1.4.4-2.2 0-.8.4-2.4 1.1-3.5.7-1.1 1.9-3.1 1.4-5-.5-1.7-1.2-1.6-1.9-4-1.6-1.7-3.7-4-6-4.2-2.2-.1-3.5 1.4-4.3 1.9z"
      }, null), _createVNode("path", {
        "id": "path1008",
        "d": "M894.7 424.3c2 2 6.5 2 9.7-1.3-1.1-.5-3.7-1.7-4.8-2.6-1.6 1.6-3.4 3.4-5 3.9z"
      }, null)]), _createVNode("path", {
        "id": "path1012",
        "fill": "#870f00",
        "stroke": "#000",
        "stroke-width": ".3",
        "d": "M501.4 149c.6-4 3.5-4 5.3-3.5.8.1 2.6.3 4.4-.2 3.4-.9 6 .3 5.6 3.6 1 .7 2 2.3 1.7 3.7-.1 1.4.2 2 1.4 2.1 1.3.2 4 1.8 2.2 4 1.7 1 3 3.7 2.1 5.4-.9 1.8-3.6 2.1-4.8.5-1.3.6-3.3.7-4.6-.6-.9 1-3 .9-3.5 0-.4-1-1-1.4-1.9-1.7-.9-.3-1-2.8.4-3.1-.1-.8 0-1.6.3-2 .3-.4 0-1.2-.8-1.8-.8-.7-1.5-3-.7-4.4-1.4.5-4.4-.9-5-1.8-.7-1-1.6-1-2.1-.2z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("g", {
        "id": "g1088",
        "fill": "none",
        "stroke": "#000",
        "stroke-width": ".4",
        "opacity": "1",
        "transform": "matrix(.8 0 0 .8 -230.7 -7)"
      }, [_createVNode("path", {
        "id": "path1014",
        "d": "M916.2 217.2c2.8-.3 3.7-2 5.8-2"
      }, null), _createVNode("path", {
        "id": "path1016",
        "d": "m910.2 209.4.7.4c.5.3 1.2.4 1.7.5"
      }, null), _createVNode("path", {
        "id": "path1018",
        "d": "m911 206.4 1.2.7"
      }, null), _createVNode("path", {
        "id": "path1020",
        "d": "M917.5 195c-1.6-1.6 2.8-4.8 7.5-.2 1 .9 3.1.9 3.8.7"
      }, null), _createVNode("path", {
        "id": "path1022",
        "d": "M924 197.5c2.2-.5 5.4-.5 6.4 2 1 2.4 2.8.8 4.3 3.7 1.5 2.9 3.9 6.1 6.2 3.9"
      }, null), _createVNode("path", {
        "id": "path1024",
        "d": "M931.7 213.7a5 5 0 0 1-.5-4c-.8-1-.5-3.1 0-4.1"
      }, null), _createVNode("path", {
        "id": "path1026",
        "d": "M925.5 207.7c.1.9 1.3 2.5 3 2.8"
      }, null), _createVNode("path", {
        "id": "path1028",
        "d": "M937.5 214.5c-1-1.3-.9-2.5-.6-4"
      }, null), _createVNode("path", {
        "id": "path1030",
        "d": "M927 200.1c0 1.3.7 3 2 3.6.4.8 1.8 2.8 4.7 2.5"
      }, null), _createVNode("path", {
        "id": "path1032",
        "d": "M934.3 194.9a13.6 13.6 0 0 0-6.6-3.1"
      }, null), _createVNode("path", {
        "id": "path1034",
        "d": "M916.7 236.3c-2.5 3.3-4 7.9-3 14.4 1.2 6.5 3.1 16-1.6 20.3"
      }, null), _createVNode("path", {
        "id": "path1036",
        "d": "M935.4 283.6c-3.3-.8-8-.8-10.7 1.1-2.5 1.9-6.9 2-9.8.6"
      }, null), _createVNode("path", {
        "id": "path1038",
        "d": "M928.4 283.3c-2.9.5-4.2 2.6-4.2 7.9 0 5.3-1.2 13.1-.2 20.8"
      }, null), _createVNode("path", {
        "id": "path1040",
        "d": "M923.2 285.6c-2 .5-3.9.5-3.5 5.6"
      }, null), _createVNode("path", {
        "id": "path1042",
        "d": "M913.4 291.3c.1-3 1.2-6 3.2-5.4"
      }, null), _createVNode("path", {
        "id": "path1044",
        "d": "M934.2 292c.1-7-1.4-8.9-3.4-8.8 2.7 0 4.6.4 5.8 11.6.8 8.4 2.6 11.3 4.6 17.9 5.2 17 2.6 43.2 5.2 52.5"
      }, null), _createVNode("path", {
        "id": "path1046",
        "d": "M930.2 294c5.5 15.8 8.4 33.4-.5 61.6 6 16.8 12 28.9 13.2 35.8"
      }, null), _createVNode("path", {
        "id": "path1048",
        "d": "M913 331.4c1-3.6-2.7-4 .5-16.7 1.4-5.5 1.6-8.8.7-10.5"
      }, null), _createVNode("path", {
        "id": "path1050",
        "d": "M914.2 311.7c-1.3 5.6 4.2 16.1 1.5 23.8"
      }, null), _createVNode("path", {
        "id": "path1052",
        "d": "M908.9 336.9c0 5 1.1 11.3.9 16.2-.3 4.9 1.7 7.1 4 11.8 8.4 16.7 14 28.6 13.3 44.4-.2 2.9.8 9-2.2 10.7"
      }, null), _createVNode("path", {
        "id": "path1054",
        "d": "M909.1 424.2c.9 0 1.8-.4 2.9-3a81 81 0 0 0 3-28.8"
      }, null), _createVNode("path", {
        "id": "path1056",
        "d": "M916.8 404.5c.4 3.3.4 10.1-1.7 15.5"
      }, null), _createVNode("path", {
        "id": "path1058",
        "d": "M922.3 394.6c1.3 7 1.1 13.4.1 17.9"
      }, null), _createVNode("path", {
        "id": "path1060",
        "d": "M919.4 412.5c.2 2.8 1.5 10-.7 10.6"
      }, null), _createVNode("path", {
        "id": "path1062",
        "d": "M930.2 379c5.4 8.4 9.5 29 14 33.3"
      }, null), _createVNode("path", {
        "id": "path1064",
        "d": "M934.8 409c-.1-2.3-.2-5.5-1.5-7"
      }, null), _createVNode("path", {
        "id": "path1066",
        "d": "M877.2 308c.1-1.5-.2-3 1.6-5.5"
      }, null), _createVNode("path", {
        "id": "path1068",
        "d": "M874.6 309c.3-5.5.2-6 1.8-7.6"
      }, null), _createVNode("path", {
        "id": "path1070",
        "d": "M872.4 309.1c0-4-.4-5.3 1.2-7.8"
      }, null), _createVNode("path", {
        "id": "path1072",
        "d": "m892.3 190.2-5.7 4.3"
      }, null), _createVNode("path", {
        "id": "path1074",
        "d": "M893.9 191.5c-.7.1-2.7 1.8-6.2 4.5"
      }, null), _createVNode("path", {
        "id": "path1076",
        "d": "M894 193.8c-1.2.5-3.3 2.5-5.2 3.9"
      }, null), _createVNode("path", {
        "id": "path1078",
        "d": "m885.1 193.4-2 2"
      }, null), _createVNode("path", {
        "id": "path1080",
        "d": "M935.3 435c-.3-.3-.3-1.6.3-3"
      }, null), _createVNode("path", {
        "id": "path1082",
        "d": "M938 434.4c-.5-.4 0-2.2.3-3.3"
      }, null), _createVNode("path", {
        "id": "path1084",
        "d": "M940.4 433.5c-.5-.2-.6-1.2 0-2.6"
      }, null), _createVNode("path", {
        "id": "path1086",
        "d": "M942.3 432.5c-.3-.1-.4-.7.1-2.2"
      }, null)]), _createVNode("g", {
        "id": "g1094",
        "fill": "#000",
        "stroke": "none",
        "stroke-width": ".4",
        "opacity": "1",
        "transform": "matrix(.8 0 0 .8 -230.7 -7)"
      }, [_createVNode("path", {
        "id": "path1090",
        "d": "M914 199.6c1 1.3 2.1 1.2 2.3 2 .2 1 .3 1 .5 1.3.2.2-.5.2-.8 0h-1.7c-.5 0-1.1-.7-.8-.7.4-.1.4-.2.3-.5 0-.3.2-.7.4-.8l-.1-.4c-.2-.4-.4-1.2-.1-1z"
      }, null), _createVNode("path", {
        "id": "path1092",
        "d": "M914.6 198.3a8 8 0 0 1 4.3 2c.8 1 .1.7-.3.7s-1.3-.2-1.7-.8a5.8 5.8 0 0 0-2.4-1.4c-.4-.1-.8-.6.1-.5z"
      }, null)]), _createVNode("path", {
        "id": "path1746",
        "fill": "#012169",
        "stroke-width": ".5",
        "d": "M0 0h320v240H0z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path1748",
        "fill": "#FFF",
        "stroke-width": ".5",
        "d": "m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path1750",
        "fill": "#C8102E",
        "stroke-width": ".5",
        "d": "M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path1752",
        "fill": "#FFF",
        "stroke-width": ".5",
        "d": "M120.5 0v240h80V0zM0 80v80h320V80z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null), _createVNode("path", {
        "id": "path1754",
        "fill": "#C8102E",
        "stroke-width": ".5",
        "d": "M0 96.5v48h320v-48zM136.5 0v240h48V0z",
        "opacity": "1",
        "stop-opacity": "1"
      }, null)]);
    };
  }
};