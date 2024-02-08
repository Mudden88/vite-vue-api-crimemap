<template>
  <div class="enter">
    <div class="rl" @click="onClick">
      <h1>
        VÄLKOMMEN
      </h1>
      <p>Tryck för att komma vidare</p>
    </div>

  </div>
</template>

<script>

export default {
  methods: {
    onClick() {
      this.$router.push('/Home')


    }
  }
}

</script>


<style scoped>
.enter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80dvh;
}

.rl {
  border: 1px solid aqua;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
}

.rl:hover {
  border: solid 2px rgb(250, 251, 251);
  filter: drop-shadow(0.2rem 0.2rem 0.75rem white);
}

h1,
p {
  color: aliceblue;
}
</style>
