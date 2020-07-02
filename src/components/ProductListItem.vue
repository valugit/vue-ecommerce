<template>
  <div class="productItem">
    <div>
      <img :src="product.src" alt="">
    </div>
    <h3>{{product.title}}</h3>
    <span>{{product.vendor}}</span>
    <span>{{product.price}}&euro;</span>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    product: Object
  }
}
</script>

<style scoped>
.productItem {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.productItem>* {
  flex: 1;
}
</style>