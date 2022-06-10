import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toRefs, computed, reactive } from 'vue';
export default {
  name: 'AiIcon',
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
        "id": "flag-icons-ai",
        "viewBox": "0 0 640 480"
      }, attrs), [_createVNode("defs", {
        "id": "defs1837"
      }, [_createVNode("clipPath", {
        "id": "ai-a"
      }, [_createVNode("path", {
        "id": "path1834",
        "fill-opacity": ".7",
        "d": "M0 0h640v480H0z"
      }, null)])]), _createVNode("path", {
        "id": "rect4120",
        "fill": "#012169",
        "fill-opacity": "1",
        "stroke-width": "4.4",
        "d": "M0 0h640v480H0z"
      }, null), _createVNode("path", {
        "id": "path1855",
        "fill": "#49497d",
        "d": "m484.3 180.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path1857",
        "fill": "#0e0e6e",
        "d": "m486.3 180.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path1859",
        "fill": "#262678",
        "d": "m480.2 182.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path1861",
        "fill": "#808067",
        "d": "m482.3 182.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path1863",
        "fill": "#58587b",
        "d": "m488.3 182.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path1865",
        "fill": "#0e0e6e",
        "d": "m413.2 184.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1867",
        "fill": "#1b1b74",
        "d": "m476.2 184.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1869",
        "fill": "#6e6c70",
        "d": "m478.2 184.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1871",
        "fill": "#cc3",
        "d": "M416.8 188c0 52.6-6 111.7 33 152.8 8 8.4 23.4 27.7 36.5 27 13.7-.8 31.4-21.1 39.2-31 34-44.8 28.7-98.2 29.8-150.2-15.3 6.9-23 9.2-36.4 9-10 1-25.3-5.5-34.5-10-6 4-14.7 8.9-30.4 9.4-18 .8-23.8-2.3-37.2-7z"
      }, null), _createVNode("path", {
        "id": "path1873",
        "fill": "#99994e",
        "d": "m490.4 184.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1875",
        "fill": "#49497d",
        "d": "m492.4 184.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1877",
        "fill": "#0e0e6e",
        "d": "m555.3 184.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1879",
        "fill": "#a4a43d",
        "d": "m415.3 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1881",
        "fill": "#6e6c70",
        "d": "m417.3 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1883",
        "fill": "#3a3a7c",
        "d": "m419.3 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1885",
        "fill": "#1b1b74",
        "d": "m472 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1887",
        "fill": "#6e6c70",
        "d": "m474 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1889",
        "fill": "#a4a43d",
        "d": "m476.2 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1891",
        "fill": "#d0d045",
        "d": "m484.3 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1893",
        "fill": "#a4a43d",
        "d": "m492.4 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1895",
        "fill": "#8d8d5b",
        "d": "m494.4 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1897",
        "fill": "#3a3a7c",
        "d": "m496.5 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1899",
        "fill": "#262678",
        "d": "m549.2 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1901",
        "fill": "#53527c",
        "d": "m551.3 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1903",
        "fill": "#8d8d5b",
        "d": "m553.3 186.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path1905",
        "fill": "#737370",
        "d": "m423.4 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1907",
        "fill": "#53527c",
        "d": "m425.4 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1909",
        "fill": "#1b1b74",
        "d": "m427.4 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1911",
        "fill": "#262678",
        "d": "m468 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1913",
        "fill": "#6e6c70",
        "d": "m470 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1915",
        "fill": "#a4a43d",
        "d": "m472 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1917",
        "fill": "#e5e59d",
        "d": "m482.3 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1919",
        "fill": "#fff",
        "d": "M420.9 193.8c-1 27.6-.2 58.6 4 88 4.9 15.5 4.2 24 11.3 33.2l99-.8c6-9.7 10.5-24.4 11-30.3 5.6-29.7 5.7-62.6 5.9-92a62 62 0 0 1-35.7 7.4 69 69 0 0 1-30.5-9.2c-9.5 5.6-12.8 8.2-28.4 8.9-12.2.6-22 1.6-36.6-5.2z"
      }, null), _createVNode("path", {
        "id": "path1921",
        "fill": "#f2f1d7",
        "d": "m486.3 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1923",
        "fill": "#d9d868",
        "d": "m488.3 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1925",
        "fill": "#a4a43d",
        "d": "m496.5 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1927",
        "fill": "#99994e",
        "d": "m498.5 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1929",
        "fill": "#49497d",
        "d": "m500.5 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1931",
        "fill": "#0e0e6e",
        "d": "m502.5 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1933",
        "fill": "#3a3a7c",
        "d": "m543.2 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1935",
        "fill": "#667",
        "d": "m545.2 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1937",
        "fill": "#99994e",
        "d": "m547.2 188.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1939",
        "fill": "#a4a43d",
        "d": "m549.2 188.6 2 2-2-2m-121.8 2 2 2z"
      }, null), _createVNode("path", {
        "id": "path1941",
        "fill": "#99994e",
        "d": "m429.5 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1943",
        "fill": "#6e6c70",
        "d": "m431.5 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1945",
        "fill": "#49497d",
        "d": "m433.5 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1947",
        "fill": "#1b1b74",
        "d": "m435.5 190.6 2 2-2-2m26.4 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path1949",
        "fill": "#53527c",
        "d": "m463.9 190.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path1951",
        "fill": "#8d8d5b",
        "d": "m466 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1953",
        "fill": "#a4a43d",
        "d": "m468 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1955",
        "fill": "#e5e59d",
        "d": "m478.2 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1957",
        "fill": "#fbfaf2",
        "d": "m480.2 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1959",
        "fill": "#f2f1d2",
        "d": "m490.4 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1961",
        "fill": "#d9d868",
        "d": "m492.4 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1963",
        "fill": "#a4a43d",
        "d": "m502.5 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1965",
        "fill": "#6e6c70",
        "d": "m504.6 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1967",
        "fill": "#3a3a7c",
        "d": "m506.6 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1969",
        "fill": "#0e0e6e",
        "d": "m533 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1971",
        "fill": "#32327b",
        "d": "m535 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1973",
        "fill": "#58587b",
        "d": "m537 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1975",
        "fill": "#808067",
        "d": "m539 190.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1977",
        "fill": "#a4a43d",
        "d": "m542.5 191.2 1.3.7z"
      }, null), _createVNode("path", {
        "id": "path1979",
        "fill": "#dddc7a",
        "d": "m419.3 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1981",
        "fill": "#d0d045",
        "d": "m421.3 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1983",
        "fill": "#a4a43d",
        "d": "m436.9 193.2 1.4.7z"
      }, null), _createVNode("path", {
        "id": "path1985",
        "fill": "#808067",
        "d": "m439.6 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1987",
        "fill": "#667",
        "d": "m441.6 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1989",
        "fill": "#58587b",
        "d": "m443.7 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1991",
        "fill": "#49497d",
        "d": "m445.7 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1993",
        "fill": "#737370",
        "d": "m457.9 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1995",
        "fill": "#99994e",
        "d": "m459.9 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1997",
        "fill": "#a4a43d",
        "d": "m461.9 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path1999",
        "fill": "#e5e59d",
        "d": "m474 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2001",
        "fill": "#fbfaf2",
        "d": "m476.2 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2003",
        "fill": "#f2f1d2",
        "d": "m494.4 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2005",
        "fill": "#d9d868",
        "d": "m496.5 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2007",
        "fill": "#a4a43d",
        "d": "m507.9 193.2 1.4.7-1.3-.7z"
      }, null), _createVNode("path", {
        "id": "path2009",
        "fill": "#808067",
        "d": "m510.7 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2011",
        "fill": "#667",
        "d": "m512.7 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2013",
        "fill": "#58587b",
        "d": "m514.7 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2015",
        "fill": "#3a3a7c",
        "d": "m516.8 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2017",
        "fill": "#58587b",
        "d": "m526.2 193.2 1.4.7z"
      }, null), _createVNode("path", {
        "id": "path2019",
        "fill": "#737370",
        "d": "m528.9 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2021",
        "fill": "#99994e",
        "d": "m530.9 192.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2023",
        "fill": "#a4a43d",
        "d": "m533 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2025",
        "fill": "#dddc7a",
        "d": "m549.2 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2027",
        "fill": "#d0d045",
        "d": "m551.3 192.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2029",
        "fill": "#f2f1d7",
        "d": "m423.4 194.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2031",
        "fill": "#e0dea1",
        "d": "m425.4 194.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2033",
        "fill": "#dddc7a",
        "d": "m427.4 194.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2035",
        "fill": "#d9d868",
        "d": "m468 194.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2037",
        "fill": "#e5e3af",
        "d": "m470 194.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2039",
        "fill": "#f6f6e4",
        "d": "m498.5 194.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2041",
        "fill": "#e1e18c",
        "d": "m500.5 194.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2043",
        "fill": "#d4d456",
        "d": "m541 194.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2045",
        "fill": "#e1e18c",
        "d": "m543.2 194.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2047",
        "fill": "#eeedc1",
        "d": "m545.2 194.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2049",
        "fill": "#f2f1d2",
        "d": "m431.5 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2051",
        "fill": "#e0dea1",
        "d": "m433.5 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2053",
        "fill": "#dddc7a",
        "d": "m435.5 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2055",
        "fill": "#d0d045",
        "d": "m437.6 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2057",
        "fill": "#dddc7a",
        "d": "m461.9 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2059",
        "fill": "#e5e3af",
        "d": "m463.9 196.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2061",
        "fill": "#f6f6e4",
        "d": "m466 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2063",
        "fill": "#eeedc1",
        "d": "m504.6 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2065",
        "fill": "#e1e18c",
        "d": "m506.6 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2067",
        "fill": "#d4d456",
        "d": "m508.6 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2069",
        "fill": "#d9d868",
        "d": "m533 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2071",
        "fill": "#e1e18c",
        "d": "m535 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2073",
        "fill": "#eeedc1",
        "d": "m537 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2075",
        "fill": "#f6f6e4",
        "d": "m539 196.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2077",
        "fill": "#f2f1d7",
        "d": "m441.6 198.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2079",
        "fill": "#f2f1d2",
        "d": "m443.7 198.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2081",
        "fill": "#eeedc1",
        "d": "m445.7 198.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2083",
        "fill": "#f2f1d2",
        "d": "m455.2 199.3 1.3.7z"
      }, null), _createVNode("path", {
        "id": "path2085",
        "fill": "#fbfaf2",
        "d": "m457.9 198.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2087",
        "fill": "#fef8f1",
        "d": "m468 198.6 4 4v-4h-4z"
      }, null), _createVNode("path", {
        "id": "path2089",
        "fill": "#f2f1d7",
        "d": "m512.7 198.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2091",
        "fill": "#f2f1d2",
        "d": "m514.7 198.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2093",
        "fill": "#e5e3af",
        "d": "m516.8 198.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2095",
        "fill": "#e5e59d",
        "d": "m520.2 199.3 1.3.7-1.4-.7z"
      }, null), _createVNode("path", {
        "id": "path2097",
        "fill": "#e0dea1",
        "d": "m522.9 198.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2099",
        "fill": "#f2f1d2",
        "d": "m526.2 199.3 1.4.7z"
      }, null), _createVNode("path", {
        "id": "path2101",
        "fill": "#fbfaf2",
        "d": "m528.9 198.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2103",
        "fill": "#fef8f1",
        "d": "m463.9 200.7 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2105",
        "fill": "#fbbe66",
        "d": "m466 200.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2107",
        "fill": "#fbc477",
        "d": "m463.9 202.7 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2109",
        "fill": "#fcb144",
        "d": "m468 202.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2111",
        "fill": "#fe9f11",
        "d": "m463.9 204.8 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2113",
        "fill": "#fea522",
        "d": "m468 204.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2115",
        "fill": "#fae3c9",
        "d": "m461.9 206.8 2 2-2-2m8.2 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2117",
        "fill": "#fbead6",
        "d": "m480.2 206.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2119",
        "fill": "#f9d6aa",
        "d": "m482.3 206.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2121",
        "fill": "#fae3c9",
        "d": "m490.4 206.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2123",
        "fill": "#fef8f1",
        "d": "m492.4 206.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2125",
        "fill": "#f9d099",
        "d": "m461.9 208.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2127",
        "fill": "#fdab33",
        "d": "m470 208.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2129",
        "fill": "#fcf1e4",
        "d": "m474 208.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2131",
        "fill": "#fbc477",
        "d": "m476.2 208.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2133",
        "fill": "#fea522",
        "d": "m478.2 208.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2135",
        "fill": "#fcb755",
        "d": "m494.4 208.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2137",
        "fill": "#f9d6aa",
        "d": "m496.5 208.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2139",
        "fill": "#faca88",
        "d": "m461.9 210.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2141",
        "fill": "#fea522",
        "d": "m472 210.9 2 2-2-2m26.5 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2143",
        "fill": "#f8dcbb",
        "d": "m500.5 210.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2145",
        "fill": "#f6f6e4",
        "d": "m419.3 212.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2147",
        "fill": "#fbc477",
        "d": "m461.9 212.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2149",
        "fill": "#fbbe66",
        "d": "m502.5 212.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2151",
        "fill": "#f8dcbb",
        "d": "m504.6 212.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2153",
        "fill": "#faca88",
        "d": "m461.9 214.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2155",
        "fill": "#fcb755",
        "d": "m508.6 214.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2157",
        "fill": "#f8dcbb",
        "d": "m510.7 214.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2159",
        "fill": "#fef8f1",
        "d": "m459.9 217 2 2z"
      }, null), _createVNode("path", {
        "id": "path2161",
        "fill": "#fe9f11",
        "d": "m461.9 217 2 2z"
      }, null), _createVNode("path", {
        "id": "path2163",
        "fill": "#fdab33",
        "d": "m518.8 217 2 2z"
      }, null), _createVNode("path", {
        "id": "path2165",
        "fill": "#fcb144",
        "d": "m520.9 217 2 2z"
      }, null), _createVNode("path", {
        "id": "path2167",
        "fill": "#fbc477",
        "d": "m522.9 217 2 2z"
      }, null), _createVNode("path", {
        "id": "path2169",
        "fill": "#f9d6aa",
        "d": "m524.9 217 4 4z"
      }, null), _createVNode("path", {
        "id": "path2171",
        "fill": "#fef8f1",
        "d": "m526.9 217 2 2z"
      }, null), _createVNode("path", {
        "id": "path2173",
        "fill": "#fcb144",
        "d": "m459.9 219 2 2z"
      }, null), _createVNode("path", {
        "id": "path2175",
        "fill": "#fdab33",
        "d": "m488.3 219 2 2z"
      }, null), _createVNode("path", {
        "id": "path2177",
        "fill": "#fbc477",
        "d": "m490.4 219 2 2zm8 0 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2179",
        "fill": "#fea522",
        "d": "m500.5 219 2 2z"
      }, null), _createVNode("path", {
        "id": "path2181",
        "fill": "#fae3c9",
        "d": "m457.9 221 2 2z"
      }, null), _createVNode("path", {
        "id": "path2183",
        "fill": "#fcb144",
        "d": "m484.3 221 2 2z"
      }, null), _createVNode("path", {
        "id": "path2185",
        "fill": "#fae3c9",
        "d": "m486.3 221 2 2z"
      }, null), _createVNode("path", {
        "id": "path2187",
        "fill": "#f8dcbb",
        "d": "m502.5 221 2 2z"
      }, null), _createVNode("path", {
        "id": "path2189",
        "fill": "#fdab33",
        "d": "m504.6 221 2 2z"
      }, null), _createVNode("path", {
        "id": "path2191",
        "fill": "#fe9f11",
        "d": "m516.8 221 2 2z"
      }, null), _createVNode("path", {
        "id": "path2193",
        "fill": "#fcb755",
        "d": "m518.8 221 2 2z"
      }, null), _createVNode("path", {
        "id": "path2195",
        "fill": "#f9d099",
        "d": "m520.9 221 2 2z"
      }, null), _createVNode("path", {
        "id": "path2197",
        "fill": "#fbead6",
        "d": "m522.9 221 2 2z"
      }, null), _createVNode("path", {
        "id": "path2199",
        "fill": "#fcb144",
        "d": "m457.9 223 2 2z"
      }, null), _createVNode("path", {
        "id": "path2201",
        "fill": "#fbbe66",
        "d": "m482.3 223 2 2z"
      }, null), _createVNode("path", {
        "id": "path2203",
        "fill": "#f9d099",
        "d": "m506.6 223 2 2z"
      }, null), _createVNode("path", {
        "id": "path2205",
        "fill": "#fbead6",
        "d": "m514.7 223 2 2z"
      }, null), _createVNode("path", {
        "id": "path2207",
        "fill": "#fcf1e4",
        "d": "m455.9 225 2 2z"
      }, null), _createVNode("path", {
        "id": "path2209",
        "fill": "#fbbe66",
        "d": "m480.2 225 2 2z"
      }, null), _createVNode("path", {
        "id": "path2211",
        "fill": "#f9d099",
        "d": "m508.6 225 2 2z"
      }, null), _createVNode("path", {
        "id": "path2213",
        "fill": "#fae3c9",
        "d": "m514.7 225 2 2z"
      }, null), _createVNode("path", {
        "id": "path2215",
        "fill": "#fbc477",
        "d": "m455.9 227 2 2z"
      }, null), _createVNode("path", {
        "id": "path2217",
        "fill": "#fcb144",
        "d": "m478.2 227 2 2-2-2m32.5 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2219",
        "fill": "#fbbe66",
        "d": "m514.7 227 2 2z"
      }, null), _createVNode("path", {
        "id": "path2221",
        "fill": "#f6f6e4",
        "d": "m419.3 229 2 2z"
      }, null), _createVNode("path", {
        "id": "path2223",
        "fill": "#fea522",
        "d": "m455.9 229 2 2z"
      }, null), _createVNode("path", {
        "id": "path2225",
        "fill": "#fbead6",
        "d": "m478.2 229 2 2z"
      }, null), _createVNode("path", {
        "id": "path2227",
        "fill": "#fcf1e4",
        "d": "m510.7 229 2 2z"
      }, null), _createVNode("path", {
        "id": "path2229",
        "fill": "#fef8f1",
        "d": "m516.8 229 2 2z"
      }, null), _createVNode("path", {
        "id": "path2231",
        "fill": "#fcf1e4",
        "d": "m453.9 231.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2233",
        "fill": "#fbbe66",
        "d": "m476.2 231.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2235",
        "fill": "#faca88",
        "d": "m512.7 231.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2237",
        "fill": "#f9d099",
        "d": "m516.8 231.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2239",
        "fill": "#f9d6aa",
        "d": "m453.9 233.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2241",
        "fill": "#fcf1e4",
        "d": "m476.2 233.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2243",
        "fill": "#fae3c9",
        "d": "m486.3 233.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2245",
        "fill": "#fea522",
        "d": "m488.3 233.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2247",
        "fill": "#fcb144",
        "d": "m490.4 233.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2249",
        "fill": "#f9d6aa",
        "d": "m492.4 233.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2251",
        "fill": "#fef8f1",
        "d": "m512.7 233.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2253",
        "fill": "#fea522",
        "d": "m514.7 233.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2255",
        "fill": "#fdab33",
        "d": "m516.8 233.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2257",
        "fill": "#faca88",
        "d": "m453.9 235.2-2.1 6 2-6z"
      }, null), _createVNode("path", {
        "id": "path2259",
        "fill": "#fea522",
        "d": "m474 235.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2261",
        "fill": "#fef8f1",
        "d": "m476.2 235.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2263",
        "fill": "#f9d099",
        "d": "m486.3 235.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2265",
        "fill": "#fdab33",
        "d": "m494.4 235.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2267",
        "fill": "#fae3c9",
        "d": "m496.5 235.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2269",
        "fill": "#f8dcbb",
        "d": "m514.7 235.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2271",
        "fill": "#f90",
        "d": "m516.8 235.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2273",
        "fill": "#fbead6",
        "d": "m519.5 236.6.6 1.3z"
      }, null), _createVNode("path", {
        "id": "path2275",
        "fill": "#fea522",
        "d": "m478.2 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2277",
        "fill": "#fbbe66",
        "d": "m480.2 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2279",
        "fill": "#faca88",
        "d": "m482.3 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2281",
        "fill": "#fcb144",
        "d": "m484.3 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2283",
        "fill": "#fae3c9",
        "d": "m486.3 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2285",
        "fill": "#fe9f11",
        "d": "m488.3 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2287",
        "fill": "#fdab33",
        "d": "m498.5 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2289",
        "fill": "#fbc477",
        "d": "m500.5 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2291",
        "fill": "#faca88",
        "d": "m502.5 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2293",
        "fill": "#f9d6aa",
        "d": "m504.6 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2295",
        "fill": "#fae3c9",
        "d": "m507.9 237.9 1.4.7-1.3-.7z"
      }, null), _createVNode("path", {
        "id": "path2297",
        "fill": "#fef8f1",
        "d": "m510.7 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2299",
        "fill": "#fbc477",
        "d": "m516.8 237.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2301",
        "fill": "#fef8f1",
        "d": "m429.5 239.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2303",
        "fill": "#fcf1e4",
        "d": "m431.5 239.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2305",
        "fill": "#fcb755",
        "d": "m484.3 239.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2307",
        "fill": "#fbead6",
        "d": "m488.3 239.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2309",
        "fill": "#fea522",
        "d": "m490.4 239.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2311",
        "fill": "#fe9f11",
        "d": "m506.6 239.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2313",
        "fill": "#fcb144",
        "d": "m508.6 239.3-2 4z"
      }, null), _createVNode("path", {
        "id": "path2315",
        "fill": "#fe9f11",
        "d": "m512.7 239.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2317",
        "fill": "#fbbe66",
        "d": "m514.7 239.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2319",
        "fill": "#fcf1e4",
        "d": "m516.8 239.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2321",
        "fill": "#fae3c9",
        "d": "m429.5 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2323",
        "fill": "#fe9f11",
        "d": "m431.5 241.3 4 4z"
      }, null), _createVNode("path", {
        "id": "path2325",
        "fill": "#fbead6",
        "d": "m433.5 241.3 2 2zm18.3 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2327",
        "fill": "#fae3c9",
        "d": "m453.9 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2329",
        "fill": "#fe9f11",
        "d": "m472 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2331",
        "fill": "#fbc477",
        "d": "m474 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2333",
        "fill": "#fea522",
        "d": "m476.2 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2335",
        "fill": "#fbc477",
        "d": "m482.3 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2337",
        "fill": "#fef8f1",
        "d": "m484.3 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2339",
        "fill": "#fbc477",
        "d": "m492.4 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2341",
        "fill": "#fff",
        "d": "m508.6 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2343",
        "fill": "#fdab33",
        "d": "m510.7 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2345",
        "fill": "#fbc477",
        "d": "m518.8 241.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2347",
        "fill": "#fef8f1",
        "d": "m429.5 243.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2349",
        "fill": "#fbead6",
        "d": "m435.5 243.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2351",
        "fill": "#f9d6aa",
        "d": "m445.7 243.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2353",
        "fill": "#fe9f11",
        "d": "m455.9 243.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2355",
        "fill": "#f9d6aa",
        "d": "m459.2 244 1.4.7z"
      }, null), _createVNode("path", {
        "id": "path2357",
        "fill": "#f8dcbb",
        "d": "m472 243.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2359",
        "fill": "#fcf1e4",
        "d": "m478.2 243.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2361",
        "fill": "#f9d6aa",
        "d": "m494.4 243.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2363",
        "fill": "#fdab33",
        "d": "m508.6 243.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2365",
        "fill": "#fcb755",
        "d": "m520.9 243.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2367",
        "fill": "#fef8f1",
        "d": "m522.9 243.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2369",
        "fill": "#53527c",
        "d": "m413.2 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2371",
        "fill": "#fcb755",
        "d": "m431.5 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2373",
        "fill": "#fea522",
        "d": "m435.5 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2375",
        "fill": "#fbead6",
        "d": "m443.7 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2377",
        "fill": "#fe9f11",
        "d": "m447.7 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2379",
        "fill": "#fcf1e4",
        "d": "m449.8 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2381",
        "fill": "#fbbe66",
        "d": "m455.9 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2383",
        "fill": "#fbc477",
        "d": "m457.9 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2385",
        "fill": "#fbbe66",
        "d": "m459.9 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2387",
        "fill": "#fea522",
        "d": "m470 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2389",
        "fill": "#f9d6aa",
        "d": "m496.5 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2391",
        "fill": "#fcb144",
        "d": "m522.9 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2393",
        "fill": "#8d8d5b",
        "d": "m555.3 245.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2395",
        "fill": "#e5e3af",
        "d": "m419.3 247.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2397",
        "fill": "#f8dcbb",
        "d": "m431.5 247.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2399",
        "fill": "#fdab33",
        "d": "m437.6 247.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2401",
        "fill": "#fe9f11",
        "d": "m443.7 247.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2403",
        "fill": "#faca88",
        "d": "m447.7 247.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2405",
        "fill": "#fcf1e4",
        "d": "m455.9 247.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2407",
        "fill": "#f9d099",
        "d": "m470 247.4 2 2-2-2m28.5 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2409",
        "fill": "#fbbe66",
        "d": "m524.9 247.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2411",
        "fill": "#fea522",
        "d": "m433.5 249.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2413",
        "fill": "#fdab33",
        "d": "m439.6 249.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2415",
        "fill": "#fea522",
        "d": "m441.6 249.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2417",
        "fill": "#fe9f11",
        "d": "m445.7 249.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2419",
        "fill": "#fef8f1",
        "d": "m447.7 249.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2421",
        "fill": "#fbbe66",
        "d": "m457.9 249.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2423",
        "fill": "#fef8f1",
        "d": "m470 249.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2425",
        "fill": "#fbbe66",
        "d": "m500.5 249.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2427",
        "fill": "#f9d099",
        "d": "m526.9 249.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path2429",
        "fill": "#f9d6aa",
        "d": "m433.5 251.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path2431",
        "fill": "#f9d099",
        "d": "m445.7 251.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path2433",
        "fill": "#fcf1e4",
        "d": "m457.9 251.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path2435",
        "fill": "#fdab33",
        "d": "m468 251.5 2 2-2-2m34.5 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2437",
        "fill": "#fbead6",
        "d": "m528.9 251.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path2439",
        "fill": "#fea522",
        "d": "m435.5 253.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path2441",
        "fill": "#fe9f11",
        "d": "m443.7 253.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path2443",
        "fill": "#fcb144",
        "d": "m459.9 253.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path2445",
        "fill": "#faca88",
        "d": "m468 253.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path2447",
        "fill": "#f8dcbb",
        "d": "m502.5 253.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path2449",
        "fill": "#fcb144",
        "d": "m528.9 253.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path2451",
        "fill": "#d3d079",
        "d": "m419.3 255.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2453",
        "fill": "#faca88",
        "d": "m435.5 255.6 2 2zm24.4 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2455",
        "fill": "#fae3c9",
        "d": "m468 255.6 2 2-2-2m34.5 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2457",
        "fill": "#f8dcbb",
        "d": "m530.9 255.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2459",
        "fill": "#f2f1d7",
        "d": "m549.2 255.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2461",
        "fill": "#58587b",
        "d": "m556 256.9.7 1.3z"
      }, null), _createVNode("path", {
        "id": "path2463",
        "fill": "#d9d868",
        "d": "m419.9 258.9.8 1.4-.7-1.4z"
      }, null), _createVNode("path", {
        "id": "path2465",
        "fill": "#f8dcbb",
        "d": "m435.5 257.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2467",
        "fill": "#f9d6aa",
        "d": "m500.5 257.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2469",
        "fill": "#fe9f11",
        "d": "m502.5 257.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2471",
        "fill": "#fcb144",
        "d": "m530.9 257.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2473",
        "fill": "#f2f1d2",
        "d": "m549.9 258.9.7 1.4z"
      }, null), _createVNode("path", {
        "id": "path2475",
        "fill": "#fcf1e4",
        "d": "m435.5 259.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2477",
        "fill": "#fef8f1",
        "d": "m498.5 259.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2479",
        "fill": "#fe9f11",
        "d": "m500.5 259.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2481",
        "fill": "#fdab33",
        "d": "m506.6 259.6-2 4z"
      }, null), _createVNode("path", {
        "id": "path2483",
        "fill": "#fcb755",
        "d": "m508.6 259.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2485",
        "fill": "#fea522",
        "d": "m533 259.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2487",
        "fill": "#f9d099",
        "d": "m535 259.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2489",
        "fill": "#53527c",
        "d": "m555.3 259.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2491",
        "fill": "#808067",
        "d": "m415.9 263 .7 1.3z"
      }, null), _createVNode("path", {
        "id": "path2493",
        "fill": "#fea522",
        "d": "m437.6 261.6 2 2-2-2m6 0 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2495",
        "fill": "#fe9f11",
        "d": "m466 261.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2497",
        "fill": "#fae3c9",
        "d": "m498.5 261.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2499",
        "fill": "#fef8f1",
        "d": "m506.6 261.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2501",
        "fill": "#fcb144",
        "d": "m510.7 261.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2503",
        "fill": "#fcb755",
        "d": "m537 261.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2505",
        "fill": "#fef8f1",
        "d": "m539 261.6 4 4z"
      }, null), _createVNode("path", {
        "id": "path2507",
        "fill": "#e5e59d",
        "d": "m549.9 263 .7 1.3z"
      }, null), _createVNode("path", {
        "id": "path2509",
        "fill": "#32327b",
        "d": "m556 263 .7 1.3z"
      }, null), _createVNode("path", {
        "id": "path2511",
        "fill": "#fcb755",
        "d": "m438.3 265 .6 1.4z"
      }, null), _createVNode("path", {
        "id": "path2513",
        "fill": "#fef8f1",
        "d": "m445.7 263.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2515",
        "fill": "#fbbe66",
        "d": "m466 263.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2517",
        "fill": "#fbead6",
        "d": "m498.5 263.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2519",
        "fill": "#fe9f11",
        "d": "m502.5 263.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2521",
        "fill": "#fcf1e4",
        "d": "m504.6 263.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2523",
        "fill": "#fbead6",
        "d": "m510.7 263.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2525",
        "fill": "#fdab33",
        "d": "m539 263.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path2527",
        "fill": "#667",
        "d": "m415.3 265.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2529",
        "fill": "#f6f6e4",
        "d": "m421.3 265.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2531",
        "fill": "#f9d6aa",
        "d": "m445.7 265.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2533",
        "fill": "#fdab33",
        "d": "m461.9 265.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2535",
        "fill": "#fe9f11",
        "d": "m463.9 265.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2537",
        "fill": "#fcf1e4",
        "d": "m466 265.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2539",
        "fill": "#fea522",
        "d": "m500.5 265.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2541",
        "fill": "#faca88",
        "d": "m502.5 265.6 2 2-2-2m10.2 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2543",
        "fill": "#fcb144",
        "d": "m541 265.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2545",
        "fill": "#dddc7a",
        "d": "m549.2 265.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2547",
        "fill": "#58587b",
        "d": "m415.3 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2549",
        "fill": "#f2f1d2",
        "d": "m421.3 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2551",
        "fill": "#fcb144",
        "d": "m438.3 269 .6 1.4z"
      }, null), _createVNode("path", {
        "id": "path2553",
        "fill": "#fea522",
        "d": "m445.7 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2555",
        "fill": "#fef8f1",
        "d": "m466 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2557",
        "fill": "#fea522",
        "d": "m468 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2559",
        "fill": "#fcb144",
        "d": "m472 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2561",
        "fill": "#fbead6",
        "d": "m474 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2563",
        "fill": "#f8dcbb",
        "d": "m500.5 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2565",
        "fill": "#fcf1e4",
        "d": "m502.5 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2567",
        "fill": "#fef8f1",
        "d": "m512.7 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2569",
        "fill": "#fe9f11",
        "d": "m514.7 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2571",
        "fill": "#fbead6",
        "d": "m543.2 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2573",
        "fill": "#d9d868",
        "d": "m549.2 267.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2575",
        "fill": "#3a3a7c",
        "d": "m415.3 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2577",
        "fill": "#e5e3af",
        "d": "m421.3 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2579",
        "fill": "#faca88",
        "d": "m447.7 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2581",
        "fill": "#fbead6",
        "d": "m468 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2583",
        "fill": "#fe9f11",
        "d": "m474 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2585",
        "fill": "#fcf1e4",
        "d": "m476.2 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2587",
        "fill": "#fbead6",
        "d": "m498.5 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2589",
        "fill": "#fae3c9",
        "d": "m500.5 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2591",
        "fill": "#fbead6",
        "d": "m502.5 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2593",
        "fill": "#fbbe66",
        "d": "m514.7 269.7 2 2-2-2m16.3 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2595",
        "fill": "#fcf1e4",
        "d": "m533 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2597",
        "fill": "#fef8f1",
        "d": "m535 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2599",
        "fill": "#f8dcbb",
        "d": "m537 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2601",
        "fill": "#fcb755",
        "d": "m539 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2603",
        "fill": "#fae3c9",
        "d": "m543.2 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2605",
        "fill": "#808067",
        "d": "m553.3 269.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path2607",
        "fill": "#32327b",
        "d": "m415.3 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2609",
        "fill": "#a4a43d",
        "d": "m417.9 273 .7 1.5-.6-1.4z"
      }, null), _createVNode("path", {
        "id": "path2611",
        "fill": "#e5e59d",
        "d": "m421.3 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2613",
        "fill": "#fbc477",
        "d": "m437.6 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2615",
        "fill": "#f9d6aa",
        "d": "m449.8 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2617",
        "fill": "#fbbe66",
        "d": "m470 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2619",
        "fill": "#f9d099",
        "d": "m476.2 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2621",
        "fill": "#fae3c9",
        "d": "m494.4 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2623",
        "fill": "#fcb144",
        "d": "m496.5 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2625",
        "fill": "#fae3c9",
        "d": "m504.6 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2627",
        "fill": "#f8dcbb",
        "d": "m514.7 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2629",
        "fill": "#f9d099",
        "d": "m530.9 271.8 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2631",
        "fill": "#fbc477",
        "d": "m541 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2633",
        "fill": "#fbead6",
        "d": "m543.2 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2635",
        "fill": "#737370",
        "d": "m553.3 271.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2637",
        "fill": "#d9d868",
        "d": "m421.3 273.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2639",
        "fill": "#f9d099",
        "d": "m437.6 273.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2641",
        "fill": "#f9d6aa",
        "d": "m451.8 273.8 2 2-2-2m18.3 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2643",
        "fill": "#fbc477",
        "d": "m476.2 273.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2645",
        "fill": "#fef8f1",
        "d": "m486.3 273.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2647",
        "fill": "#f8dcbb",
        "d": "m488.3 273.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2649",
        "fill": "#fbc477",
        "d": "m490.4 273.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2651",
        "fill": "#fea522",
        "d": "m492.4 273.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2653",
        "fill": "#fbead6",
        "d": "m504.6 273.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2655",
        "fill": "#f2f1d2",
        "d": "m547.2 273.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2657",
        "fill": "#58587b",
        "d": "m553.3 273.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2659",
        "fill": "#99994e",
        "d": "m417.3 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2661",
        "fill": "#d0d045",
        "d": "m421.3 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2663",
        "fill": "#fcb144",
        "d": "m453.9 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2665",
        "fill": "#fae3c9",
        "d": "m455.9 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2667",
        "fill": "#fef8f1",
        "d": "m470 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2669",
        "fill": "#fcb755",
        "d": "m478.2 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2671",
        "fill": "#fbc477",
        "d": "m480.2 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2673",
        "fill": "#fcb144",
        "d": "m482.3 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2675",
        "fill": "#fea522",
        "d": "m484.3 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2677",
        "fill": "#fe9f11",
        "d": "m500.5 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2679",
        "fill": "#f9d6aa",
        "d": "m502.5 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2681",
        "fill": "#fef8f1",
        "d": "m530.9 275.8 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2683",
        "fill": "#e0dea1",
        "d": "m547.2 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2685",
        "fill": "#3a3a7c",
        "d": "m553.3 275.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path2687",
        "fill": "#737370",
        "d": "m417.3 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2689",
        "fill": "#fbfaf2",
        "d": "m423.4 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2691",
        "fill": "#fea522",
        "d": "m439.6 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2693",
        "fill": "#fe9f11",
        "d": "m457.9 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2695",
        "fill": "#fcb144",
        "d": "m459.9 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2697",
        "fill": "#fbc477",
        "d": "m461.9 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2699",
        "fill": "#faca88",
        "d": "m463.9 277.9 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path2701",
        "fill": "#fbc477",
        "d": "m466 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2703",
        "fill": "#fcb144",
        "d": "m468 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2705",
        "fill": "#fdab33",
        "d": "m470 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2707",
        "fill": "#fbc477",
        "d": "m498.5 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2709",
        "fill": "#fef8f1",
        "d": "m500.5 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2711",
        "fill": "#fdab33",
        "d": "m528.9 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2713",
        "fill": "#e1e18c",
        "d": "m547.2 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2715",
        "fill": "#a4a43d",
        "d": "m551.9 279.2.7 1.4z"
      }, null), _createVNode("path", {
        "id": "path2717",
        "fill": "#262678",
        "d": "m553.3 277.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2719",
        "fill": "#58587b",
        "d": "m417.3 279.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2721",
        "fill": "#f2f1d2",
        "d": "m423.4 279.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2723",
        "fill": "#faca88",
        "d": "m439.6 279.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2725",
        "fill": "#fe9f11",
        "d": "m494.4 279.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2727",
        "fill": "#fbead6",
        "d": "m496.5 279.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2729",
        "fill": "#fbc477",
        "d": "m514.7 279.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2731",
        "fill": "#faca88",
        "d": "m528.9 279.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2733",
        "fill": "#d4d456",
        "d": "m547.2 279.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2735",
        "fill": "#32327b",
        "d": "m417.3 281.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2737",
        "fill": "#e5e59d",
        "d": "m423.4 281.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2739",
        "fill": "#fef8f1",
        "d": "m439.6 281.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2741",
        "fill": "#fe9f11",
        "d": "m441.6 281.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2743",
        "fill": "#fbead6",
        "d": "m494.4 281.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2745",
        "fill": "#fea522",
        "d": "m514.7 281.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2747",
        "fill": "#fcf1e4",
        "d": "m528.9 281.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2749",
        "fill": "#808067",
        "d": "m551.3 281.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2751",
        "fill": "#0e0e6e",
        "d": "m417.3 283.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2753",
        "fill": "#a4a43d",
        "d": "m419.3 283.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2755",
        "fill": "#d9d868",
        "d": "m423.4 283.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2757",
        "fill": "#f8dcbb",
        "d": "m441.6 283.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2759",
        "fill": "#f9d6aa",
        "d": "m512.7 283.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2761",
        "fill": "#faca88",
        "d": "m526.9 283.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2763",
        "fill": "#f2f1d2",
        "d": "m545.2 283.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2765",
        "fill": "#58587b",
        "d": "m551.3 283.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path2767",
        "fill": "#8d8d5b",
        "d": "m419.3 286 2 2z"
      }, null), _createVNode("path", {
        "id": "path2769",
        "fill": "#f9d6aa",
        "d": "m443.7 286 2 2z"
      }, null), _createVNode("path", {
        "id": "path2771",
        "fill": "#fdab33",
        "d": "m484.3 286 2 2z"
      }, null), _createVNode("path", {
        "id": "path2773",
        "fill": "#fff",
        "d": "m486.3 286 2 2z"
      }, null), _createVNode("path", {
        "id": "path2775",
        "fill": "#fcb144",
        "d": "m489.7 286.6 1.4.7z"
      }, null), _createVNode("path", {
        "id": "path2777",
        "fill": "#fef8f1",
        "d": "m510.7 286-2 4z"
      }, null), _createVNode("path", {
        "id": "path2779",
        "fill": "#fe9f11",
        "d": "m512.7 286 2 2z"
      }, null), _createVNode("path", {
        "id": "path2781",
        "fill": "#fdab33",
        "d": "m524.9 286-2 4z"
      }, null), _createVNode("path", {
        "id": "path2783",
        "fill": "#e5e59d",
        "d": "m545.2 286 2 2z"
      }, null), _createVNode("path", {
        "id": "path2785",
        "fill": "#3a3a7c",
        "d": "m551.3 286 2 2z"
      }, null), _createVNode("path", {
        "id": "path2787",
        "fill": "#667",
        "d": "m419.3 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2789",
        "fill": "#f2f1d2",
        "d": "m425.4 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2791",
        "fill": "#f9d6aa",
        "d": "m445.7 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2793",
        "fill": "#fe9f11",
        "d": "m484.3 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2795",
        "fill": "#faca88",
        "d": "m486.3 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2797",
        "fill": "#fea522",
        "d": "m488.3 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2799",
        "fill": "#fcf1e4",
        "d": "m490.4 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2801",
        "fill": "#fdab33",
        "d": "m510.7 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2803",
        "fill": "#fef8f1",
        "d": "m524.9 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2805",
        "fill": "#d9d868",
        "d": "m545.2 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2807",
        "fill": "#a4a43d",
        "d": "m549.2 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2809",
        "fill": "#0e0e6e",
        "d": "m551.3 288 2 2z"
      }, null), _createVNode("path", {
        "id": "path2811",
        "fill": "#3a3a7c",
        "d": "m419.3 290 2 2z"
      }, null), _createVNode("path", {
        "id": "path2813",
        "fill": "#e5e59d",
        "d": "m425.4 290 2 2z"
      }, null), _createVNode("path", {
        "id": "path2815",
        "fill": "#fae3c9",
        "d": "m447.7 290 4 4z"
      }, null), _createVNode("path", {
        "id": "path2817",
        "fill": "#fe9f11",
        "d": "m449.8 290 2 2z"
      }, null), _createVNode("path", {
        "id": "path2819",
        "fill": "#f8dcbb",
        "d": "m488.3 290 2 2z"
      }, null), _createVNode("path", {
        "id": "path2821",
        "fill": "#fcf1e4",
        "d": "m506.6 290 2 2z"
      }, null), _createVNode("path", {
        "id": "path2823",
        "fill": "#fdab33",
        "d": "m508.6 290 2 2z"
      }, null), _createVNode("path", {
        "id": "path2825",
        "fill": "#fcb144",
        "d": "m520.9 290 2 2z"
      }, null), _createVNode("path", {
        "id": "path2827",
        "fill": "#fef8f1",
        "d": "m522.9 290 2 2z"
      }, null), _createVNode("path", {
        "id": "path2829",
        "fill": "#fbfaf2",
        "d": "m543.2 290 2 2z"
      }, null), _createVNode("path", {
        "id": "path2831",
        "fill": "#8d8d5b",
        "d": "m549.2 290 2 2z"
      }, null), _createVNode("path", {
        "id": "path2833",
        "fill": "#0e0e6e",
        "d": "m419.3 292 2 2z"
      }, null), _createVNode("path", {
        "id": "path2835",
        "fill": "#a4a43d",
        "d": "m421.3 292 2 2z"
      }, null), _createVNode("path", {
        "id": "path2837",
        "fill": "#d4d456",
        "d": "m425.4 292 2 2z"
      }, null), _createVNode("path", {
        "id": "path2839",
        "fill": "#f9d6aa",
        "d": "m486.3 292 2 2z"
      }, null), _createVNode("path", {
        "id": "path2841",
        "fill": "#f9d099",
        "d": "m504.6 292 2 2z"
      }, null), _createVNode("path", {
        "id": "path2843",
        "fill": "#fe9f11",
        "d": "m506.6 292 2 2z"
      }, null), _createVNode("path", {
        "id": "path2845",
        "fill": "#faca88",
        "d": "m518.8 292 2 2z"
      }, null), _createVNode("path", {
        "id": "path2847",
        "fill": "#eeedc1",
        "d": "m543.2 292 2 2z"
      }, null), _createVNode("path", {
        "id": "path2849",
        "fill": "#58587b",
        "d": "m549.2 292 2 2z"
      }, null), _createVNode("path", {
        "id": "path2851",
        "fill": "#737370",
        "d": "m421.3 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2853",
        "fill": "#f6f6e4",
        "d": "m427.4 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2855",
        "fill": "#fbbe66",
        "d": "m449.8 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2857",
        "fill": "#fcb144",
        "d": "m482.3 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2859",
        "fill": "#f8dcbb",
        "d": "m484.9 295.5.7 1.3z"
      }, null), _createVNode("path", {
        "id": "path2861",
        "fill": "#fbbe66",
        "d": "m500.5 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2863",
        "fill": "#fe9f11",
        "d": "m502.5 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2865",
        "fill": "#fbc477",
        "d": "m514.7 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2867",
        "fill": "#fcf1e4",
        "d": "m516.8 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2869",
        "fill": "#d3d079",
        "d": "m543.2 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2871",
        "fill": "#a4a43d",
        "d": "m547.2 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2873",
        "fill": "#262678",
        "d": "m549.2 294 2 2z"
      }, null), _createVNode("path", {
        "id": "path2875",
        "fill": "#49497d",
        "d": "m421.3 296 2 2z"
      }, null), _createVNode("path", {
        "id": "path2877",
        "fill": "#e0dea1",
        "d": "m427.4 296 2 2z"
      }, null), _createVNode("path", {
        "id": "path2879",
        "fill": "#fae3c9",
        "d": "m447.7 296 2 2z"
      }, null), _createVNode("path", {
        "id": "path2881",
        "fill": "#fdab33",
        "d": "m476.2 296 2 2z"
      }, null), _createVNode("path", {
        "id": "path2883",
        "fill": "#fbc477",
        "d": "m478.2 296 2 2z"
      }, null), _createVNode("path", {
        "id": "path2885",
        "fill": "#fbead6",
        "d": "m480.2 296 2 2z"
      }, null), _createVNode("path", {
        "id": "path2887",
        "fill": "#fcb144",
        "d": "m486.3 296 2 2z"
      }, null), _createVNode("path", {
        "id": "path2889",
        "fill": "#f9d6aa",
        "d": "m512.7 296 2 2z"
      }, null), _createVNode("path", {
        "id": "path2891",
        "fill": "#99994e",
        "d": "m547.2 296 2 2z"
      }, null), _createVNode("path", {
        "id": "path2893",
        "fill": "#0e0e6e",
        "d": "m421.3 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2895",
        "fill": "#a4a43d",
        "d": "m423.4 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2897",
        "fill": "#d4d456",
        "d": "m427.4 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2899",
        "fill": "#f9d099",
        "d": "m445.7 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2901",
        "fill": "#fe9f11",
        "d": "m447.7 298.2 2 2-2-2m10.2 0 2 2z"
      }, null), _createVNode("path", {
        "id": "path2903",
        "fill": "#f9d6aa",
        "d": "m459.9 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2905",
        "fill": "#f9d099",
        "d": "m461.9 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2907",
        "fill": "#f9d6aa",
        "d": "m470 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2909",
        "fill": "#fae3c9",
        "d": "m472 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2911",
        "fill": "#fef8f1",
        "d": "m474 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2913",
        "fill": "#fbead6",
        "d": "m490.4 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2915",
        "fill": "#fae3c9",
        "d": "m492.4 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2917",
        "fill": "#faca88",
        "d": "m494.4 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2919",
        "fill": "#fbc477",
        "d": "m496.5 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2921",
        "fill": "#fdab33",
        "d": "m498.5 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2923",
        "fill": "#fe9f11",
        "d": "m508.6 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2925",
        "fill": "#f9d6aa",
        "d": "m510.7 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2927",
        "fill": "#e5e3af",
        "d": "m541 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2929",
        "fill": "#667",
        "d": "m547.2 298.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2931",
        "fill": "#737370",
        "d": "m423.4 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2933",
        "fill": "#f2f1d7",
        "d": "m429.5 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2935",
        "fill": "#fea522",
        "d": "m443.7 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2937",
        "fill": "#fe9f11",
        "d": "m453.9 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2939",
        "fill": "#fbbe66",
        "d": "m455.9 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2941",
        "fill": "#fcf1e4",
        "d": "m457.9 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2943",
        "fill": "#fea522",
        "d": "m506.6 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2945",
        "fill": "#fbead6",
        "d": "m508.6 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2947",
        "fill": "#dddc7a",
        "d": "m541 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2949",
        "fill": "#a4a43d",
        "d": "m545.2 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2951",
        "fill": "#262678",
        "d": "m547.2 300.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2953",
        "fill": "#49497d",
        "d": "m423.4 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2955",
        "fill": "#a4a43d",
        "d": "m426 303.6.8 1.3z"
      }, null), _createVNode("path", {
        "id": "path2957",
        "fill": "#d3d079",
        "d": "m429.5 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2959",
        "fill": "#f9d099",
        "d": "m445.7 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2961",
        "fill": "#fcb144",
        "d": "m447.7 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2963",
        "fill": "#faca88",
        "d": "m449.8 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2965",
        "fill": "#f8dcbb",
        "d": "m451.8 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2967",
        "fill": "#fef8f1",
        "d": "m453.9 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2969",
        "fill": "#f8dcbb",
        "d": "m498.5 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2971",
        "fill": "#fcf1e4",
        "d": "m506.6 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2973",
        "fill": "#f6f6e4",
        "d": "m539 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2975",
        "fill": "#8d8d5b",
        "d": "m545.2 302.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2977",
        "fill": "#fbfaf2",
        "d": "m431.5 304.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2979",
        "fill": "#fbbe66",
        "d": "m498.5 304.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2981",
        "fill": "#faca88",
        "d": "m504.6 304.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2983",
        "fill": "#e1e18c",
        "d": "m539 304.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2985",
        "fill": "#49497d",
        "d": "m545.2 304.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path2987",
        "fill": "#58587b",
        "d": "m425.4 306.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2989",
        "fill": "#e5e59d",
        "d": "m431.5 306.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2991",
        "fill": "#fe9f11",
        "d": "m498.5 306.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2993",
        "fill": "#fdab33",
        "d": "m502.5 306.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2995",
        "fill": "#fbfaf2",
        "d": "m537 306.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2997",
        "fill": "#a4a43d",
        "d": "m543.2 306.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path2999",
        "fill": "#0e0e6e",
        "d": "m545.2 306.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3001",
        "fill": "#1b1b74",
        "d": "m425.4 308.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3003",
        "fill": "#a4a43d",
        "d": "m427.4 308.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3005",
        "fill": "#d0d045",
        "d": "m431.5 308.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3007",
        "fill": "#fbead6",
        "d": "m496.5 308.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3009",
        "fill": "#fe9f11",
        "d": "m500.5 308.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3011",
        "fill": "#fbead6",
        "d": "m502.5 308.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3013",
        "fill": "#e5e59d",
        "d": "m537 308.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3015",
        "fill": "#667",
        "d": "m543.2 308.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3017",
        "fill": "#6e6c70",
        "d": "m427.4 310.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3019",
        "fill": "#e5e3af",
        "d": "m433.5 310.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3021",
        "fill": "#faca88",
        "d": "m497 311.7.8 1.4z"
      }, null), _createVNode("path", {
        "id": "path3023",
        "fill": "#fae3c9",
        "d": "m500.5 310.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3025",
        "fill": "#fbfaf2",
        "d": "m535 310.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3027",
        "fill": "#a4a43d",
        "d": "m541 310.3 2 2z"
      }, null), _createVNode("path", {
        "id": "path3029",
        "fill": "#1b1b74",
        "d": "m543.2 310.3 2 2-2-2m-115.8 2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3031",
        "fill": "#a4a43d",
        "d": "m429.5 312.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3033",
        "fill": "#d0d045",
        "d": "m433.5 312.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3035",
        "fill": "#fbfaf2",
        "d": "m435.5 312.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3037",
        "fill": "#f9d6aa",
        "d": "m498.5 312.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3039",
        "fill": "#e5e59d",
        "d": "m535 312.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3041",
        "fill": "#6e6c70",
        "d": "m541 312.4 2 2-2-2m-111.5 2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3043",
        "fill": "#8cbf84",
        "d": "m435.5 314.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3045",
        "fill": "#0cf",
        "d": "M436.4 314.4c7 14.8 32 49.8 51 49.2 18.6-.7 39.5-35 47.6-49.2z"
      }, null), _createVNode("path", {
        "id": "path3047",
        "fill": "#a4a43d",
        "d": "m539 314.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3049",
        "fill": "#1b1b74",
        "d": "m541 314.4 2 2-2-2m-111.5 2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3051",
        "fill": "#a4a43d",
        "d": "m431.5 316.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3053",
        "fill": "#adb333",
        "d": "m435.5 316.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3055",
        "fill": "#1ac5b5",
        "d": "m437.6 316.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3057",
        "fill": "#68b070",
        "d": "m533 316.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3059",
        "fill": "#667",
        "d": "m539 316.4 2 2z"
      }, null), _createVNode("path", {
        "id": "path3061",
        "fill": "#58587b",
        "d": "m431.5 318.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path3063",
        "fill": "#7fb15c",
        "d": "m437.6 318.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path3065",
        "fill": "#27c2aa",
        "d": "m530.9 318.5 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3067",
        "fill": "#a4a43d",
        "d": "m537 318.5-2 4z"
      }, null), _createVNode("path", {
        "id": "path3069",
        "fill": "#0e0e6e",
        "d": "m539 318.5 2 2-2-2m-107.5 2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3071",
        "fill": "#a4a43d",
        "d": "m433.5 320.5 4 4z"
      }, null), _createVNode("path", {
        "id": "path3073",
        "fill": "#34be9e",
        "d": "m439.6 320.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path3075",
        "fill": "#96b247",
        "d": "m530.9 320.5 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3077",
        "fill": "#53527c",
        "d": "m537 320.5 2 2z"
      }, null), _createVNode("path", {
        "id": "path3079",
        "fill": "#3a3a7c",
        "d": "m433.5 322.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3081",
        "fill": "#a2b23d",
        "d": "m439.6 322.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3083",
        "fill": "#0dc9c1",
        "d": "m441.6 322.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3085",
        "fill": "#5bb47c",
        "d": "m528.9 322.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3087",
        "fill": "#8d8d5b",
        "d": "m535 322.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3089",
        "fill": "#737370",
        "d": "m435.5 324.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3091",
        "fill": "#74b166",
        "d": "m441.6 324.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3093",
        "fill": "#27c2aa",
        "d": "m526.9 324.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3095",
        "fill": "#a4a43d",
        "d": "m533 324.6-2 4z"
      }, null), _createVNode("path", {
        "id": "path3097",
        "fill": "#262678",
        "d": "m535 324.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3099",
        "fill": "#0e0e6e",
        "d": "m435.5 326.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3101",
        "fill": "#a4a43d",
        "d": "m437.6 326.6 4 4z"
      }, null), _createVNode("path", {
        "id": "path3103",
        "fill": "#42bb92",
        "d": "m443.7 326.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3105",
        "fill": "#0dc9c1",
        "d": "m524.9 326.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3107",
        "fill": "#96b247",
        "d": "m526.9 326.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3109",
        "fill": "#58587b",
        "d": "m533 326.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3111",
        "fill": "#3a3a7c",
        "d": "m437.6 328.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3113",
        "fill": "#adb333",
        "d": "m443.7 328.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3115",
        "fill": "#27c2aa",
        "d": "m445.7 328.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3117",
        "fill": "#74b166",
        "d": "m524.9 328.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3119",
        "fill": "#8d8d5b",
        "d": "m530.9 328.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3121",
        "fill": "#6e6c70",
        "d": "m439.6 330.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3123",
        "fill": "#96b247",
        "d": "m445.7 330.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3125",
        "fill": "#0dc9c1",
        "d": "m447.7 330.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3127",
        "fill": "#42bb92",
        "d": "m522.9 330.6 2 2z"
      }, null), _createVNode("path", {
        "id": "path3129",
        "fill": "#a4a43d",
        "d": "m528.9 330.6-4 6 4-6z"
      }, null), _createVNode("path", {
        "id": "path3131",
        "fill": "#1b1b74",
        "d": "m530.9 330.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3133",
        "fill": "#0e0e6e",
        "d": "m439.6 332.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3135",
        "fill": "#8d8d5b",
        "d": "m441.6 332.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3137",
        "fill": "#7fb15c",
        "d": "m447.7 332.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3139",
        "fill": "#34be9e",
        "d": "m520.9 332.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3141",
        "fill": "#3a3a7c",
        "d": "m528.9 332.6 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3143",
        "fill": "#1b1b74",
        "d": "m441.6 334.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path3145",
        "fill": "#a4a43d",
        "d": "M443.7 334.7 466 357z"
      }, null), _createVNode("path", {
        "id": "path3147",
        "fill": "#74b166",
        "d": "m449.8 334.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path3149",
        "fill": "#27c2aa",
        "d": "m518.8 334.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path3151",
        "fill": "#adb333",
        "d": "m520.9 334.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path3153",
        "fill": "#667",
        "d": "m526.9 334.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path3155",
        "fill": "#32327b",
        "d": "m443.7 336.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path3157",
        "fill": "#42bb92",
        "d": "m451.8 336.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path3159",
        "fill": "#0dc9c1",
        "d": "m516.8 336.7-8.2 10.2 8.3-10.3z"
      }, null), _createVNode("path", {
        "id": "path3161",
        "fill": "#adb333",
        "d": "m518.8 336.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path3163",
        "fill": "#737370",
        "d": "m524.9 336.7 2 2z"
      }, null), _createVNode("path", {
        "id": "path3165",
        "fill": "#49497d",
        "d": "m445.7 338.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3167",
        "fill": "#42bb92",
        "d": "m453.9 338.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3169",
        "fill": "#96b247",
        "d": "m516.8 338.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3171",
        "fill": "#8d8d5b",
        "d": "m522.9 338.8-2 4z"
      }, null), _createVNode("path", {
        "id": "path3173",
        "fill": "#0e0e6e",
        "d": "m524.9 338.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3175",
        "fill": "#53527c",
        "d": "m447.7 340.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3177",
        "fill": "#42bb92",
        "d": "m455.9 340.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3179",
        "fill": "#96b247",
        "d": "m514.7 340.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3181",
        "fill": "#0e0e6e",
        "d": "m522.9 340.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3183",
        "fill": "#6e6c70",
        "d": "m449.8 342.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3185",
        "fill": "#42bb92",
        "d": "m457.9 342.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3187",
        "fill": "#96b247",
        "d": "m512.7 342.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3189",
        "fill": "#a4a43d",
        "d": "m518.8 342.8-4 6 4-6z"
      }, null), _createVNode("path", {
        "id": "path3191",
        "fill": "#262678",
        "d": "m520.9 342.8 2 2z"
      }, null), _createVNode("path", {
        "id": "path3193",
        "fill": "#6e6c70",
        "d": "m451.8 344.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3195",
        "fill": "#42bb92",
        "d": "m459.9 344.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3197",
        "fill": "#96b247",
        "d": "m510.7 344.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3199",
        "fill": "#262678",
        "d": "m518.8 344.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3201",
        "fill": "#6e6c70",
        "d": "m453.9 346.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3203",
        "fill": "#68b070",
        "d": "m461.9 346.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3205",
        "fill": "#27c2aa",
        "d": "m506.6 346.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3207",
        "fill": "#adb333",
        "d": "m508.6 346.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3209",
        "fill": "#262678",
        "d": "m516.8 346.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3211",
        "fill": "#667",
        "d": "m455.9 348.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3213",
        "fill": "#74b166",
        "d": "m463.9 348.9 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3215",
        "fill": "#34be9e",
        "d": "m504.6 348.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3217",
        "fill": "#adb333",
        "d": "m506.6 348.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3219",
        "fill": "#8d8d5b",
        "d": "m512.7 348.9-2 4z"
      }, null), _createVNode("path", {
        "id": "path3221",
        "fill": "#262678",
        "d": "m514.7 348.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3223",
        "fill": "#49497d",
        "d": "m457.9 350.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3225",
        "fill": "#96b247",
        "d": "m466 350.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3227",
        "fill": "#0dc9c1",
        "d": "m468 350.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3229",
        "fill": "#42bb92",
        "d": "m502.5 350.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3231",
        "fill": "#0e0e6e",
        "d": "m512.7 350.9 2 2z"
      }, null), _createVNode("path", {
        "id": "path3233",
        "fill": "#49497d",
        "d": "m459.9 353 2 2z"
      }, null), _createVNode("path", {
        "id": "path3235",
        "fill": "#a2b23d",
        "d": "m468 353 2 2z"
      }, null), _createVNode("path", {
        "id": "path3237",
        "fill": "#27c2aa",
        "d": "m470 353 2 2z"
      }, null), _createVNode("path", {
        "id": "path3239",
        "fill": "#74b166",
        "d": "m500.5 353 2 2z"
      }, null), _createVNode("path", {
        "id": "path3241",
        "fill": "#a4a43d",
        "d": "m506.6 353-6 8z"
      }, null), _createVNode("path", {
        "id": "path3243",
        "fill": "#808067",
        "d": "m508.6 353 2 2z"
      }, null), _createVNode("path", {
        "id": "path3245",
        "fill": "#0e0e6e",
        "d": "m510.7 353 2 2z"
      }, null), _createVNode("path", {
        "id": "path3247",
        "fill": "#262678",
        "d": "m461.9 355 2 2z"
      }, null), _createVNode("path", {
        "id": "path3249",
        "fill": "#adb333",
        "d": "m470 355 2 2z"
      }, null), _createVNode("path", {
        "id": "path3251",
        "fill": "#42bb92",
        "d": "m472 355 2 2z"
      }, null), _createVNode("path", {
        "id": "path3253",
        "fill": "#0dc9c1",
        "d": "m496.5 355 2 2z"
      }, null), _createVNode("path", {
        "id": "path3255",
        "fill": "#96b247",
        "d": "m498.5 355 2 2z"
      }, null), _createVNode("path", {
        "id": "path3257",
        "fill": "#6e6c70",
        "d": "m506.6 355 2 2z"
      }, null), _createVNode("path", {
        "id": "path3259",
        "fill": "#1b1b74",
        "d": "m463.9 357 2 2-2-2z"
      }, null), _createVNode("path", {
        "id": "path3261",
        "fill": "#8d8d5b",
        "d": "m466 357 2 2z"
      }, null), _createVNode("path", {
        "id": "path3263",
        "fill": "#74b166",
        "d": "m474 357 2 2z"
      }, null), _createVNode("path", {
        "id": "path3265",
        "fill": "#0dc9c1",
        "d": "m476.2 357 2 2z"
      }, null), _createVNode("path", {
        "id": "path3267",
        "fill": "#34be9e",
        "d": "m494.4 357 2 2z"
      }, null), _createVNode("path", {
        "id": "path3269",
        "fill": "#adb333",
        "d": "m496.5 357 2 2z"
      }, null), _createVNode("path", {
        "id": "path3271",
        "fill": "#49497d",
        "d": "m504.6 357 2 2z"
      }, null), _createVNode("path", {
        "id": "path3273",
        "fill": "#0e0e6e",
        "d": "m466 359 2 2z"
      }, null), _createVNode("path", {
        "id": "path3275",
        "fill": "#6e6c70",
        "d": "m468 359 2 2z"
      }, null), _createVNode("path", {
        "id": "path3277",
        "fill": "#a4a43d",
        "d": "m470 359 4 4z"
      }, null), _createVNode("path", {
        "id": "path3279",
        "fill": "#96b247",
        "d": "m476.2 359 2 2z"
      }, null), _createVNode("path", {
        "id": "path3281",
        "fill": "#27c2aa",
        "d": "m478.2 359 2 2z"
      }, null), _createVNode("path", {
        "id": "path3283",
        "fill": "#68b070",
        "d": "m492.4 359 2 2z"
      }, null), _createVNode("path", {
        "id": "path3285",
        "fill": "#32327b",
        "d": "m502.5 359 2 2z"
      }, null), _createVNode("path", {
        "id": "path3287",
        "fill": "#49497d",
        "d": "m470 361 2 2z"
      }, null), _createVNode("path", {
        "id": "path3289",
        "fill": "#5bb47c",
        "d": "m480.2 361 2 2z"
      }, null), _createVNode("path", {
        "id": "path3291",
        "fill": "#27c2aa",
        "d": "m488.3 361 2 2z"
      }, null), _createVNode("path", {
        "id": "path3293",
        "fill": "#96b247",
        "d": "m490.4 361 2 2z"
      }, null), _createVNode("path", {
        "id": "path3295",
        "fill": "#a4a43d",
        "d": "m496.5 361-2 4z"
      }, null), _createVNode("path", {
        "id": "path3297",
        "fill": "#808067",
        "d": "m498.5 361 2 2z"
      }, null), _createVNode("path", {
        "id": "path3299",
        "fill": "#0e0e6e",
        "d": "m500.5 361 2 2z"
      }, null), _createVNode("path", {
        "id": "path3301",
        "fill": "#262678",
        "d": "m472 363 2 2z"
      }, null), _createVNode("path", {
        "id": "path3303",
        "fill": "#8d8d5b",
        "d": "m474 363 2 2z"
      }, null), _createVNode("path", {
        "id": "path3305",
        "fill": "#8bb252",
        "d": "m482.3 363 2 2z"
      }, null), _createVNode("path", {
        "id": "path3307",
        "fill": "#1ac5b5",
        "d": "m484.3 363 2 2z"
      }, null), _createVNode("path", {
        "id": "path3309",
        "fill": "#5bb47c",
        "d": "m486.3 363 2 2z"
      }, null), _createVNode("path", {
        "id": "path3311",
        "fill": "#58587b",
        "d": "m496.5 363 2 2z"
      }, null), _createVNode("path", {
        "id": "path3313",
        "fill": "#0e0e6e",
        "d": "m474 365.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3315",
        "fill": "#667",
        "d": "m476.2 365.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3317",
        "fill": "#a4a43d",
        "d": "m478.2 365.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3319",
        "fill": "#99994e",
        "d": "m492.4 365.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3321",
        "fill": "#32327b",
        "d": "m494.4 365.2 2 2-2-2m-16.2 2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3323",
        "fill": "#99994e",
        "d": "m480.2 367.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3325",
        "fill": "#a4a43d",
        "d": "m488.3 367.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3327",
        "fill": "#667",
        "d": "m490.4 367.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3329",
        "fill": "#0e0e6e",
        "d": "m492.4 367.2 2 2-2-2m-12.2 2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3331",
        "fill": "#667",
        "d": "m482.3 369.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3333",
        "fill": "#a4a43d",
        "d": "m484.3 369.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3335",
        "fill": "#99994e",
        "d": "m486.3 369.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3337",
        "fill": "#32327b",
        "d": "m488.3 369.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3339",
        "fill": "#262678",
        "d": "m484.3 371.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3341",
        "fill": "#0e0e6e",
        "d": "m486.3 371.2 2 2z"
      }, null), _createVNode("path", {
        "id": "path3343",
        "fill": "#f90",
        "d": "M488.3 235.2c3.2 7.4 13.2 15.5 16 19.5-3.5 4-4.2 3.6-3.8 11 6-6.4 6.2-7 10.2-6.1 8.6 8.6 1.5 27-5.6 31-7.1 4.3-5.8-.1-16.5 5.2 4.9 4.2 10.6-.6 15.2.7 2.5 3-1.2 8.4.7 13.6 4-.4 3.6-8.7 4.6-11.7 3-11 21-18.6 21.9-28.7 3.8-1.7 7.5-.5 12 2-2.2-9.4-9.7-9.3-11.8-12.2-4.8-7.4-9.1-15.8-19.4-18-8-1.7-7.3.5-12.3-3-3.2-2.4-12.7-7-11.2-3.3z"
      }, null), _createVNode("path", {
        "id": "path3345",
        "fill": "#fff",
        "fill-rule": "evenodd",
        "d": "M510.9 243.6a1.6 1.6 0 1 1-3.3 0 1.6 1.6 0 0 1 3.3 0z"
      }, null), _createVNode("path", {
        "id": "path3347",
        "fill": "#f90",
        "d": "M463.2 266.5c5-6.2 7.6-19 9.8-23.2 5.2 1.2 5 2 11.5-1.8-8.5-2.4-9.2-2.2-10.2-6.1 3.6-11.7 23.2-14 30-9.6 7.2 4.3 2.7 5.2 12.4 12 1.4-6.2-5.5-9-6.5-13.6 1.5-3.7 8-3 11.6-7-2.2-3.5-9.3.8-12.4 1.4-11 2.5-26.3-9.8-35.6-6-3.3-2.5-4-6.4-4-11.7-7.1 6.5-3.5 13-5.2 16.3-4.2 7.7-9.7 15.5-6.8 25.6 2.2 7.8 3.8 6.2 3.2 12.3-.7 3.9-.4 14.5 2.2 11.4z"
      }, null), _createVNode("path", {
        "id": "path3349",
        "fill": "#fff",
        "fill-rule": "evenodd",
        "d": "M460 242.6c.9-.4 1.9-.1 2.3.7a1.6 1.6 0 1 1-2.2-.7z"
      }, null), _createVNode("path", {
        "id": "path3351",
        "fill": "#f90",
        "d": "M504.3 270.8c-8-1-20.1 3.3-25 3.7-1.5-5.1-.8-5.5-7.4-9 2.3 8.6 2.8 9 0 12-11.8 2.9-24-12.7-23.8-20.8 0-8.3 3.2-5 4-17-6 2-4.8 9.5-8.3 12.8-4 .6-6.6-5.3-12-6.3-1.8 3.7 5.5 7.5 7.6 9.9 7.9 8.2 5.2 27.5 13.3 33.5-.4 4.2-3.4 6.8-8 9.4 9.3 2.9 13-3.7 16.7-4 8.8-.2 18.3.4 25.5-7.3 5.4-6 3.3-6.5 8.8-9 3.7-1.4 12.6-7.2 8.6-8z"
      }, null), _createVNode("path", {
        "id": "path3353",
        "fill": "#fff",
        "fill-rule": "evenodd",
        "d": "M485.5 285.9a1.6 1.6 0 1 1 1.7-2.8 1.6 1.6 0 0 1-1.7 2.8z"
      }, null), _createVNode("path", {
        "id": "path5288",
        "fill": "#012169",
        "stroke-width": ".5",
        "d": "M0 0h320v240H0z"
      }, null), _createVNode("path", {
        "id": "path5290",
        "fill": "#fff",
        "stroke-width": ".5",
        "d": "m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
      }, null), _createVNode("path", {
        "id": "path5292",
        "fill": "#c8102e",
        "stroke-width": ".5",
        "d": "M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
      }, null), _createVNode("path", {
        "id": "path5294",
        "fill": "#fff",
        "stroke-width": ".5",
        "d": "M120.5 0v240h80V0zM0 80v80h320V80z"
      }, null), _createVNode("path", {
        "id": "path5296",
        "fill": "#c8102e",
        "stroke-width": ".5",
        "d": "M0 96.5v48h320v-48zM136.5 0v240h48V0z"
      }, null)]);
    };
  }
};