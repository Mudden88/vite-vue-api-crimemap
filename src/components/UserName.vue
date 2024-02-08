<template>
  <label class="pfirst">Skriv in ditt namn:
    <input type="text" v-model="payload">
    <button @click="setUser">Skicka</button>
  </label>
</template>

<script>
export default {
  data() {
    return {
      payload: this.yourName
    }
  },
  methods: {
    setUser() {
      this.$emit('new-user', this.payload)
    }
  },
  props: {
    yourName: {
      type: String,
      validator: function (yourName) {
        if (typeof yourName === 'string' && yourName !== null) {
          return true
        }
        return false

      }
    }
  },
  emits: ['new-user']
}
</script>

<style scoped>
input {
  width: 10em;
}
</style>
