<template>
  <div>
    <HeroSection
      title="Bienvenidos!"
      :imageSrc="img"
      imageAlt="Tacos and a Drink"
      imageTitle="We love tacos!"
      imageWidth="1000"
      imageHeight="667"
      imageCaption="Tacos and a Drink"
    />

    <Menu id="menu" />

    <div class="flex justify-center">
      <a href="#" class="block text-center border-b mb-4 font-bold border-black dark:border-white"
        >Back To Top</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import Menu from '@/components/Menu.vue'
import HeroSection from '@/components/HeroSection.vue'
// import img from '@/assets/img/tacos_and_drink_1000x667.png'
const img = new URL('@/assets/img/tacos_and_drink_1000x667.png', import.meta.url).href
</script>
