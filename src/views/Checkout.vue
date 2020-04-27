<template>
	<div id="app">
		<!-- Navbar -->
		<div class="container">
				<nav class="row navbar navbar-expand-lg navbar-light bg-white">
						<div class="navbar-nav ml-auto mr-auto mr-sm-auto mr-lg-0 mr-md-auto">
								<router-link :to="{name: 'Home'}" class="navbar-brand">
										<img src="images/Logo Erdev.png" alt="Logo">
								</router-link>
						</div>
						<ul class="navbar-nav mr-auto d-none d-lg-block">
								<li>
										<span class="text-muted">
												| &nbsp; Beyond the explored of the world
										</span>
								</li>
						</ul>
				</nav>
		</div>

		<main>
				<section class="section-details-header"></section>
				<section class="section-details-content">
						<div class="container">
								<div class="row">
										<div class="col p-0">
												<nav>
														<ol class="breadcrumb">
																<li class="breadcrumb-item">
																		Paket Travel
																</li>
																<li class="breadcrumb-item">
																		Details
																</li>
																<li class="breadcrumb-item active">
																		Checkout
																</li>
														</ol>
												</nav> 
										</div>
								</div>
								<div class="row">
										<div class="col-lg-8 pl-lg-0">
												<div class="card card-details">
														<h1>
																Who is Going ?
														</h1>
														<p>
																Trip to Ubud, Bali, Indonesia
														</p>
														<div class="attendee">
																<table class="table table-responsive-sm text-center">
																		<thead>
																				<tr>
																						<td>Picture</td>
																						<td>Name</td>
																						<td>Nationality</td>
																						<td>VISA</td>
																						<td>Passport</td>
																						<td></td>
																				</tr>
																		</thead>
																		<tbody>
																			<tr v-if="checkout < 0">
																				<td colspan="6">Kosong</td>
																			</tr>
																				<tr v-for="(item, index) in checkout.details" :key="index">
																						<td>
																								<img :src="'https://ui-avatars.com/api/?name=' + item.username + '}}'" 
																								height="60px" class="rounded-circle">
																						</td>
																						<td class="align-middle">
																								{{ item.username }}
																						</td>
																						<td class="align-middle">
																								{{ item.nationality }}
																						</td>
																						<td class="align-middle">
																								{{ item.is_visa ? '30 Days' : 'N/A'}}
																						</td>
																						<td class="align-middle">
																							{{dateDetails(item.doe_passport) > dateNow ? 'Active' : 'In Active'}}
																						</td>
																						<td class="align-middle">
																								<div class="pointer" style="cursor:pointer" @click="removeMember(item.id)">
																										<img src="images/icon-remove.png">
																								</div>
																						</td>
																				</tr>
																		</tbody>
																</table>
														</div>
														<div class="member mt-3">
																<h2>Add Member</h2>
																<form class="form-inline">
																		<label for="inputUsername" class="sr-only">Name</label>
																		<input 
																		type="text"
																		name="inputUsername" 
																		class="form-control mb-2 mr-sm-2" 
																		id="inputUsername" 
																		placeholder="Username"
																		v-model="form.name"
																		>
																		<label for="nationality" class="sr-only">Nationality</label>
																		<input 
																		type="text"
																		name="nationality" 
																		class="form-control mb-2 mr-sm-2" 
																		style="width:50px"
																		id="nationality" 
																		placeholder="Nationality"
																		v-model="form.nationality"
																		>
																		<label for="inputVisa" class="sr-only">VISA</label>
																		<select name="inputVisa" id="inputVisa" class="custom-select mb-2 mr-sm-2" v-model="form.visa">
																				<option value="" selected>VISA</option>
																				<option value="1">30 Days</option>
																				<option value="0">N/A</option>
																		</select>
																		<label for="doePassport" class="sr-only">DOE Passport</label>
																		<div class="input-group mb-2 mr-sm-2">
																						<input 
																						type="date"
																						name="doePassport" 
																						class="form-control datepicker" 
																						id="doePassport" 
																						placeholder="DOE Passport"
																						v-model="form.doe_passport"
																						>
																		</div>
																		<button type="submit" class="btn btn-add-now mb-2 px-4" @click.prevent="addMember(checkout.id)">
																				Add Now
																		</button>
																</form>
																<h3 class="mt-2 mb-0">Note</h3>
																<p class="disclaimer mb-0">
																				You are only able to invite member that has registered in Erdev.
																</p>
														</div>
												</div>
										</div>
										<div class="col-lg-4">
												<div class="card card-details card-right">
														<h2>Checkout Informations</h2>
														<table class="trip-informations">
																<tr>
																		<th width="50%">Members</th>
																		<td width="50%" class="text-right">{{ checkout.details.length }}</td>
																</tr>
																<tr>
																		<th width="50%">Additional VISA</th>
																		<td width="50%" class="text-right">$ {{ checkout.additional_visa }}</td>
																</tr>
																<tr>
																		<th width="50%">Trip Price</th>
																		<td width="50%" class="text-right">$ {{ checkout.travel_package.price }} / Person</td>
																</tr>
																<tr>
																		<th width="50%">Total Price</th>
																		<td width="50%" class="text-right">$ {{ checkout.transaction_total}}</td>
																</tr>
																<tr>
																		<th width="50%">Total (+Unique)</th>
																		<td width="50%" class="text-right text-total">
																				<span class="text-blue">${{ checkout.transaction_total}},</span>
																				<span class="text-orange">{{ uniqueNumber }}</span>
																		</td>
																</tr>
														</table>
														<hr>
														<h2>Payment Instruction</h2>
														<p class="payment-instructions">
																Please complate the payment before you
																continue the trip
														</p>
														<div class="bank">
																<div class="bank-item pb-3">
																		<img src="images/IC-bank.png" class="bank-image">
																		<div class="description">
																				<h3>PT Erdev IDN</h3>
																				<p>
																						0888 0777 0666
																						<br>
																						Bank Central Asia
																				</p>
																		</div>
																		<div class="clearfix"></div>
																</div>
																<div class="bank-item pb-3">
																		<img src="images/IC-bank.png" class="bank-image">
																		<div class="description">
																				<h3>PT Erdev IDN</h3>
																				<p>
																						0811 0722 0633
																						<br>
																						Bank World Wide
																				</p>
																		</div>
																		<div class="clearfidx"></div>
																</div>
														</div>
												</div>
												<div class="join-container">
														<router-link :to="{name: 'finish'}" class="btn btn-block btn-join-now mt-3 py-2 bg-warning">
																I Have Made Payment
														</router-link>
												</div>
												<div class="text-center mt-3">
														<a href="#" class="text-muted">Cancel Booking</a>
												</div>
										</div>
								</div>
						</div>
				</section>
		</main>

		<footerLancong/>
	</div>
