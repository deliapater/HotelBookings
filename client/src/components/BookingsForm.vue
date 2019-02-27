<template lang="html">
	<form id="bookings-form" v-on:submit.prevent="addBooking" v-model="newBooking">
		<h2>Create a New Booking</h2>
		<div class="formWrap">
			<label for="name">Full Name:</label>
			<input v-model="newBooking.name" type="text" id="name" required />
		</div>
		<div class="formWrap">
			<label for="email">Email Address:</label>
			<input v-model="newBooking.email" type="text" id="email" required />
		</div>
		<div class="formWrap">
			<label for="checked">Checked in:</label><br>
      <input v-model="newBooking.checked_in" type="checkbox" name="yes" value=true >
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
				cheked_in: null
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

<style lang="css" scoped>

  h2 {
		margin: 10px 0;
		padding: 0;
	}
	#bookings-form {
		width: 50%;
		margin: 0 auto;
		padding: 20px;
		margin-bottom: 40px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
	}

	label {
		min-width: 100px;
		display: inline-block;
	}
	.formWrap {
		margin-bottom: 10px;
	}

  #save {
  	color: #fff;
  	border-radius: 5%;
  	font-size: 16px;
  	padding: 5px;
  	margin-top: 10px;
  	background: #42f4d7;
  }
</style>
