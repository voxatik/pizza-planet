<template>
  <div id="app">
    <loading :active="isLoading" :z-index="9999">
      <div slot="after">Loading...</div>
    </loading>
    <page-header></page-header>
    <div class="container has-fixed-footer">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue"
import PageFooter from "./components/PageFooter.vue"
import Loading from "vue-loading-overlay"
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter,
    Loading
  },
  computed: {
    isLoading() {
       return this.$store.state.isLoading
    }   
  }
}
</script>

<style>
  .has-fixed-footer {
    margin-bottom: 60px;
  }
</style>

