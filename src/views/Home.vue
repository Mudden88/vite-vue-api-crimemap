<template>
  <div class="cardWrapper">

    <p class="pfirst">Välkommen till <b>Brottsplatskartan.</b> Tryck på en händelse för att visa karta.</p>

    <!-- värdet i computed renderas om if villkoret är uppfyllt: -->
    <div class="eventCounter pfirst" v-if="events.length > 0">Antal händelser: {{ events.length }}</div>

    <!-- for loop, renderar element med önskad info från API -->
    <ul v-for="event in events" :key="event.id">

      <!-- onClick event för att rendera en bild på en karta från API -->
      <div class="card" @click="selectEvent(event)">
        <p class="id">Id: {{ event.id }}</p>

        <hr>
        <p class="sText">
          {{ event.pubdate_iso8601 }}
        </p>
        <p>
          {{ event.title_location }},
          {{ event.title_type }},

        </p>
        <p>{{ event.description }}</p>

        <p>{{ event.content_teaser }}</p>
        <a :href="`${event.permalink}`" target="_blank">Läs mer...</a>
      </div>
    </ul>
    <!-- Visar att datan håller på att laddas in så länge if villkoret är true, villkoret ändras till false i .finally i axios fetchen:  -->
    <div class="loading" v-if="loading == true">
      <img src="/assets/Spinner-1s-200px.gif" alt="Image by Pngtree" width="80" height="80">
    </div>
  </div>
  <div class="imgMap" v-if="selectedImage">

    <!-- bind src till api data som innehåller länk -->
    <img class="Image" :src="selectedImage.image" alt="karta">
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      events: [],
      loading: true,
      selectedImage: null,


    }
  },

  methods: {
    selectEvent(event) {
      this.selectedImage = event

      this.$emit('custom-event', event.id)
    }
  },

  mounted() {

    setTimeout(() => {
      axios.get('https://brottsplatskartan.se/api/events?limit=25&app=mmITHS')
        .then((response) => {
          this.events = response.data.data
        })
        .finally(() => {
          this.loading = false
        })
    }, "2000")
  },
  computed: {
    eventCounter() {
      return this.events.length
    }
  },
  emits: ['custom-event']

}


</script>

<style>
.card {
  width: 20em;
  height: fit-content;
  background-color: whitesmoke;
  padding: 10px;
  filter: drop-shadow(5px 5px 5px rgba(9, 0, 0, 0.35));

  cursor: pointer;
}

.id {
  font-size: small;
}

.cardWrapper {
  width: 50vw;
}

.loading {
  margin: 10px 3.5rem;
  display: flex;
  padding: 20px;

}

hr {
  color: rgba(128, 128, 128, 0.347);
}

.Image {
  max-width: 400px;
  max-height: 250px;
  border: 20px solid rgba(0, 0, 255, 0.156);
}

.imgMap {
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  min-width: fit-content;
  height: fit-content;
  background-color: whitesmoke;
  position: fixed;
  top: 40%;
  left: 30%;
  filter: drop-shadow(5px 5px 5px rgba(9, 0, 0, 0.35));
}

.pfirst {
  margin-left: 10px;
  max-width: 20em;
  color: blanchedalmond;
}

.sText {
  font-size: small;
}
</style>
