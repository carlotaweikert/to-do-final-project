<template>
  <div class="LogInform">
    <div>
      <h1 class="title">Log in</h1>
      <p class="subtitle">Let's start managing your tasks!</p>
      <form>
        <div class="container-input">
          <input type="text" class="form-input" name="email" placeholder="Email" v-model="email" />
        </div>
        <div class="container-input">
          <input
            type="password"
            class="form-input"
            name="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <p class="warn"></p>
        <div>
          <router-link to="/auth/forgot-password"></router-link>
        </div>
        <div class="button-div">
          <button class="login-button" type="button" @click="_handleSignIn">Login</button>
        </div>
      </form>
      <div class="LogIn-alert-div">
        <div class="LogIn-alert">
          <router-link to="/auth/sign-up"><fa /> Don't have an account? <u>Sign Up</u></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import UserStore from '@/stores/user.js'
// import { showError, removeError, showSuccess } from '@/assets/utils.js'

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      toast: null
    }
  },
  computed: {
    ...mapState(UserStore, ['user'])
  },
  methods: {
    ...mapActions(UserStore, ['_validateEmail', '_validatePassword', 'signIn']),

    async _handleSignIn() {
      // Reset errors and fields
      //   removeError()
      document.querySelector('input#input-email').classList.remove('error')
      document.querySelector('input#input-password').classList.remove('error')

      // Validate email
      if (!this._validateEmail(this.email)) {
        // showError('Enter a valid email!')
        document.querySelector('input#input-email').classList.add('error')
        return
      }
      // Validate password
      if (!this._validatePassword(this.password)) {
        // showError('Password must be at least 6 characters long.')
        document.querySelector('input#input-password').classList.add('error')
        return
      }

      // If valid, continue login
      const userData = { email: this.email, password: this.password }
      try {
        await this.signIn(userData)
        // showSuccess('Welcome back :)')
        // Hide elements
        document.querySelector('#connect-forgot').style.display = 'none'
        document.querySelector('.btn.btn-primary').disabled = true
        // Redirect to home
        setTimeout(() => {
          this.$router.push({ name: 'home' })
        }, 2000)
      } catch (error) {
        // showError(error.message)
      }
    }
  }
}
</script>

<style>
.LogInform {
  width: 50vw;
  max-height: 100%;
  margin-left: 25vw;
  margin-right: 25vw;
  padding: 25px;
  padding-left: 2vw;
  padding-right: 2vw;
  overflow: auto;
  background-color: #d8d4f1;
  border-radius: 8px;
  display: flex;
  justify-content: center;
}

.title {
  color: #7563e7;
  display: flex;
  justify-content: center;
  font-family: 'Montserrat';
}

.subtitle {
  color: #7563e7;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  font-family: 'Montserrat';
}

.button-div {
  display: flex;
  justify-content: center;
}

.LogIn-alert {
  font-size: 12px;
  padding-top: 10px;
  text-decoration: none;
  font-family: 'Montserrat';
}

.LogIn-alert-div {
  display: flex;
  justify-content: center;
}
</style>
