<template>
  <div>
    <h3 class="eventsTitle">Visa händelser efter stad</h3>
    <p class="pfirst">Klicka på händelser för att visa karta</p>
    <label class="pfirst">Stad:
      <select v-model="selectedOpt">
        <option :value="null" disabled>Välj en stad</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}</option>
      </select></label>
    <p class="pfirst">Du har valt: {{ selectedOpt }}</p>
    <div class="cardWrapper">


      <ul v-for="event in events" :key="event.id">
        <div class="card" @click="selectEvent(event)">
          <p class="id">Id: {{ event.id }}</p>
          <hr>
          <p class="sText">
            {{ event.pubdate_iso8601 }}
          </p>
          <p>{{ event.title_location }},
            {{ event.title_type }}
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

      <img class="Image" :src="selectedImage.image" alt="karta">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      events: [],
      loading: true,
      selectedOpt: null,
      selectedImage: null,
      options: [
        { value: 'Göteborg', label: 'Göteborg' },
        { value: 'Stockholm', label: 'Stockholm' },
        { value: 'Malmö', label: 'Malmö' },
        { value: 'Jönköping', label: 'Jönköping' },
        { value: 'Uppsala', label: 'Uppsala' },
        { value: 'Kiruna', label: 'Kiruna' },
        { value: 'Helsingborg', label: 'Helsingborg' },
        { value: 'Arvika', label: 'Arvika' },
        { value: 'Bollnäs', label: 'Bollnäs' },
        { value: 'Karlstad', label: 'Karlstad' },
        { value: 'Åmål', label: 'Åmål' },
        { value: 'Mölndal', label: 'Mölndal' }
      ]
    }
  },
  mounted() {

    //Sorterar options i bokstavsordning
    this.options.sort((a, b) => a.label.localeCompare(b.label, 'sv'))
    //setTimeout för att fördröja svaret något
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

  watch: {
    selectedOpt(newOption) {
      this.fetchEvents(newOption)
    }

  },

  methods: {
    fetchEvents(city) {
      this.loading = true
      const area = city ? encodeURIComponent(city) : ''
      axios.get(`https://brottsplatskartan.se/api/events/?location=${area}`)
        .then((response) => {
          this.events = response.data.data
        })
        .finally(() => {
          this.loading = false
        })
    },
    selectEvent(event) {
      this.selectedImage = event

      this.$emit('custom-event', event.id)
    },
  },
  emits: ['custom-event']
}


</script>

<style>
.eventsTitle {
  margin-left: 10px;
  color: blanchedalmond;
}
</style>
