<template>
  <div>
    <HeroSection
      title="Tacos Delicioso"
      imageSrc="src/assets/img/tacos_delicioso_1000x667.png"
      imageAlt="Tacos Delicioso"
      imageTitle="Tacos Delicioso!"
      imageWidth="1000"
      imageHeight="667"
      imageCaption="Try these Delicious Tacos"
    />

    <main class="main">
      <article id="about" class="main__article about">
        <h2>About</h2>
        <p>
          <abbr title="Taco Shop">LTS</abbr> was founded in <time datetime="2022">2022</time>. Our
          shop was built from a <strong>love of tacos</strong> 🌮🌮🌮. We hope our shop adds a
          unique and interesting place to our little town.
        </p>
        <aside class="about__trivia">
          <h3>Taco Trivia</h3>
          <details>
            <summary>When did tacos first appear in the United States?</summary>
            <p class="about__trivia-answer">
              Jeffrey M. Pilcher, taco historian and professor of history at the University of
              Minnesota, says the earliest mention of tacos in the United States are in a newspaper
              from <time datetime="1905">1905</time>. (Source:
              <cite
                ><a
                  href="https://www.smithsonianmag.com/arts-culture/where-did-the-taco-come-from-81228162/"
                  target="_blank"
                  >Smithsonian Magazine</a
                ></cite
              >)
            </p>
          </details>
        </aside>
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
