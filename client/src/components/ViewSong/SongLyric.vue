<template>
  <panel title="Song Lyrics">
    <textarea v-model="lyrics" class="lyrics"></textarea>
  </panel>
</template>

<script>
export default {
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
