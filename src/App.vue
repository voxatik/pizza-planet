<template>
  <div id="app">
    <page-header></page-header>
    <div class="container mb-5">
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

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  },
  created() {
    this.$store.dispatch('menu/getMenu')
  }
}
</script>
