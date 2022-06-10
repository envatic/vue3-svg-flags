<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { Vue3SvgFlagsSample } from '@/entry.esm';
import {UgIcon, AdIcon} from "../dist/esm/entry.esm";

export default defineComponent({
  name: 'ServeDev',
  components: {
  UgIcon,
  AdIcon
  }
});
</script>

<template>
  <div id="app">
    <UgIcon/>
    <AdIcon/>
  </div>
</template>
