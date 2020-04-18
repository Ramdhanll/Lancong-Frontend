<template>
  <div class="navbarLancong">
    <!-- Navbar -->
    <div class="container">
        <nav class="row navbar navbar-expand-lg navbar-light bg-white">
            <router-link :to="{name: 'Home'}" class="navbar-brand mt-3">
                <img src="images/Logo Erdev.png" alt="Logo Erdev">
            </router-link>
            <button class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navb"
            >
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navb">
                <ul class="navbar-nav ml-auto mr-3 mt-3">
                    <li class="nav-item mx-md-2">
                        <a href="#" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item mx-md-2">
                        <a href="#" class="nav-link">Paket Travel</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Services</a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Link</a>
                            <a href="#" class="dropdown-item">Link</a>
                            <a href="#" class="dropdown-item">Link</a>
                        </div>
                    </li>
                    <li class="nav-item mx-md-2">
                        <a href="#" class="nav-link">Testimonial</a>
                    </li>
                </ul>

                    <!-- Mobile Button -->
                    <form class="form-inline d-sm-block d-md-none">
                        <router-link v-if="!loggedIn" :to="{name: 'Login'}">
                            <button class="btn btn-login my-2 my-sm-0">
                                Masuk
                            </button>
                        </router-link>
                        <router-link v-if="loggedIn" :to="{name: 'Logout'}">
                            <button class="btn btn-login my-2 my-sm-0">
                                Logout
                            </button>
                        </router-link>
                    </form>

                    <!-- Dekstop Button -->
                        <router-link v-if="!loggedIn" :to="{name: 'Login'}">
                            <button class="btn btn-login btn-navbar-right my-2 my-sm-0 px-4">
                                <span class="mt-2">Masuk</span>
                            </button>
                        </router-link>
                            <button v-if="loggedIn" @click="logout" class="btn btn-login btn-navbar-right my-2 my-sm-0 px-4">
                                <span class="mt-2">Logout</span>
                            </button>

            </div>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
    name: 'navbarLancong',
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        }
    },
    methods: {
        logout(){
            this.$store.dispatch('destroyToken')
                .then(() => {
                    this.$router.push({name: 'Login'})
                })
                .catch(e => console.log(e));
        }
    },
    
}
</script>

<style scoped>

</style>
