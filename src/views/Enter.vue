<template>
  <div class="enter">
    <RouterLink class="rl" to="/Home">
      <h1>
        VÄLKOMMEN
      </h1>
      <p>Tryck för att komma vidare</p>
    </RouterLink>
  </div>
</template>


<style scoped>
.enter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80dvh;
}

.rl {
  border: 1px solid aqua;
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
