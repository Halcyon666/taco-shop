<template>
  <div id="app" class="app">
    <div class="sticky z-[1] top-0">
      <div class="flex bg-black px-[19.950px] py-[9.258px]">
        <div class="text-center text-[37.0304px] font-headings mx-auto w-full text-white">
          🌮 Little Taco Shop 🌮
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 text-fuchsia-700"
          @click="toggleDark()"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </div>
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
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const route = useRoute()
const pageTitle = ref('Little Taco Shop')

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

const updatePageTitle = () => {
  const currentLink = links.value.find((link) => link.to === route.path)
  pageTitle.value = currentLink ? `Taco-${currentLink.label}` : 'Little Taco Shop'
  document.title = pageTitle.value
}

watch(
  () => route.path,
  () => {
    updateButtonVisibility()
    updatePageTitle()
  },
)

onMounted(() => {
  updateButtonVisibility()
})
</script>

<style>
.hidden {
  display: none;
}
</style>
