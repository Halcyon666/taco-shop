<template>
  <div>
    <HeroSection
      title="contact"
      imageSrc="src/assets/img/tacos_close_up_1000x649.png"
      imageAlt="Little Taco Shop Tacos"
      imageTitle="Tacos ready to eat!"
      imageWidth="1000"
      imageHeight="649"
      imageCaption="Little Taco Shop Tacos"
    />

    <main class="main">
      <article class="main__article">
        <h2 class="h2-style mx-[1em]">Our Location</h2>
        <address class="mx-[1em]">
          555 Taco Temptation Lane, Suite T<br />
          Kansas City, MO 55555-5555
          <br /><br />
          Phone: <a href="tel:+5555555555">555-555-5555</a>
        </address>
      </article>
      <hr />
      <article class="main__article contact">
        <h2 class="mx-[1em] h2-style">Our Contact Form</h2>

        <form action="https://httpbin.org/get" method="get" class="contact__form">
          <fieldset class="border-none">
            <legend class="off-screen">Send Us A Message</legend>
            <p class="mx-[1em] my-0">
              <label class="block font-bold" for="name">Name:</label>
              <input
                class="input-content font-inherit"
                type="text"
                name="name"
                id="name"
                placeholder="your name"
                required
              />
            </p>
            <p class="mx-[1em] my-0">
              <label class="block font-bold" for="email">Email:</label>
              <input
                class="input-content font-inherit"
                type="email"
                name="email"
                id="email"
                placeholder="your email"
                required
              />
            </p>
            <p class="mx-[1em] my-0">
              <label class="block font-bold" for="message">Your Message:</label>
              <br />
              <textarea
                class="input-content font-inherit"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Type your message here"
              ></textarea>
            </p>
          </fieldset>
          <div class="space-x-4 mx-[1em]">
            <button class="contact-button font-inherit" type="submit">Send</button>
            <button class="contact-button font-inherit" type="reset">Reset</button>
          </div>
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
