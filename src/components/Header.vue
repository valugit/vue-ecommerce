<template>
  <header>
    <button @click="goToHome">
      <h1>Mon E-Commerce</h1>
    </button>
    
    <button @click="goToBasket">
      Panier &lpar;{{getBasketLength}}&rpar;
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    getBasketLength() {
        return this.$store.getters.getBasketLength;
    }
  },
  methods: {
    goToBasket() {
      if (this.$route.name !== 'basket') this.$router.push({ name: 'basket'})
    },
    goToHome() {
      if (this.$route.name !== 'home') this.$router.push({ name: 'home'})
    }
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #42b983;
  height: 8vh;
}
h1 {
  margin: 0;
}
button {
  color: #42b983;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 10px;
  height: auto;
}
button:hover {
  color: white;
  text-decoration: underline;
}
button:focus {
  outline: none;
}
</style>
