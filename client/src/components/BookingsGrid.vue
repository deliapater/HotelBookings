
<template lang="html">
	<div id="bookingsGrid">
		<div class="booking" v-for="booking in bookings">
			<h3>Full Name: {{ booking.name }}</h3>
			<p>Email Address: {{ booking.email }}</p>
      <p>Checked in: {{ booking.checked_in ? "Yes":"No" }}</p>

			<button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
	name: 'BookingsGrid',
	props: ['bookings'],
	methods: {
		deleteBooking(id){
			fetch('http://localhost:3000/api/bookings/' + id, {
				method: 'DELETE'
			}).then(() => eventBus.$emit('booking-deleted', id))
		}
	}
}

</script>

<style lang="css" scoped>
#bookingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;

}

h2 {
	padding: 0;
	margin: 0;
}

.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
}

button {
	color: #fff;
	border-radius: 5%;
	font-size: 16px;
	padding: 5px;
	margin-top: 10px;
	background: #42f4d7;
}
</style>
