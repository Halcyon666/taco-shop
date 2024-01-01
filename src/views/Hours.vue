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
        <!-- Your menu items here -->
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

<script setup>
// You can import any dependencies or define variables here
</script>

<style scoped>
/* Add your styles here */
</style>
