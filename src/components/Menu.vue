<!-- MenuComponent.vue -->
<template>
  <article id="menu" class="main__article menu">
    <h2 class="menu__h2">Our Menu</h2>
    <table class="menu__container">
      <caption class="offscreen">
        Our Tacos
      </caption>
      <thead>
        <tr>
          <th class="menu__header" scope="col">Tacos</th>
          <th class="menu__header" scope="col">Quantity</th>
          <th class="menu__header" scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <!-- Crunchy -->
        <tr v-for="(item, index) in crunchyItems" :key="'crunchy' + index">
          <th class="menu__item menu__cr" scope="row" :rowspan="item.rowspan">{{ item.type }}</th>
          <td class="menu__item">{{ item.quantity }}</td>
          <td class="menu__item">{{ item.price }}</td>
        </tr>
        <!-- Soft -->
        <tr v-for="(item, index) in softItems" :key="'soft' + index">
          <th class="menu__item menu__sf" scope="row" :rowspan="item.rowspan">{{ item.type }}</th>
          <td class="menu__item">{{ item.quantity }}</td>
          <td class="menu__item">{{ item.price }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="menu__item menu__cs" colspan="3">Chips &amp; Salsa $2</td>
        </tr>
      </tfoot>
    </table>

    <p class="center">
      <a href="#">Back To Top</a>
    </p>
  </article>
</template>

<script lang="ts" setup>
// Define your data
const crunchyItems = [
  { type: 'Crunchy', rowspan: 3, quantity: 1, price: '$1.50' },
  { type: 'Crunchy', rowspan: 3, quantity: 2, price: '$2.50' },
  { type: 'Crunchy', rowspan: 3, quantity: 3, price: '$3.25' },
]

const softItems = [
  { type: 'Soft', rowspan: 3, quantity: 1, price: '$2.00' },
  { type: 'Soft', rowspan: 3, quantity: 2, price: '$3.50' },
  { type: 'Soft', rowspan: 3, quantity: 3, price: '$4.50' },
]
</script>

<style scoped>
/* || MENU */

thead,
tbody,
tfoot,
tr {
  display: contents;
}

.menu__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'hd1 hd2 hd3'
    'cr cr1 cr1p'
    'cr cr2 cr2p'
    'cr cr3 cr3p'
    'sf sf1 sf1p'
    'sf sf2 sf2p'
    'sf sf3 sf3p'
    'cs cs cs';
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

.menu__header,
.menu__item {
  width: 100%;
  padding: 1em;
  border: medium ridge var(--BORDER-COLOR);
}

.menu__item {
  display: grid;
  place-content: center;
}

thead th:first-child {
  border-top-left-radius: var(--BORDER-RADIUS);
}

thead th:last-child {
  border-top-right-radius: var(--BORDER-RADIUS);
}

tfoot td {
  border-bottom-left-radius: var(--BORDER-RADIUS);
  border-bottom-right-radius: var(--BORDER-RADIUS);
}

.menu__h2 {
  padding-left: 20px;
}
</style>
