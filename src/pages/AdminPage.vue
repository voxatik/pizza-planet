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
          <router-link 
            class="nav-item nav-link btn btn-primary" 
            to="/admin/edit-menu"
          >Edit Menu</router-link>
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
export default {
  created() {
    this.$store.dispatch('orders/getOrders')
  }
};
</script>

<style>
</style>
