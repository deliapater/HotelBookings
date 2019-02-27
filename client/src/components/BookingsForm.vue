<template lang="html">
	<form id="bookings-form" v-on:submit.prevent="addBooking" v-model="newBooking">
		<h2>Create a New Booking</h2>
		<div class="formWrap">
			<label for="name">Full Name:</label>
			<input v-model="newBooking.name" type="text" id="name" required />
		</div>
		<div class="formWrap">
			<label for="email">Email Adress:</label>
			<input v-model="newBooking.email" type="text" id="email" required />
		</div>
		<div class="formWrap">
			<label for="checked">Checked in:</label><br>
      <input v-on:click="newBooking.check" type="checkbox" name="yes" value=true > 
		</div>

		<input type="submit" value="Save" id="save"/>
	</form>
</template>

<script>
import { eventBus } from '../main.js'
export default {
	name: "BookingsForm",
	data(){
		return {
			newBooking: {
				name: "",
				email: "",
				cheked: null
			}
		}
	},
	methods: {
		addBooking(){
			fetch('http://localhost:3000/api/bookings', {
				method: 'POST',
				body: JSON.stringify(this.newBooking),
				headers: { 'Content-Type': 'application/json' }
			})
			.then(response => response.json())
			.then(data => eventBus.$emit('booking-added', data))
		}
	}
}
</script>
