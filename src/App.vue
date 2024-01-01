<template>
  <div id="app">
    <div>Little Taco Shop</div>
    <router-link to="/">Home</router-link>
    <router-link to="/hours">Hours</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/about">About</router-link>

    <router-view></router-view>
    <div>Copyright © 2024 Little Taco Shop</div>
  </div>
</template>

<script setup>
// Any setup logic if needed
</script>
