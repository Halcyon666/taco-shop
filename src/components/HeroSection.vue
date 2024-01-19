<template>
  <section class="relative">
    <!--  animate style hidden if not at home page -->
    <div
      :class="{ hidden: title !== 'Bienvenidos!' }"
      class="[text-shadow:2px_2px_5px_#333] dark:[text-shadow:2px_2px_5px_white] font-headings tracking-wide bg-[#33b233] text-[whitesmoke] dark:text-black text-2xl animate-[showWelcome_0.5s_ease-in-out_1s_forwards] px-[0.25em] py-[0.5em] absolute top-[-100px] left-[20px]"
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
