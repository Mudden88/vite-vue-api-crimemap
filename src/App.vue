<script setup>

import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="container">
    <Nav />
    <RouterView @custom-event="handleEvent" />

    <Footer />
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  components: {
    Home
  },
  data() {
    return {
      eventId: null
    }
  },
  methods: {
    handleEvent(id) {
      console.log('Klickad händelse har id: ', id)
      this.eventId = id
    }
  }
}


</script>

<style>
.container {
  background-color: rgb(62, 62, 62);
}
</style>
