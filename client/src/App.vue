<template>
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm.vue';
import BookingsGrid from './components/BookingsGrid.vue';
import { eventBus } from './main.js';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    BookingsForm,
    BookingsGrid
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking =>
    this.bookings.push(booking));

    eventBus.$on('booking-deleted', id =>
    this.deleteBooking(id));

},
methods: {
  fetchData(){
    fetch("http://localhost:3000/api/bookings")
    .then(res => res.json())
    .then(bookings => this.bookings = bookings);
  },
  deleteBooking(id){
    const index = this.bookings.findIndex((booking) => {
      return booking._id === id
    });
    this.bookings.splice(index, 1);
  },

}
}
</script>

<style>

body {
  font-family: 'Futura', sans-serif;
  width: 80%;
  margin: 0 auto;
  color: #0E0B16;
  margin-top: 20px
}

h1, h2 {
  color: #42f4d7;
  font-family: 'Futura', sans-serif;
}

h3 {

}
</style>
