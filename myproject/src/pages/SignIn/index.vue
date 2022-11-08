<template>
    <div>
        <div class="box">
            <div class="form">
                <h2>Sign in</h2>
                <div class="inputBox">
                    <input type="text" required="required">
                    <span>Username</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required">
                    <span>Password</span>
                    <i></i>
                </div>
                <div class="underLinks">
                    <a href="#">Forgot Password</a>
                    <router-link to="/sign-up">Sign Up</router-link>
                </div>
                <input type="submit" value="Login">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         name: 'SignIn',
    }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/pages/signin.scss";
</style>