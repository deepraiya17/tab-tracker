<template>
  <panel title="Song Lyrics">
    <textarea v-model="lyrics" class="lyrics"></textarea>
  </panel>
</template>

<script>
import Panel from "../Panel.vue";
export default {
  components: { Panel },
  props: ["lyrics"],
};
</script>

<style scoped>
.lyrics {
  width: 90%;
  overflow: auto;
  height: 300px;
}
</style>
