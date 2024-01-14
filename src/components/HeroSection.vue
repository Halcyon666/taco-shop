<template>
  <section class="hero">
    <!-- here dynamic hero__h2 style and hidden when not at home page -->
    <h2
      :class="{ hero__h2: title === 'Bienvenidos!', hidden: title !== 'Bienvenidos!' }"
      class="h2-style text-black"
    >
      {{ title }}
    </h2>
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
