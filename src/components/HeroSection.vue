<template>
  <section class="relative">
    <!-- here dynamic hero__h2 style and hidden when not at home page -->
    <div
      :class="{ hero__h2: title === 'Bienvenidos!', hidden: title !== 'Bienvenidos!' }"
      class="font-headings tracking-wide mb-4 bg-[#33b233] text-white text-2xl"
    >
      {{ title }}
    </div>
    <figure>
      <img
        :src="imageSrc"
        :alt="imageAlt"
        :title="imageTitle"
        :width="imageWidth"
        :height="imageHeight"
        class="block max-w-full h-auto"
      />
      <figcaption class="absolute left-[-10000px]">{{ imageCaption }}</figcaption>
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
