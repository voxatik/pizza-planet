<template>
  <div class="row mt-5">
    <div class="col-sm-12 col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white">
          <h3>Signup</h3>
        </div>
        <div class="card-body">
          <form class="validate-form">
            <div class="form-group">
              <label class="label-control">Email Address</label>
              <input class="form-control form-control-lg" 
                     type="email" 
                     name="email" 
                     v-model="form.email"
                     placeholder="Type your email">
              <span class="focus-form-control"></span>
            </div>
            <div class="form-group validate-input">
              <label class="label-control">Password</label>
              <input class="form-control form-control-lg" 
                     type="password" 
                     name="password" 
                     v-model="form.password"
                     placeholder="Type your password">
              <span class="focus-form-control"></span>
            </div>
            <div class="form-group validate-input">
              <label class="label-control">Confirm Password</label>
              <input class="form-control form-control-lg" 
                     type="password" 
                     name="password" 
                     v-model="confirmPassword"
                     placeholder="Confirm your password">
              <span class="focus-form-control"></span>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-lg" @click.prevent="signup">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  props: ['intended'],
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      confirmPassword: null
    }
  },
  methods: {
    signup() {
      if(! this.allRequired) {
        return console.log('All fields are required.')
      }

      if(! this.passwordsMatch) {
        return console.log('Password fields do not match.')
      }
    
      this.$store.dispatch('auth/signup', this.form)
      .then(() => {
        let location = { name: 'menu'}
        
        if(this.intended) {
          location.name = this.intended
        }
        
        this.$router.push(location)
      })
      .catch((e) => {
        window.alert(`code: ${e.code}\n message: ${e.message}`)
      })
    }
  },
  computed: {
    allRequired() {
      return this.form.email && this.form.password && this.confirmPassword
    },
    passwordsMatch() {
      return this.form.password === this.confirmPassword
    }
  }
}
</script>
