<template>
  <div class="product">
    <img :src="product.src" alt="">
    <div>
      <div class="productInfos">
        <h3>{{product.title}}</h3>
        <span>{{product.vendor}}</span>
        <span>{{product.price}}&euro;</span>
      </div>
      <div class="productQuantity">
        <input v-model="quantity" type="number" min="1">
        <button @click="addToBasket">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      product: {},
      quantity: 1
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.product = this.$store.getters.getProductById(parseInt(this.$route.params.id))
    },
    addToBasket() {
      this.$store.dispatch('addToBasket', { id: parseInt(this.$route.params.id), quantity: parseInt(this.quantity) })
    }
  }
}
</script>

<style scoped>
.product {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px;
}
img {
  border: 1px solid #42b983;
  padding: 5px;
}
.product>div {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.productInfos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.productQuantity {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
input, button {
  border: 1px solid #42b983;
  padding: 5px;
}
input {
  margin-top: 10px;
  margin-bottom: 5px;
}
button {
  cursor: pointer;
}
</style>