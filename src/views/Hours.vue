<template>
  <div>
    <HeroSection
      title="hours"
      :imageSrc="img"
      imageAlt="A Tray of Tasty Tacos"
      imageTitle="We love trays of tacos!"
      imageWidth="1000"
      imageHeight="667"
      imageCaption="A Tray of Tasty Tacos"
    />

    <main class="main">
      <article
        class="scroll-mt-[6.5rem] m-[clamp(1em,2.5vh,1.5em)_0] mx-[1em] first:mt-4 last:min-h-[calc(100vh-20rem)]"
      >
        <h2 class="font-headings tracking-wide mb-4 text-[#33b233] dark:text-white text-2xl">
          Hours
        </h2>
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
const img = new URL('@/assets/img/tacos_tray_1000x667.png', import.meta.url).href
</script>
