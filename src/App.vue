<script setup>
import { useRouter } from 'vue-router'
import defineStore from '@/stores/user.js'
// import { computed } from "vue"
// import useUserStore from "@/stores/user.js"

// const isUserAuthenticated = computed(() => !!store.state.user.user)
// const store = useUserStore
// const user = computed(() => store.state.user.user)

const router = useRouter()
const userStore = defineStore()
const handleSignOut = async () => {
  await userStore.signOut()
  router.push({ name: 'signIn' })
}
</script>

<template>
  <header class="header">
    <img alt="Dodo logo" class="navLogo" src="./assets/dodo-nav.png" />
    <div class="wrapper">
      <nav class="navBar">
        <RouterLink to="/" class="router-link">To Do List</RouterLink>
        <RouterLink to="/auth/sign-in" class="router-link">Log In</RouterLink>
        <RouterLink to="/auth/sign-up" class="router-link">Sign Up</RouterLink>
        <button @click="handleSignOut" class="router-link router-button">Sign Out</button>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.header {
  display: flex;
  margin-bottom: 30px;
  margin-left: 27vw;
  margin-right: 23vw;
  width: 50vw;
  margin-top: 50px;
}
.navBar {
  display: flex;
  width: 50vw;
  justify-content: flex-start;
  padding-top: 8px;
  font-size: 12px;
}

.router-link {
  padding-left: 40px;
  color: #7563e7;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Montserrat';
}

.router-link:hover {
  padding-left: 40px;
  color: #d8d4f1;
}

.router-button {
  background-color: transparent;
  border-radius: 0%;
  border-color: transparent;
}
.navLogo {
  width: 120px;
  height: 50px;
  padding-bottom: 10px;
}

@media (max-width: 768px) {
  .navBar {
    justify-content: space-around;
    width: 60vw;
  }

  .router-link {
    padding-left: 30px;
  }
}

@media (max-width: 505px) {
  .router-link {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .navBar {
    justify-content: space-around;
    width: 55vw;
  }

  .router-link {
    padding-left: 20px;
  }
}
</style>
