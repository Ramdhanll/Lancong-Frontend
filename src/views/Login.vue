<template>
  <div id="app">
    <main class="login-container">
      <div class="container">
        <div class="row page-login d-flex align-items-center">
          <div class="section-left col-12 col-md-6">
            <h1 class="mb-4">We explore the new <br>life much better</h1>
            <img src="images/login-images.png" alt="" class="w-75 d-none d-sm-flex"> <!--d-none dilayar kecil gambar gaada -->
          </div>
          <div class="section-right col-12 col-md-4">
            <div class="card">
              <div class="card">
                <div class="card-body">
                  <div class="text-center">
                    <img src="images/logo.png" alt="" class="w-50 mb-4">
                  </div>
                  <form action="#" @submit.prevent="login">
                    <div class="form-group">
                      <label for="email">Email Address</label>
                      <input type="email"
                        class="form-control" name="email" id="email" aria-describedby="email" v-model="email">
                        <small v-if="errors.email" class="text-danger">{{ errors.email[0] || null }}</small>

                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password"
                        class="form-control" name="password" id="password" aria-describedby="password" v-model="password">
                        <small v-if="errors.password" class="text-danger">{{ errors.password[0] || null}}</small>

                    </div>
                    <div class="form-group form-check">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                        Remember Me
                      </label>
                    </div>
                    <button class="btn btn-login btn-block">
                      Sign In
                    </button>
                    <router-link :to="{name: 'Register'}">
                      <p class="text-center mt-4">
                        <a href="#">Register</a>
                      </p>
                    </router-link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
  name:'login',
  data(){
    return {
      email : '',
      password : '',
      errors: []
    }
  },
  methods: {
    login(){
      this.$Progress.start();
      this.$store.dispatch('retriveToken', {
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$Progress.finish();
        this.$Toast.fire({
          icon: 'success',
          title: 'Sign in success'
        })
        this.$router.push({name: 'Details'})
      })
      .catch(e => {
        this.$Progress.fail();
        this.$Toast.fire({
          icon: 'error',
          title: 'The given data was invalid'
        })
        this.errors = e.response.data.errors;
        
      })
    }
  },

}
</script>

<style scoped>
.login-container {
  margin-top: -60px !important;
}

.form-group {
  text-align: left;
}
</style>