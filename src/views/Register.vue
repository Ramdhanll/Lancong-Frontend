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
                  <form action="#" @submit.prevent="register">
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text"
                        class="form-control" name="name" id="name" aria-describedby="name" v-model="name">
                        <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
                    </div>
                    <div class="form-group">
                      <label for="email">Email Address</label>
                      <input type="email"
                        class="form-control" name="email" id="email" aria-describedby="email" v-model="email">
                        <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>

                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password"
                        class="form-control" name="password" id="password" aria-describedby="password" v-model="password">
                        <small v-if="errors.password" class="text-danger">{{ errors.password[0] }}</small>

                    </div>
                    <div class="form-group">
                      <label for="confirm_password">Confirm Password</label>
                      <input type="password"
                        class="form-control" name="confirm_password" id="confirm_password" aria-describedby="confirm_password" v-model="password_confirmation">
                    </div>
                    <button class="btn btn-login btn-block">
                      Register
                    </button>
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
      name: '',
      email: '',
      password : '',
      password_confirmation: '',
      errors : []
    }
  },
  methods: {
    register() {
      this.$Progress.start();
      this.$store.dispatch('register', {
        name : this.name,
        email : this.email,
        password : this.password,
        password_confirmation : this.password_confirmation
      })
      .then(() => {
        this.$Progress.finish();
        this.$Toast.fire({
          icon: 'success',
          title: 'Register success'
        })
        this.$router.push({name: 'Login'})
      })
      .catch(e => {
        this.$Toast.fire({
          icon: 'error',
          title: 'Register failed'
        })
        this.$Progress.fail();
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