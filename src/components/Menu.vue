<!-- MenuComponent.vue -->
<template>
  <article id="menu" class="main__article menu">
    <h2 class="pl-5">Our Menu</h2>
    <table class="menu__container">
      <caption class="offscreen">
        Our Tacos
      </caption>
      <thead>
        <!-- MenuHeader -->
        <tr>
          <th
            v-for="(item, index) in menuHeaders"
            :key="'menuheader' + index"
            scope="col"
            class="menu__header w-full menu-item"
          >
            {{ item.content }}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- Crunchy -->
        <tr v-for="(item, index) in crunchyItems" :key="'crunchy' + index">
          <th class="w-full menu-item menu__cr" scope="row">Crunchy</th>
          <td class="w-full menu-item">{{ item.quantity }}</td>
          <td class="w-full menu-item">{{ item.price }}</td>
        </tr>
        <!-- Soft -->
        <tr v-for="(item, index) in softItems" :key="'soft' + index">
          <th class="w-full menu-item menu__sf" scope="row">Soft</th>
          <td class="w-full menu-item">{{ item.quantity }}</td>
          <td class="w-full menu-item">{{ item.price }}</td>
        </tr>
      </tbody>
      <tr>
        <td class="w-full menu-item menu__cs rounded-bl-[15px] rounded-br-[15px]" colspan="3">
          Chips &amp; Salsa $2
        </td>
      </tr>
    </table>

    <p class="center">
      <a href="#">Back To Top</a>
    </p>
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

<style scoped>
/* || MENU */
thead,
tbody,
/* tfoot, */
tr {
  display: contents;
}

.menu__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'hd1 hd2 hd3'
    'cr crq1 crp1'
    'cr crq2 crp2'
    'cr crq3 crp3'
    'sf sfq1 sfp1'
    'sf sfq2 sfp2'
    'sf sfq3 sfp3'
    'cs cs   cs';
  gap: 0.1em;
  margin-bottom: 1em;
  margin-left: 20px;
  margin-right: 20px;
}

.menu__cr {
  grid-area: cr;
}

.menu__sf {
  grid-area: sf;
}

.menu__cs {
  grid-area: cs;
}

.menu__cr,
.menu__sf,
.menu__cs,
.menu__header {
  color: var(--HIGHLIGHT-COLOR);
  font-weight: bold;
  height: 100%;
  display: grid;
  place-content: center;
}

/* .menu__header ,
.menu__item{
  width: 100%;
  padding: 1em;
  border: medium ridge var(--BORDER-COLOR);
} */

/* .menu__item{
  display: grid;
  place-content: center;
} */

thead th:first-child {
  border-top-left-radius: var(--BORDER-RADIUS);
}

thead th:last-child {
  border-top-right-radius: var(--BORDER-RADIUS);
}

/* tfoot td {
  border-bottom-left-radius: var(--BORDER-RADIUS);
  border-bottom-right-radius: var(--BORDER-RADIUS);
}  */

/* .menu__h2 {
  padding-left: 20px;
} */
</style>
