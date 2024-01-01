<template>
  <div id="app">
    <div class="header__h1">Little Taco Shop</div>
    <div class="link">
      <router-link to="/">Home</router-link>
      <router-link to="/hours">Hours</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
    </div>

    <router-view></router-view>
    <div>Copyright © 2024 Little Taco Shop</div>
  </div>
</template>

<script setup>
// Any setup logic if needed
</script>

<style>
@import '@/style/common.css';

.link {
  padding: var(--PADDING-TB) var(--PADDING-SIDE);
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
}
</style>
