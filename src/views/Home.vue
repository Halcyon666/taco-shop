<template>
  <div>
    <HeroSection
      title="Bienvenidos!"
      imageSrc="src/assets/img/tacos_and_drink_1000x667.png"
      imageAlt="Tacos and a Drink"
      imageTitle="We love tacos!"
      imageWidth="1000"
      imageHeight="667"
      imageCaption="Tacos and a Drink"
    />

    <Menu id="menu" />
  </div>
</template>

<script lang="ts" setup>
import Menu from '@/components/Menu.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>

<style scoped>
/* || HERO */

.hero {
  position: relative;
}

.hero__h2 {
  background-color: var(--HERO-BGCOLOR);
  color: var(--HERO-COLOR);
  padding: 0.25em 0.5em;
  text-shadow: 2px 2px 5px var(--BORDER-COLOR);
  position: absolute;
  top: -100px;
  left: 20px;
  animation: showWelcome 0.5s ease-in-out 1s forwards;
}

@keyframes showWelcome {
  0% {
    top: -20px;
    transform: skew(0deg, -5deg) scaleY(0);
  }

  80% {
    top: 30px;
    transform: skew(10deg, -5deg) scaleY(1.2);
  }

  100% {
    top: 20px;
    transform: skew(-10deg, -5deg) scaleY(1);
  }
}
</style>
