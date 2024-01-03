<template>
  <div id="app">
    <div class="header">
      <h1 class="header__h1">Little Taco Shop</h1>
      <div class="header__nav">
        <div class="header__ul">
          <router-link
            :to="link.to"
            v-for="link in links"
            :key="link.to"
            :class="{ hidden: link.hidden }"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
    <div class="footer">Copyright © 2024 Little Taco Shop</div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const links = reactive([
  { to: '/', label: 'Home', hidden: false },
  { to: '#menu', label: 'Menu', hidden: false },
  { to: '/hours', label: 'Hours', hidden: false },
  { to: '/contact', label: 'Contact', hidden: false },
  { to: '/about', label: 'About', hidden: false },
])
</script>

<style>
@import '@/style/common.css';

.hidden {
  display: none;
}
</style>
