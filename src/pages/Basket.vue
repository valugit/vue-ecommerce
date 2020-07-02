<template>
  <div v-if="basket.length">
    <ul>
      <li v-for="(item, index) in basket" :key="index">
        <div class="itemInfos">
          <img :src="products[item.id].src" alt="">
          <span>{{products[item.id].title}}</span>
          <span>{{products[item.id].vendor}}</span>
        </div>
        <span class="itemTotalPrice">{{totalPriceByItem(products[item.id].price, item.quantity)}}&euro;</span>
        <div class="itemQuantity">
          <button class="minus" v-if="item.quantity > 1" @click="decrementQuantity(item.id)">&minus;</button>
          <span>{{item.quantity}}</span>
          <button class="plus" @click="incrementQuantity(item.id)">&plus;</button>
          <button @click="removeFromBasket(index)">&#x02298;</button>
        </div>
      </li>
    </ul>
    <div class="order">
      <div class="total">
        <span>Total:</span>
        <span>{{totalPrice()}}&euro;</span>
      </div>
      <button @click="goToOrder">
        Passer commande
      </button>
    </div>
  </div>
  <div v-else class="empty">
    <p>You don't have anything in your basket yet.</p>
  </div>
</template>

<script>
export default {
  name: 'Basket',
  data() {
    return {
      products: [],
      basket: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.products = this.$store.getters.products
      this.basket = this.$store.getters.basket
    },
    incrementQuantity(id) {
      this.$store.dispatch('incrementQuantity', id)
    },
    decrementQuantity(id) {
      this.$store.dispatch('decrementQuantity', id)
    },
    totalPriceByItem(price, quantity) {
      return Math.round((price * quantity + Number.EPSILON) * 100) / 100
    },
    totalPrice() {
      let total = 0
      for (let i = 0; i < this.basket.length; i++) {
        total += this.totalPriceByItem(this.products[this.basket[i].id].price, this.basket[i].quantity)
      }
      return Math.round(((total + Number.EPSILON) * 100) / 100)
    },
    removeFromBasket(index) {
      this.$store.dispatch('removeFromBasket', index)
    },
    goToOrder() {
      if (this.basket.length)
        this.$router.push({ name: 'order' })
    }
  }
}
</script>

<style scoped lang="scss">
main {
  &>div {
    width: 100%;
  }
}
.empty {
  margin: 30px;
}
ul {
  width: 100%;
  padding: 0px;
  padding-bottom: 25px;
  list-style-type: none;
  border-bottom: 1px solid #42b983;


  li {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 1px solid #42b983;
    width: 100%;
    margin-bottom: 10px;
    padding: 20px;

    &>* {
      flex: 1;
    }
  }
}
.itemInfos {
  display: flex;
  justify-content: space-between;
  align-items: center;

  * {
    flex: 1;
    max-width: 33%;
    margin: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.itemTotalPrice {
  display: flex;
  justify-content: center;
  align-items: center;
}
.itemQuantity {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &>* {
    margin-left: 10px;

    &:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      margin-left: 50px;
      padding: 5px;
      color: red;
      font-size: 30px;
    }
  }
}
.minus, .plus {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #42b983;
  border-radius: 50%;
  font-size: 20px;
  color: #42b983;
  width: 25px;
  height: 25px;
}
.order {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    border: 1px solid #42b983;
    background: none;
    cursor: pointer;
    padding: 10px;
    height: auto;
  }
}
.total {
  margin-right: 30px;
  font-size: 20px;

  span {
    margin-right: 8px;
  }
}
button {
  cursor: pointer;
}
</style>