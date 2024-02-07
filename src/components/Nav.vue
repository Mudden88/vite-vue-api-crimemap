<template>
  <div>
    <nav>
      <ul>
        <li class="listitem">
          <RouterLink to="/"><a>Start</a></RouterLink>

          <div class="vl"></div>
        </li>
        <li class="listitem">
          <RouterLink to="/Home"><a>Händelser</a></RouterLink>

          <div class="vl"></div>
        </li>
        <li class="listitem">
          <RouterLink to="/Events"><a>Sök</a></RouterLink>
        </li>
      </ul>
      <h1 class="title">Brottsplatskartan</h1>
    </nav>
  </div>
</template>


<style>
nav {
  margin-top: 0;
  background-color: rgb(42, 42, 42);
  z-index: 1;
  height: 5em;
  width: 100vw;
  display: flex;

}

.title {
  margin-left: 5em;
  color: whitesmoke;
  filter: drop-shadow(0 0 0.7rem);
}

.listitem {
  display: inline-flex;
  list-style-type: none;
}

a {

  padding: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: grey;
  border-radius: 10px;
}

a:hover {
  color: rgb(77, 77, 77);
}

.vl {
  border-left: 2px solid rgba(128, 128, 128, 0.25);
  height: 2.5em;
  margin-right: 10px;
}
</style>
