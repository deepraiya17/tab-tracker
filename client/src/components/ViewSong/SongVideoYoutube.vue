<template>
  <panel title="Youtube Video" class="ml-3">
    <youtube :video-id="youtubeId" player-height="315" />
  </panel>
</template>

<script>
import Panel from "../Panel.vue";
export default {
  components: { Panel },
  props: ["youtubeId"],
};
</script>

<style scoped></style>
