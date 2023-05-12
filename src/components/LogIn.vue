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
          <button class="login-button" type="button" @click="handleSignIn">Login</button>
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

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(UserStore, ['user'])
  },
  methods: {
    ...mapActions(UserStore, ['signIn']),

    async handleSignIn() {
      const userData = { email: this.email, password: this.password }
      await this.signIn(userData)

      this.$router.push({ name: 'home' })
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
