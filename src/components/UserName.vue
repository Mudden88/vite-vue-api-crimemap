<template>
  <div class="pfirst">
    <label>Skriv in ditt namn:
      <div>
        <input type="text" v-model="payload">
        <button @click="setUser">Skicka</button>
      </div>
    </label>
  </div>
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

.pfirst {
  margin-top: 10px;
}
</style>