</template>

<script>
import footerLancong from '../components/footerLancong'

export default {
	name:'detail',
	components: {
		footerLancong
	},
	data() {
		return {
			checkout: [],
			form : {
					name : '',
					visa : '',
					doe_passport: '',
					nationality : ''

			}
		}
	},
	methods: {
		getCheckout() {
			this.$Progress.start()
			this.$store.dispatch('getCheckout')
				.then(() => {
					this.checkout = this.$store.state.checkout;
					this.$Progress.finish();
				})
				.catch((e) => {
					console.log(e)

					this.$Progres.fail();
				})
		},
		dateDetails(date) {
			return date.replace(/-/g,'');
		},
		addMember(id) {
			this.$Progress.start();
				this.$store.dispatch('addMember', {
						transactions_id : id,
						username: this.form.name,
						nationality : this.form.nationality,
						is_visa: this.form.visa,
						doe_passport: this.form.doe_passport,
				})
				.then(() => {
						this.$Fire.$emit('addMember');
						this.$Progress.finish();
				})
				.catch(e => console.log(e));
		},
		removeMember(id) {
			this.$Progress.start();
			this.$store.dispatch('removeMember', id)
				.then(() => {
					this.$Fire.$emit('removeMember');
				})
				.catch((e) => {
					console.log(e);
				})
		}
	},
	computed: {
		dateNow() {
			var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
			return utc;
		},
		uniqueNumber() {
			return Math.floor(Math.random() * 100);
		}
	},
	mounted() {
		this.getCheckout();
	},
	created() {
		this.$Fire.$on('addMember', () => this.getCheckout());
		this.$Fire.$on('removeMember', () => this.getCheckout());
	}
}
</script>
<style>

</style>