<template>
  <main class="d-flex align-items-center justify-content-center ">
    <div class="banner flex-fill d-flex align-items-center justify-content-center">
      <div class="banner-text text-center">
        <h1 class="">Welcome to Pizza Planet</h1>
        <h3 class="mb-4">Feeling Hungry?</h3>
        <a href="#" class="btn btn-primary">Order Now!</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.banner {
  background: url(../assets/pizza.jpg);
  height:  800px;
}

.banner-text {
  background: #eee;
  opacity: 0.8;
  padding: 5%
}
</style>
