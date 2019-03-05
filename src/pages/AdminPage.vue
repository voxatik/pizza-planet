<template>
  <div class="row">
    <div class="col-md-10 offset-md-2">
      <h2>Admin</h2>
      <hr>
    </div>
    <div class="col-md-2">
      <nav>
        <div class="nav nav-pills flex-column">
          <router-link class="nav-item nav-link btn btn-primary mb-2" to="/admin">Orders</router-link>
          <router-link
            class="nav-item nav-link btn btn-primary mb-2"
            to="/admin/new-pizza"
          >New Pizza</router-link>
          <router-link class="nav-item nav-link btn btn-primary" to="/admin/edit-menu">Edit Menu</router-link>
        </div>
      </nav>
    </div>
    <div class="col-md-10">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  created() {
    this.$store.dispatch("orders/fetchOrders");
  },
  beforeRouteEnter(to, from, next) {
    if(store.state.isLoading) {
      setTimeout(() => {
        if(! store.state.auth.isLoggedIn) {
          next({name: 'login', params: {as: 'admin', intended: 'admin' }})
        } 
        next()
      }, 600)
    } else if(! store.state.auth.isLoggedIn) {
        next({name: 'login', params: {as: 'admin', intended: 'admin' }})
    } else {
      next()
    }
  }
}
</script>

<style>
</style>
