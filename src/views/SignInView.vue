<template>
    <h1>To get started, please Log In</h1>
    <h2>Don't have an account? <a href="">Sign up</a> </h2>
    <div class="inputContainer">
        <label for="email">Email:</label>
        <input type="email" id="email">
    </div>

    <div class="inputContainer">
        <label for="email">Password:</label>
        <input type="password" id="password">
    </div>

    <div class="buttonContainer">
        <button> Sign In</button>
    </div>

</template>

<script>
export default {
    name: 'SignInView'
}
</script>

<style>
</style>