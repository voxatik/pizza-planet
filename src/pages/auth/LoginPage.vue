<template>
  <div class="row mt-5">
    <div class="col-sm-12 col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-secondary text-white">
          <h3>Login</h3>
        </div>
        <div class="card-body">
          <form class="validate-form">
            <div class="form-group">
              <label class="label-control">Email Address</label>
              <input class="form-control form-control-lg" type="email" name="email" placeholder="Type your email">
              <span class="focus-form-control"></span>
            </div>
            <div class="form-group validate-input">
              <label class="label-control">Password</label>
              <input class="form-control form-control-lg" type="password" name="password" placeholder="Type your password">
              <span class="focus-form-control"></span>
            </div>
            <div class="form-group">
              <button class="btn btn-primary">Login</button>
            </div>
            <div class="">
              <span>Or Login Using</span>
            </div>
            <div class="">
              <a href="#" class="">
                <i class="fa fa-google"></i>Google
              </a>
            </div>
            <div class="">
              <span class="">Or</span><br>
              <a href="#" class="">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  props: ['as'],
  computed: {
    asAdmin() {
      return this.as && this.as === 'admin'
    }
  }
}
</script>

<style>
</style>
