<template>
  <div>
    <HeroSection
      imageSrc="src/assets/img/tacos_close_up_1000x649.png"
      imageAlt="Little Taco Shop Tacos"
      imageTitle="Tacos ready to eat!"
      imageWidth="1000"
      imageHeight="649"
      imageCaption="Little Taco Shop Tacos"
    />

    <main class="main">
      <article class="main__article">
        <h2 h2-style>Our Location</h2>
        <address>
          555 Taco Temptation Lane, Suite T<br />
          Kansas City, MO 55555-5555
          <br /><br />
          Phone: <a href="tel:+5555555555">555-555-5555</a>
        </address>
      </article>
      <hr />
      <article class="main__article contact">
        <h2 class="contact__h2 h2-style">Our Contact Form</h2>

        <form action="https://httpbin.org/get" method="get" class="contact__form">
          <fieldset class="contact__fieldset">
            <legend class="off-screen">Send Us A Message</legend>
            <p class="contact__p">
              <label class="contact__label" for="name">Name:</label>
              <input
                class="contact__input"
                type="text"
                name="name"
                id="name"
                placeholder="your name"
                required
              />
            </p>
            <p class="contact__p">
              <label class="contact__label" for="email">Email:</label>
              <input
                class="contact__input"
                type="email"
                name="email"
                id="email"
                placeholder="your email"
                required
              />
            </p>
            <p class="contact__p">
              <label class="contact__label" for="message">Your Message:</label>
              <br />
              <textarea
                class="contact__textarea"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Type your message here"
              ></textarea>
            </p>
          </fieldset>
          <button class="contact__button" type="submit">Send</button>
          <button class="contact__button" type="reset">Reset</button>
        </form>
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
