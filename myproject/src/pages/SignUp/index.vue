<template>
    <div>
        <div class="box">
            <div class="form">
                <h2>Sign up</h2>
                <div class="inputBox">
                    <input type="text" required="required">
                    <span>Username</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required">
                    <span>Email</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required">
                    <span>Password</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required">
                    <span>Confirm Password</span>
                    <i></i>
                </div>
                <input type="submit" value="Register">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         name: 'SignUp',
    }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/pages/signup.scss";
</style>