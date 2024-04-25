<template>
  <div class="container">
    <Navbar />
    <AccountAreaVue />
    <CoinsAreaVue />
    <PopulerNFTVue />
    <FooterVue />
  </div>
</template>

<script>
import AccountAreaVue from './components/AccountArea.vue';
import CoinsAreaVue from './components/CoinsArea.vue';
import FooterVue from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import PopulerNFTVue from './components/PopulerNFT.vue';

export default {
  components: {
    Navbar,
    CoinsAreaVue,
    FooterVue,
    PopulerNFTVue,
    AccountAreaVue
  }
}
</script>