<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions } from 'pinia';
import UserStore from '@/stores/user.js';

export default {
  name: 'App',
  components: {
    RouterView,
    RouterLink,
  },
  methods: {
    ... mapActions(UserStore, ['fetchUser'])
  },
  async created () {
    await this.fetchUser()

  } 
}

</script>

<template>
  <header class="header">
    <img alt="Dodo logo" class="logo" src="@/assets/dodo-nav.png" width="100" height="50" />

    <div class="wrapper">
      <nav class="navigation">
        <RouterLink to="/" class="routerLink">My Tasks</RouterLink>
        <RouterLink to="/auth/sign-in">Log In</RouterLink>
        <RouterLink to="/auth/sign-up" class="signUp">Sign up</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

.header {
  display:flex;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  width: auto;
}

.logo {
  display: block;
  margin-right: 20px;
  margin-top: 20px;
}

.navigation {
  display: flex;
  flex-wrap: wrap;
  width: auto;
  margin-top: 32px;
  justify-content: flex-start;
}

.routerLink {
  padding-left: 40px;
  color: #7563E7;
  text-decoration: none;
  font-size: 18px;
}

.routerLink:hover {
  color: #342C68;
}

.navigation a {
  padding-left: 40px;
  color: #7563E7;
  text-decoration: none;
  font-size: 18px; 
}

.navigation .signUp {
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 18px;
  margin-top: 0px;
}

.navigation .signUp:hover {
  color: #342C68;
}

.navigation a.router-link-exact-active {
  color: #342C68;
}

.signUp {
  background-color: #7563E7;
  border-radius: 50px;
  margin-left: 40px;
}

.signUp:hover {
  background-color: #C1B9F2;
  border-radius: 50px;
  margin-left: 40px;
}
</style>
