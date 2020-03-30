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
                          <h1>Ubud, Bali</h1>
                          <p>Republic of Indonesia Raya</p>
                          <div class="gallery">
                              <div class="xzoom-container">
                                  <img src="images/details.jpg" class="xzoom" id="xzoom-default" >
                              </div>
                              <div class="xzoom-thumbs">
                                <div class="image">
                                  <img src="images/details.jpg" width="128">
                                </div>
                                <div class="image">
                                  <img src="images/details.jpg" width="128">
                                </div>
                                <div class="image">
                                  <img src="images/details.jpg" width="128">
                                </div>
                                <div class="image">
                                  <img src="images/details.jpg" width="128">
                                </div>
                                <div class="image">
                                  <img src="images/details.jpg" width="128">
                                </div>
                              </div>
                          </div>
                          <h2 class="mt-4" id="about">Tentang Wisata</h2>
                          <p>Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. 
                                  Located east of Java and west of Lombok, the province includes the island of Bali 
                                  and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan,
                                  and Nusa Ceningan. The provincial capital, Denpasar, is the most populous city</p>
                                  <p>
                                          Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. 
                                          Located east of Java and west of Lombok.
                                  </p>
                          <div class="features row">
                              <div class="col-md-4">
                                  <img src="images/icon_1.png" alt="" class="features-image">
                                  <div class="description">
                                      <h3>Featured Event</h3>
                                      <p>Tari Kecak</p>
                                  </div>
                              </div>
                              <div class="col-md-4 border-left">
                                  <img src="images/icon_2.png" alt="" class="features-image">
                                  <div class="description">
                                      <h3>Language</h3>
                                      <p>Bahasa Indonesia</p>
                                  </div>
                              </div>
                              <div class="col-md-4 border-left">
                                  <img src="images/icon_3.png" alt="" class="features-image">
                                  <div class="description">
                                      <h3>Foods</h3>
                                      <p>Local Foods</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="card card-details card-right">
                          <h2>Member keberangkatan</h2>
                          <div class="members my-2">
                              <img src="images/member1.png" alt="Members" class="rounded-circle member-image mr-1">
                              <img src="images/member2.png" alt="Members" class="rounded-circle member-image mr-1">
                              <img src="images/member3.png" alt="Members" class="rounded-circle member-image mr-1">
                              <img src="images/member4.png" alt="Members" class="rounded-circle member-image mr-1">
                              <img src="images/member5.png" alt="Members" class="rounded-circle member-image mr-1">
                          </div>
                          <hr>
                          <h2>Trip Informasi</h2>
                          <table class="trip-informations">
                              <tr>
                                  <th width="50%">Keberangkatan</th>
                                  <td width="50%" class="text-right">22 Aug, 2019</td>
                              </tr>
                              <tr>
                                  <th width="50%">Durasi</th>
                                  <td width="50%" class="text-right">4D 3N</td>
                              </tr>
                              <tr>
                                  <th width="50%">Tipe</th>
                                  <td width="50%" class="text-right">Open Trip</td>
                              </tr>
                              <tr>
                                  <th width="50%">Harga</th>
                                  <td width="50%" class="text-right">$ 80,00 / Person</td>
                              </tr>
                          </table>
                      </div>
                      <div class="join-container">
                          <a href="checkout.html" class="btn btn-block btn-join-now mt-3 py-2 bg-warning">Join Now</a>
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
  // mounted () {
  //     // let recaptchaScript = document.createElement('script')
  //     // recaptchaScript.setAttribute('src', 'libraries/xzoom/dist/xzoom.min.js')
  //     // recaptchaScript.async = true
  //     // document.head.appendChild(recaptchaScript)

  //     $(document).ready(function () {
  //       $('.xzoom, .xzoom-gallery').xzoom({
  //           fadeIn: true,
  //           zoomWidth: 300,
  //           zoomHeight: 300,
  //           title: false,
  //           tint: '#333'
  //       });
  //   });
  //   }
}
</script>
<style>

</style>