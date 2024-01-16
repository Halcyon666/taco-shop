<!-- MenuComponent.vue -->
<template>
  <article id="menu" class="main__article menu">
    <h2
      class="pl-5 font-headings tracking-wide mb-4 text-[#33b233] dark:text-whitesmoke dark:text-highlight-dark text-2xl"
    >
      Our Menu
    </h2>
    <table class="grid grid-cols-3 grid-rows-8 gap-0.1em mb-4 ml-5 mr-5">
      <caption class="absolute left-[-10000px]">
        Our Tacos
      </caption>
      <!-- MenuHeader -->
      <thead class="contents">
        <th
          v-for="(item, index) in menuHeaders"
          :key="'menuheader' + index"
          class="w-full p-4 border-2 dark:border-border-dark border-border-light grid text-[#33b233] dark:text-whitesmoke dark:text-highlight-dark font-bold h-full place-content-center first:rounded-tl-[15px] last:rounded-tr-[15px]"
        >
          {{ item.content }}
        </th>
      </thead>

      <tbody class="contents">
        <!-- Crunchy -->
        <th
          class="w-full p-4 border-2 dark:border-border-dark border-border-light grid text-[#33b233] dark:text-whitesmoke dark:text-highlight-dark font-bold h-full place-content-center row-span-3"
        >
          Crunchy
        </th>
        <tr v-for="(item, index) in crunchyItems" :key="'crunchy' + index" class="contents">
          <td
            class="w-full p-4 border-2 dark:border-border-dark border-border-light grid place-content-center row-span-1"
          >
            {{ item.quantity }}
          </td>
          <td
            class="w-full p-4 border-2 dark:border-border-dark border-border-light grid place-content-center row-span-1"
          >
            {{ item.price }}
          </td>
        </tr>
        <!-- Soft -->
        <th
          class="w-full p-4 border-2 dark:border-border-dark border-border-light grid text-[#33b233] dark:text-whitesmoke dark:text-highlight-dark font-bold h-full place-content-center row-span-3"
        >
          Soft
        </th>
        <tr v-for="(item, index) in softItems" :key="'soft' + index" class="contents">
          <td
            class="w-full p-4 border-2 dark:border-border-dark border-border-light grid place-content-center row-span-1"
          >
            {{ item.quantity }}
          </td>
          <td
            class="w-full p-4 border-2 dark:border-border-dark border-border-light grid place-content-center row-span-1"
          >
            {{ item.price }}
          </td>
        </tr>
      </tbody>
      <td
        class="w-full p-4 border-2 dark:border-border-dark border-border-light grid text-[#33b233] dark:text-whitesmoke dark:text-highlight-dark font-bold h-full place-content-center col-span-3 rounded-bl-[15px] rounded-br-[15px]"
      >
        Chips &amp; Salsa $2
      </td>
    </table>
  </article>
</template>

<script lang="ts" setup>
// Define your data
const menuHeaders = [{ content: 'Tacos' }, { content: 'Quantity' }, { content: 'Price' }]
const crunchyItems = [
  { quantity: 1, price: '$1.50' },
  { quantity: 2, price: '$2.50' },
  { quantity: 3, price: '$3.25' },
]

const softItems = [
  { quantity: 1, price: '$2.00' },
  { quantity: 2, price: '$3.50' },
  { quantity: 3, price: '$4.50' },
]
</script>
