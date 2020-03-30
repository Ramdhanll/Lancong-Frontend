<template>
  <div id="app">
     <div class="container">
        <nav class="row navbar navbar-expand-lg navbar-light bg-white">
            <div class="navbar-nav ml-auto mr-auto mr-sm-auto mr-lg-0 mr-md-auto">
                <a href="index.html" class="navbar-brand">
                    <img src="images/Logo Erdev.png" alt="Logo">
                </a>
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
        <section class="section-success d-flex align-item-center">
            <div class="col text-center">
                <img src="images/IC-success.png" class="mt-5">
                <h1>Yay! Success </h1>
                <p>
                    We've sent you email for trip instruction
                    <br>
                    please read it as well
                </p>
                <router-link :to="{name: 'home'}" href="index.html" class="btn btn-home-page mt-3 px-5">
                    Home Page
                </router-link>
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

}
</script>

<style>

</style>