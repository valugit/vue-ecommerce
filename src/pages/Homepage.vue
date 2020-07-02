<template>
    <ul v-if="products.length">
      <li v-for="(product, index) in products" :key="index">
        <button @click="goToProduct(index)">
          <ProductListItem :product="product" />
        </button>
      </li>
    </ul>
</template>

<script>
import ProductListItem from '../components/ProductListItem.vue'

export default {
  name: 'Home',
  components: {
    ProductListItem
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.products = this.$store.getters.products
  },
  methods: { 
    goToProduct(id) {
        this.$router.push({ name: 'product', params: { id: id } })
    }
  }
}
</script>

<style scoped>
ul {
  width: 100%;
  padding: 0;
  list-style-type: none;
}
li {
  margin-bottom: 10px;
}
button {
  width: 100%;
  border: 1px solid #42b983;
  background: none;
  cursor: pointer;
  padding: 0;
  height: auto;
}
button:hover {
  color: #42b983;
  text-decoration: underline;
}
button:focus {
  outline: none;
}
</style>