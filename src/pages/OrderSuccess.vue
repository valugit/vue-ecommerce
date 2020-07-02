<template>
  <p>
    Félicitations pour votre commande, vous ne serez jamais
    livrés car ce site est fictif !
  </p>
</template>

<script>
export default {
  name: 'OrderSuccess',
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.$store.dispatch('removeOrder')
  },
  methods: {
    init() {
      if (!this.$store.getters.order)
        this.$router.push({ name: 'basket' })
    },
  }
}
</script>
<style scoped>
p {
  margin: 100px;
}
</style>