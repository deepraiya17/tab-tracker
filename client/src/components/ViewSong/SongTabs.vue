<template>
  <panel title="Guitar Tabs for Song" class="ml-3">
    <textarea v-model="tab" class="tabs"></textarea>
  </panel>
</template>

<script>
export default {
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
