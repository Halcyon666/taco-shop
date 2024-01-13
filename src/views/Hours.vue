<template>
  <div>
    <HeroSection
      imageSrc="src/assets/img/tacos_tray_1000x667.png"
      imageAlt="A Tray of Tasty Tacos"
      imageTitle="We love trays of tacos!"
      imageWidth="1000"
      imageHeight="667"
      imageCaption="A Tray of Tasty Tacos"
    />

    <main class="main">
      <article class="main__article">
        <h2 h2-style>Hours</h2>
        <p>We are open 7 days a week!</p>
        <dl>
          <dt>Sunday-Thursday</dt>
          <dd>11am-9pm</dd>
          <dt>Friday-Saturday</dt>
          <dd>11am-11pm</dd>
        </dl>
      </article>
    </main>
  </div>
</template>

<script lang="ts" setup>
import HeroSection from '@/components/HeroSection.vue'
</script>

<style scoped>
/* Add your styles here */
</style>
