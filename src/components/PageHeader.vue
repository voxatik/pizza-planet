<template>
  <header class="mb-2">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Pizza Planet</a>
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" :to="{name: 'home'}">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" :to="{name: 'menu'}">
            <a class="nav-link">Menu</a>
          </router-link>
        </ul>
        <ul class="navbar-nav" v-if="isLoggedIn">
          <li class="nav-item"><button class="nav-link btn" @click="logout">Logout</button></li>
        </ul>
        <ul class="navbar-nav" v-else>
          <router-link tag="li" class="nav-item" :to="{name: 'login'}">
            <a class="nav-link">Login</a>
          </router-link>
          <router-link tag="li" class="nav-item" :to="{name: 'signup'}">
            <a class="nav-link">Signup</a>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push({name: 'home'})
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn
    }
  }
}
</script>
