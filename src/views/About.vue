<template>
  <div>
    <HeroSection
      title="about"
      imageSrc="src/assets/img/tacos_delicioso_1000x667.png"
      imageAlt="Tacos Delicioso"
      imageTitle="Tacos Delicioso!"
      imageWidth="1000"
      imageHeight="667"
      imageCaption="Try these Delicious Tacos"
    />

    <main class="px-[0.25em] py-2.5">
      <article
        id="about"
        class="scroll-mt-[6.5rem] m-[var(--MARGIN))] first:mt-4 last:min-h-[calc(100vh - 20rem)] pl-5"
      >
        <h2 class="font-headings tracking-wide mb-4 text-[#33b233] dark:text-white text-2xl">
          About LTS
        </h2>
        <p>
          <abbr title="Taco Shop">LTS</abbr> was founded in <time datetime="2022">2022</time>. Our
          shop was built from a <strong>love of tacos</strong> 🌮🌮🌮. We hope our shop adds a
          unique and interesting place to our little town.
        </p>
        <aside class="m-[var(--MARGIN)]">
          <div class="font-headings tracking-widest mb-4 text-[#33b233] dark:text-white">
            Taco Trivia
          </div>
          <details>
            <summary>When did tacos first appear in the United States?</summary>
            <p class="mt-4">
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
