import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'TcIcon',
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
        "id": "flag-icons-tc",
        "version": "1.1",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("path", {
        "id": "path314",
        "fill": "#006",
        "d": "M640 480V0H0v480h640z",
        "style": "fill:#002868;fill-opacity:1"
      }, null), _createVNode("g", {
        "id": "g90",
        "fill": "none",
        "stroke": "#000",
        "transform": "matrix(.125 0 0 .125 485 299.6)"
      }, [_createVNode("path", {
        "id": "use26",
        "d": "M840-1000v720C840 200 600 717 0 997-600 717-840 200-840-280v-720z",
        "style": "fill:#fcd116;stroke-width:64"
      }, null), _createVNode("path", {
        "id": "use28",
        "d": "M840-1000v720C840 200 600 717 0 997-600 717-840 200-840-280v-720z",
        "style": "stroke:#fff;stroke-width:56"
      }, null), _createVNode("g", {
        "id": "g88",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2.2"
      }, [_createVNode("g", {
        "id": "g38",
        "transform": "translate(-400 -400)"
      }, [_createVNode("path", {
        "id": "path30",
        "fill": "#fcad56",
        "d": "M97 193c-22 37-59 45-88 33-30-12-57-82-87-120-29-37-37-21-57-43-19-21-49-37-96-59-26-12-53-23-71-69 7-19 26-35 41-41 15-5 27-27 29-46 2-18 18-38 40-53-10 2-31-2-41-9-9-8-24-6-33 1-9 6-20 8-36 6 6-5 17-16 18-26s13-15 36-15c22 0 37-26 55-26-13 0-10-22-3-23-32-6-28-32-15-32-1-4-5-8-20-13-14-5-7-18 4-26-10-20-1-35 15-48-22-1 2-32 8-49 6-16 9-18 16-8 8 9 26 30 47 36 20 6 32 17 36 34 4 18 12 27 34 35 23 7 54 26 50 69 18 1 31 6 42 15"
      }, null), _createVNode("path", {
        "id": "path32",
        "fill": "#ffa1a1",
        "d": "M152-349c0 24 11 39 25 51 15 12 28 22 25 37-3 16 3 26 16 36 14 10 24 22 20 42s-1 32 7 47 22 27 16 51-3 56 5 72c7 15 0 27-14 54-14 26-22 36-51 46-30 9-32 27-32 58 0 32-21 48-60 42-40 33-65-6-75-55S22 30-37-13c-58-44-35-118 14-148 49-29 43-115 37-168-5-53 30-83 57-112 36 14 81 69 81 92z"
      }, null), _createVNode("path", {
        "id": "path34",
        "fill": "#f1b2dc",
        "d": "M67-8c-11-26-23-52 6-108 30-57 11-100 2-129-9-28-11-54 0-66 12-11 17-18 18-37 1-18 16-12 18-3s4 24-12 51c-16 28 45 96 17 169-19 51 6 116 16 161s16 153-50 169c45-22 3-165-15-207Z"
      }, null), _createVNode("path", {
        "id": "path36",
        "d": "M-230-16c11 2 17-4 20-11s5-11 15-12c10 0 26-3 30-11 3-8 15-1 26-21 10-21 17-45 44-54m74-174c-10 0-39 1-51 27m-83-151c24 7 14 23 26 32 22 17 2 35 20 40s17 8 13 28c-6 23 16 24 8 39m-104 79c14-13 49-23 57-37m-58-32c21-1 49 7 53-1m-56-22c10 0 31-7 35-21m-50-11c12 0 27-1 42-12m-58-27c9-7 25 1 40-9m-25-39c7 0 22-2 22 7"
      }, null)]), _createVNode("g", {
        "id": "g65",
        "fill": "#9e540a",
        "transform": "translate(400 -400)"
      }, [_createVNode("g", {
        "id": "L1"
      }, [_createVNode("path", {
        "id": "path40",
        "d": "M-55-233s-70-59-128-99-128-89-128-99c11-8 70 30 151 79 82 50 128 99 128 99zm-5 40s-68-41-135-70c-70-29-175-29-186-39 0-10 122-16 209 19 89 41 135 70 135 70zm-1 68s-74-34-146-50c-70-16-170-10-182-19 0-10 124-30 217 0 94 29 134 49 134 49zm-4 69s-56-38-130-46c-70-7-163 46-175 36 0-10 81-69 182-59 99 10 146 49 146 49zm23-218s-71-65-71-109c0-39 43-99 62-99-10 20-43 60-43 99 0 40 75 89 75 89z"
      }, null), _createVNode("path", {
        "id": "path42",
        "d": "M-42-274s14-65 14-109c0-59-42-113-38-128 15 15 57 59 57 128 0 60-10 89-10 89z"
      }, null), _createVNode("g", {
        "id": "g47",
        "stroke": "none"
      }, [_createVNode("use", {
        "id": "use44",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "stroke": "#fcd116",
        "stroke-width": "12"
      }, null), _createVNode("path", {
        "id": "ant",
        "d": "M-25-295c0-19-7-36-19-49-16-19-40-25-65-21-30 5-54 23-69 51-20 37-22 77-23 116 0 135 5 190 9 323 1 39 8 119-10 182-7 27-15 52-27 78 8-33 12-50 16-75 11-65 8-126 6-186-4-123-11-186-15-335-1-45 3-79 24-115 22-37 60-64 103-64 18 0 33 3 48 12 30 16 44 49 44 82z"
      }, null)]), _createVNode("path", {
        "id": "path49",
        "d": "M-19 187s-28 50-49 86-38 44-54 33c-15-11-2-40 10-54s79-79 79-79z"
      }, null), _createVNode("path", {
        "id": "path51",
        "d": "M-12 191s-11 57-20 98c-8 41-22 55-39 50-18-4-15-37-8-54s49-103 49-103z"
      }, null), _createVNode("path", {
        "id": "path53",
        "d": "M0 193v100c0 42-10 59-29 58-18-1-22-33-18-52 3-18 28-111 28-111z"
      }, null)]), _createVNode("use", {
        "id": "use56",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "scale(-1 1)"
      }, null), _createVNode("g", {
        "id": "L2"
      }, [_createVNode("path", {
        "id": "path58",
        "d": "M0 192c-53-1-58-20-58-20s-7-24-8-39c-1-2-15-32-11-45-5-12-17-41-6-46-5-14-13-30-14-45-4-11-14-35-6-43 0 0-19-40-10-50 0 0-9-39 0-49 0 0 0-40 10-50 0 0 0-39 9-49 0 2 28-55 94-55l-1 85h1z"
      }, null), _createVNode("path", {
        "id": "path60",
        "fill": "none",
        "d": "M0-26c-85-1-103-20-103-20M0-76c-85 0-113-20-113-20M0-125c-85-1-113-20-113-20M0-175c-85-1-103-20-103-20m102-19c1 0-64 0-74-10l-19-19M0 152c-25 0-53-4-66-19m66-21c-47 0-75-19-75-19s-1-2-2-5M0 63c-62-1-79-14-83-21M0 23C-85 23-94 3-94 3l-3-6"
      }, null)]), _createVNode("use", {
        "id": "use63",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "scale(-1 1)"
      }, null)]), _createVNode("g", {
        "id": "g86"
      }, [_createVNode("g", {
        "id": "L3"
      }, [_createVNode("path", {
        "id": "path67",
        "fill": "#009e49",
        "d": "M0 712c-43 40-126 14-152-4-27 9-99-19-118-50-52 7-70-67-61-86 14-28-11-46 7-65 25-24-14-47 10-63 24-17-6-45 18-63 25-19-13-45 13-58s-3-47 19-60-13-46 17-61c29-15 3-41 26-52 25-13 2-40 25-49 26-11 7-40 29-48 19-7 7-25 19-41H0"
      }, null), _createVNode("path", {
        "id": "path69",
        "d": "M-99 18c-20 20 4 35-16 59-21 25-2 38-19 60s8 33-11 58c-19 24 4 39-17 59-20 21 4 39-17 61-20 23 4 38-16 58-21 21 3 43-17 63-20 21 4 47-19 71-22 24 4 43-14 61-19 19-2 38-15 51s-15 31-10 39M-60 25c-18 25 10 36-7 56-17 21 7 28-6 52s10 30-7 54 9 43-9 67c-19 24 9 37-8 61-16 25 8 38-7 56-15 19 11 37-8 60-18 22 8 39-7 59-15 21 6 43-7 60-13 16 9 41-10 63-18 22 4 37-7 52s-20 37-9 43"
      }, null)]), _createVNode("use", {
        "id": "use72",
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0",
        "transform": "scale(-1 1)"
      }, null), _createVNode("path", {
        "id": "path74",
        "stroke": "#009e49",
        "d": "M0 712V12"
      }, null), _createVNode("path", {
        "id": "path76",
        "d": "M0 48c-9 39 13 73 0 106-13 32 9 45 2 71-8 26 9 45-2 73s15 50 0 87c-15 36 10 45 0 82-11 42 19 64 0 94s17 37 2 71c-15 33 9 46-2 80"
      }, null), _createVNode("path", {
        "id": "path78",
        "fill": "#fcd116",
        "d": "M15 174c-5 11 15 37 4 57-12 19 6 49-6 73s19 54 7 82c-13 28 6 63 0 89-5 26 13 76 0 94-13 19 13 24-2 70s-25 7-16-7c19-31-21-41-2-71s-11-52 0-94c10-37-15-46 0-82 15-37-11-59 0-87s-6-47 2-73c7-26-15-39-2-71 10-32 20 9 15 20zm-84 32c-7 12 12 35-5 58-12 16 8 35-9 58-11 16 11 36-4 59-10 13 7 38-5 57-12 20 6 36-15 62-12 14 9 49-4 60s-1 54-10 60c-8 7 0 38-22 45 11-15-11-30 7-52 19-22-3-47 10-63 13-17-8-39 7-60 15-20-11-37 7-59 19-23-7-41 8-60 15-18-9-31 7-56 17-24-11-37 8-61 18-24-8-43 9-67s-6-30 7-54c24 9 12 61 4 73zm-50-65c-10 16 4 35-11 55-15 21 0 47-15 64-15 16 4 48-15 61s-7 52-22 65 0 50-17 69-9 58-19 67c-9 9 13 28-3 41-17 13-17 39-39 56 13-13-4-32 15-51 18-18-8-37 14-61 23-24-1-50 19-71 20-20-4-42 17-63 20-20-4-35 16-58 21-22-3-40 17-61 21-20-2-35 17-59 19-25-6-36 11-58 8-10 8-19 8-27 12-31 12 23 7 31z"
      }, null), _createVNode("path", {
        "id": "path80",
        "fill": "#ce1126",
        "d": "M-139 35c0-210 29-283 139-283s139 73 139 283z"
      }, null), _createVNode("path", {
        "id": "path82",
        "fill": "#000",
        "d": "M-139 35c0-210 29-283 139-283-50 0-81 39-89 65-9 26-4 24 7 14s6 12-4 24c-9 12-18 47-5 36 13-12 23 1 9 21-14 19-26 65-12 49s17 10 8 23c-8 13-7 25 0 19 8-6 7 21 0 32zm191-4C52 0 53-73 36-97c-12-19-12-39 2-17s21 11 11-11c-12-28-28-59-24-65 5-7 8-4 18 11s12-7 1-22c-11-14-10-17 13-7 41 17 61 66 61 231z"
      }, null), _createVNode("path", {
        "id": "path84",
        "fill": "#ce1126",
        "d": "M0 65c-44 0-92-7-124-20-38-15-40-28-27-44 10-12 30-5 50 4 19 8 73 14 101 14s82-6 101-15c20-8 40-15 50-3 13 16 11 29-27 44C92 58 44 65 0 65Z"
      }, null)])])]), _createVNode("path", {
        "id": "path219",
        "fill": "#012169",
        "d": "M0 0h320v240H0Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path221",
        "fill": "#fff",
        "d": "m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path223",
        "fill": "#c8102e",
        "d": "M212 140.5 320 220v20l-135.5-99.5Zm-92 10 3 17.5-96 72H0ZM320 0v1.5l-124.5 94 1-22L295 0ZM0 0l119.5 88h-30L0 21Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path225",
        "fill": "#fff",
        "d": "M120.5 0v240h80V0ZM0 80v80h320V80Z",
        "style": "stroke-width:.5"
      }, null), _createVNode("path", {
        "id": "path227",
        "fill": "#c8102e",
        "d": "M0 96.5v48h320v-48zM136.5 0v240h48V0Z",
        "style": "stroke-width:.5"
      }, null)]);
    };
  }
};