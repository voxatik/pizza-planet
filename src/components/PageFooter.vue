<template>
  <footer class="container fixed-bottom">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="nav-item" to="/">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/menu">
          <a class="nav-link">Menu</a>
        </router-link>
      </ul>
      <ul class="navbar-nav">
        <router-link tag="li" class="nav-item" to="/admin">
          <a class="nav-link">Admin</a>
        </router-link>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
