<template>
  <div id="app">
    <navbarLancong/>
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
                              <li class="breadcrumb-item active">
                                  Details
                              </li>
                          </ol>
                      </nav>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-8 pl-lg-0">
                      <div class="card card-details">
                          <h1>{{ this.$store.state.detail.title }}</h1>
                          <p>{{ this.$store.state.detail.location }}</p>
                          <div class="gallery">
                              <div class="xzoom-container">
                                  <img :src="'http://api.lancong.test/images/galleries/' + this.$store.state.detail.galleries[0].image" class="xzoom" id="xzoom-default" >
                              </div>
                              <div class="xzoom-thumbs">
                                <div class="image" v-for="(image, index) in this.$store.state.detail.galleries" :key="index">
                                  <img :src="'http://api.lancong.test/images/galleries/' + image.image" width="128">
                                </div>
                              </div>
                          </div>
                          <h2 class="mt-4" id="about">Tentang Wisata</h2>
                          <p>{{ this.$store.state.detail.about }}</p>
                                  
                          <div class="features row">
                              <div class="col-md-4">
                                  <img src="/images/icon_1.png" alt="" class="features-image">
                                  <div class="description">
                                      <h3>Featured Event</h3>
                                      <p>{{ this.$store.state.detail.featured_event }}</p>
                                  </div>
                              </div>
                              <div class="col-md-4 border-left">
                                  <img src="/images/icon_2.png" alt="" class="features-image">
                                  <div class="description">
                                      <h3>Language</h3>
                                      <p>{{ this.$store.state.detail.language }}</p>
                                  </div>
                              </div>
                              <div class="col-md-4 border-left">
                                  <img src="/images/icon_3.png" alt="" class="features-image">
                                  <div class="description">
                                      <h3>Foods</h3>
                                      <p>{{ this.$store.state.detail.foods }}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="card card-details card-right">
                          <h2>Members who going</h2>
                          <div class="members my-2">
                              <img src="/images/member1.png" alt="Members" class="rounded-circle member-image mr-1">
                              <img src="/images/member2.png" alt="Members" class="rounded-circle member-image mr-1">
                              <img src="/images/member3.png" alt="Members" class="rounded-circle member-image mr-1">
                              <img src="/images/member4.png" alt="Members" class="rounded-circle member-image mr-1">
                              <img src="/images/member5.png" alt="Members" class="rounded-circle member-image mr-1">
                          </div>
                          <hr>
                          <h2>Trip Informasi</h2>
                          <table class="trip-informations">
                              <tr>
                                  <th width="50%">Departure</th>
                                  <td width="50%" class="text-right">{{ this.$store.state.detail.departure_date }}</td>
                              </tr>
                              <tr>
                                  <th width="50%">Duration</th>
                                  <td width="50%" class="text-right">{{ this.$store.state.detail.duration }}</td>
                              </tr>
                              <tr>
                                  <th width="50%">Type</th>
                                  <td width="50%" class="text-right">{{ this.$store.state.detail.type }}</td>
                              </tr>
                              <tr>
                                  <th width="50%">Price</th>
                                  <td width="50%" class="text-right">Rp. {{ this.$store.state.detail.price }}</td>
                              </tr>
                          </table>
                      </div>
                      <div class="join-container">
                          <router-link :to="{name: 'checkout'}" class="btn btn-block btn-join-now mt-3 py-2 bg-warning">Join Now</router-link>
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
import navbarLancong from '../components/navbarLancong'
import footerLancong from '../components/footerLancong'
// import $ from 'jquery'

export default {
  name:'detail',
  components: {
    navbarLancong,
    footerLancong
  },
  mounted() {
    this.$store.dispatch('getDetail', {
        slug : this.$route.params.id,
    })

}
}
</script>
<style>

</style>