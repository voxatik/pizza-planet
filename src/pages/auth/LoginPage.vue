<template>
  <div class="row mt-5">
    <div class="col-sm-12 col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white">
          <h3>{{ title }}</h3>
        </div>
        <div class="card-body">
          <form class="validate-form">
            <div class="form-group">
              <label class="label-control">Email Address</label>
              <input class="form-control form-control-lg" 
                     type="email" 
                     name="email" 
                     v-model="cred.email"
                     placeholder="Type your email">
              <span class="focus-form-control"></span>
            </div>
            <div class="form-group validate-input">
              <label class="label-control">Password</label>
              <input class="form-control form-control-lg" 
                     type="password" 
                     name="password" 
                     v-model="cred.password"
                     placeholder="Type your password">
              <span class="focus-form-control"></span>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-lg" @click.prevent="login">Login</button>
            </div>
            <div class="text-center mt-3" v-if="! asAdmin">
              <hr>
              <div class="my-3">
                <h6 class="mb-3">or login using</h6>
                <button @click="loginGoogle" class="btn btn-danger">
                  <i class="fab fa-google"></i>
                </button>
              </div>
              <div>
                <h6 class="">or</h6>
                <router-link :to="{name: 'signup'}">Sign Up</router-link>
              </div>
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
  props: ['as', 'intended'],
  data() {
    return {
      cred: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('auth/loginEmail', this.cred)
      .then(this.shouldRedirect)
      .catch((e) => {
      })
    },
    loginGoogle() {
      this.$store.dispatch('auth/loginGoogle')
      .then(this.shouldRedirect)
      .catch((e) => {
        alert(`Code: ${e.code}\nMessage: ${e.message}`)
      })
    },
    shouldRedirect() {
      let location = { name: 'menu'}
      if(this.intended) location.name = this.intended
      this.$router.push(location)
    }
  },
  computed: {
    asAdmin() {
      return this.as && this.as === 'admin'
    },
    title() {
      if(this.asAdmin) {
        return 'Admin Login'
      }

      return 'Login'
    }
  }
}
</script>
