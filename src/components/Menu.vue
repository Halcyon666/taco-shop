<!-- MenuComponent.vue -->
<template>
  <article id="menu" class="main__article menu">
    <h2 class="pl-5 h2-style">Our Menu</h2>
    <table class="grid grid-cols-3 grid-rows-8 gap-0.1em mb-4 ml-5 mr-5">
      <caption class="off-screen">
        Our Tacos
      </caption>
      <!-- MenuHeader -->
      <thead class="contents">
        <th
          v-for="(item, index) in menuHeaders"
          :key="'menuheader' + index"
          class="menu-item menu-item-highlight first:rounded-tl-[15px] last:rounded-tr-[15px]"
        >
          {{ item.content }}
        </th>
      </thead>

      <tbody class="contents">
        <!-- Crunchy -->
        <th class="menu-item menu-item-highlight row-span-3">Crunchy</th>
        <tr v-for="(item, index) in crunchyItems" :key="'crunchy' + index" class="contents">
          <td class="menu-item row-span-1">{{ item.quantity }}</td>
          <td class="menu-item row-span-1">{{ item.price }}</td>
        </tr>
        <!-- Soft -->
        <th class="menu-item menu-item-highlight row-span-3">Soft</th>
        <tr v-for="(item, index) in softItems" :key="'soft' + index" class="contents">
          <td class="menu-item row-span-1">{{ item.quantity }}</td>
          <td class="menu-item row-span-1">{{ item.price }}</td>
        </tr>
      </tbody>
      <td class="menu-item menu-item-highlight col-span-3 rounded-bl-[15px] rounded-br-[15px]">
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

<style scoped></style>
