<template>
  <header class="mb-2">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Pizza Planet</a>
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" to="/">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/menu">
            <a class="nav-link">Menu</a>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>
