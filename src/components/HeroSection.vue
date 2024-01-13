<template>
  <section class="hero">
    <h2 class="hero__h2 h2-style">{{ title }}</h2>
    <figure>
      <img
        :src="imageSrc"
        :alt="imageAlt"
        :title="imageTitle"
        :width="imageWidth"
        :height="imageHeight"
      />
      <figcaption class="off-screen">{{ imageCaption }}</figcaption>
    </figure>
  </section>
</template>

<script lang="ts" setup>
defineProps([
  'title',
  'imageSrc',
  'imageAlt',
  'imageTitle',
  'imageWidth',
  'imageHeight',
  'imageCaption',
])
</script>

<style scoped>
/* Add your styles here */
</style>
