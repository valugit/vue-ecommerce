<template>
  <div>
    <h2>Informations de livraison</h2>
    <form>
      <input :class="{ 'error': firstName.error }" v-model="firstName.value" type="text" placeholder="Prénom" required>
      <input :class="{ 'error': lastName.error }" v-model="lastName.value" type="text" placeholder="Nom" required>
      <input :class="{ 'error': email.error }" v-model="email.value" type="email" placeholder="exemple@domain.fr" required>
      <input :class="{ 'error': phone.error }" v-model="phone.value" type="tel" placeholder="0123456789" required>
      <input :class="{ 'error': address.error }" v-model="address.value" type="text" placeholder="Adresse" required>
      <input :class="{ 'error': zipcode.error }" v-model="zipcode.value" type="text" placeholder="Code postal" pattern="[0-9]{5}" required>
      <input :class="{ 'error': city.error }" v-model="city.value" type="text" placeholder="Ville">
      <input :class="{ 'error': country.error }" v-model="country.value" type="text" placeholder="Pays">
      <button type="button" @click="order">
        Valider la commande
      </button>
    </form>
  </div>
</template>

<script>
import { matches, isEmail, isMobilePhone, isPostalCode } from 'validator'

export default {
  name: 'Order',
  data() {
    return {
      firstName: {
        value: '',
        error: false
      },
      lastName: {
        value: '',
        error: false
      },
      email: {
        value: '',
        error: false
      },
      phone: {
        value: '',
        error: false
      },
      address: {
        value: '',
        error: false
      },
      zipcode: {
        value: '',
        error: false
      },
      city: {
        value: '',
        error: false
      },
      country: {
        value: '',
        error: false
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (!this.$store.getters.basket.length)
        this.$router.push({ name: 'basket' })
    },
    order() {
      this.firstName.error = !matches(this.firstName.value, /^[a-z]+(([',. -][a-z ])?[a-z]*)*$/i)
      this.lastName.error = !matches(this.lastName.value, /^[a-z]+(([',. -][a-z ])?[a-z]*)*$/i)
      this.email.error = !isEmail(this.email.value)
      this.phone.error = !isMobilePhone(this.phone.value, 'fr-FR')
      this.address.error = !matches(this.address.value, /^\d{1,5}\s?(\D+\s)+\D+$/i)
      this.zipcode.error = !isPostalCode(this.zipcode.value, 'FR')
      this.city.error = !matches(this.city.value, /^[a-z]+(([',. -][a-z ])?[a-z]*)*$/i)
      this.country.error = !matches(this.country.value, /^[a-z]+(([',. -][a-z ])?[a-z]*)*$/i)

      if (!this.firstName.error && !this.lastName.error && !this.email.error && !this.phone.error && !this.address.error && !this.zipcode.error && !this.city.error && !this.country.error) {
        this.$store.dispatch('order')
        this.$router.push({ name: 'success' })
      }
    }
  }
}
</script>
<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
}
input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #42b983;
  padding: 10px;
  margin-bottom: 15px;
}
button {
  border: 1px solid #42b983;
  padding: 10px;
  margin-top: 10px;
  width: auto;
}
.error {
  border-color: red;
}
</style>