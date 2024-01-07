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

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const links = ref([
  { to: '/', label: 'Home', hidden: false },
  { to: '/#menu', label: 'Menu', hidden: false },
  { to: '/hours', label: 'Hours', hidden: false },
  { to: '/contact', label: 'Contact', hidden: false },
  { to: '/about', label: 'About', hidden: false },
])

const updateButtonVisibility = () => {
  links.value.forEach((link) => {
    // this will only hidden current page
    link.hidden = link.to === route.path
  })
}

watch(
  () => route.path,
  () => {
    updateButtonVisibility()
  },
)

onMounted(() => {
  updateButtonVisibility()
})
</script>

<style>
@import '@/style/common.css';
@import '@/style/output.css';

.hidden {
  display: none;
}
</style>
