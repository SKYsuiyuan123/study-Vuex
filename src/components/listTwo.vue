<template>
  <div id="listTwo">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.id">
        <span>{{product.name}}</span>
        <span class="price">$ {{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    products () {
      return this.$store.state.products
    },
    ...mapGetters(['saleProducts'])
  }
}
</script>

<style scoped>
#listTwo {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#listTwo ul {
  list-style: none;
  padding: 0;
}
#listTwo ul li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>
