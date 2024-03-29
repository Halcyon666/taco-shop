<template>
  <div
    id="app"
    class="bg-[#fff] dark:bg-[#333] text-[#000] dark:text-white min-h-screen max-w-[800px] mx-auto border-l border-r border-solid dark:border-white border-[#333] shadow-[0_0_10px_#333] dark:shadow-[0_0_10px_whitesmoke]"
  >
    <div class="sticky z-[1] top-0">
      <div class="flex bg-black px-[19.950px] py-[9.258px]">
        <div
          class="text-center text-[37.0304px] font-headings mx-auto w-full text-white min-[576px]:before:content-['🌮'] min-[576px]:after:content-['🌮']"
        >
          Little Taco Shop
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
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 
            9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </div>
      <div
        class="bg-white dark:bg-[#141414] border-b dark:border-white border-[#333] font-bold shadow-[0_6px_5px_-5px_rgba(0,0,0,0.3)] dark:shadow-[0_6px_5px_-5px_rgba(255,255,255,0.3)]"
      >
        <!--directly use text-[rgba(0, 0, 0, 0.6)] not support, instead of text-black/[.6]
        if the color is rgba(52, 178, 52, 0.75), only can use text-[#34b234bf]
        -->
        <div class="px-[0.25em] py-[2.5%] list-none flex justify-evenly gap-4">
          <router-link
            :to="link.to"
            v-for="link in links"
            :key="link.to"
            :class="{ hidden: link.hidden }"
            class="text-black dark:text-white border-b border-[#333] dark:border-[whitesmoke] hover:text-black/[.6] dark:hover:text-orange-500 focus-visible:text-black/[.6] dark:focus-visible:text-orange-500 active:text-orange-500 dark:active:text-[#fcc867] shadow-[0_6px_5px_-5px_#333] dark:shadow-[0_6px_5px_-5px__whitesmoke]"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>

    <footer class="sticky bottom-0 bg-black text-center text-white p-[0.25em] h-8">
      <p class="leading-6">
        <span class="whitespace-nowrap">Copyright &copy; {{ new Date().getFullYear() }}</span>
        <span class="whitespace-nowrap"> Little Taco Shop</span>
      </p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'

// THEME
const isDark = useDark()
const toggleDark = useToggle(isDark)
// support all the theme change, respect system preference first ,
// also can change by toggle button
const changeTheme = () => {
  // Set the initial theme on page load
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Explicitly choose light mode
  localStorage.theme = 'light'

  // Explicitly choose dark mode
  localStorage.theme = 'dark'

  // Respect OS preference
  localStorage.removeItem('theme')
}

// LINK DATAS
const route = useRoute()
const pageTitle = ref('Little Taco Shop')
const links = ref([
  { to: '/taco-shop/', label: 'Home', hidden: false },
  { to: '/taco-shop/#menu', label: 'Menu', hidden: false },
  { to: '/taco-shop/hours', label: 'Hours', hidden: false },
  { to: '/taco-shop/contact', label: 'Contact', hidden: false },
  { to: '/taco-shop/about', label: 'About', hidden: false },
])

// BYNAMIC DISPLAY LINKS
const updateButtonVisibility = () => {
  links.value.forEach((link) => {
    // this will only hidden current page
    link.hidden = link.to === route.path
  })
}
// DYNAMIC PAGE TITLE
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
  changeTheme()
})
</script>
