<template>
  <panel title="Guitar Tabs for Song">
    <textarea v-model="tab" class="tabs"></textarea>
  </panel>
</template>

<script>
import Panel from "../Panel.vue";
export default {
  components: { Panel },
  props: ["tab"],
};
</script>

<style scoped>
.tabs {
  width: 90%;
  overflow: auto;
  height: 300px;
}
</style>
