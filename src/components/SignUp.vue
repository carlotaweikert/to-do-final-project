<template>
  <div class="LogInform">
    <div>
      <h1 class="title">Sign up</h1>
      <p class="subtitle">Sign up and start managing your tasks!</p>
      <form action="" @submit.prevent @keyup.enter="handleSignUp" class="connect">
        <div class="container-input-up">
          <input type="text" class="form-input" name="email" placeholder="Email" v-model="email" />
        </div>
        <div class="container-input-up">
          <input
            type="password"
            class="form-input"
            name="password"
            placeholder="Password"
            v-model="password"
          /><br />
        </div>
        <p class="warn"></p>
        <div class="button-div">
          <button
            class="login-button"
            type="button"
            @click="handleSignUp"
            @keyup.enter="handleSignUp"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div class="LogIn-alert-div">
        <div class="LogIn-alert">
          <router-link to="/auth/sign-in">Do you have an account? <u>Log In</u></router-link>
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
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    ...mapState(UserStore, ['user'])
  },
  methods: {
    ...mapActions(UserStore, ['signUp']),

    async handleSignUp() {
      const userData = { email: this.email, password: this.password }
      await this.signUp(userData)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style>
.container-input-up {
  display: flex;
  justify-content: center;
}
</style>
