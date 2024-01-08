<template>
  <section class="hero">
    <figure>
      <img
        src="@/assets/img/tacos_delicioso_1000x667.png"
        alt="Tacos Delicioso"
        title="Tacos Delicioso!"
        width="1000"
        height="667"
      />
      <figcaption class="offscreen">Try these Delicious Tacos</figcaption>
    </figure>
  </section>

  <main class="main">
    <article id="about" class="main__article about">
      <h2>About <abbr title="The Little Taco Shop">LTS</abbr></h2>
      <p>
        <abbr title="The Little Taco Shop">LTS</abbr> was founded in
        <time datetime="2022">2022</time>. Our shop was built from a
        <strong>love of tacos</strong> 🌮🌮🌮. We hope our shop adds a unique and interesting place
        to our little town.
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
</template>

<script lang="ts" setup>
// You can import any dependencies or define variables here
</script>

<style scoped>
/* Add your styles here */
</style>
