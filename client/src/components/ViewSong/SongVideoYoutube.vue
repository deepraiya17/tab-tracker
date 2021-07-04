<template>
  <panel title="Youtube Video" class="ml-3">
    <youtube :video-id="youtubeId" player-height="315" />
  </panel>
</template>

<script>
export default {
  props: ["youtubeId"],
};
</script>

<style scoped></style>
