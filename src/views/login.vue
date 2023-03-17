<template>
    <div class="center">        
        <v-row>
            <v-col cols="8" sm="6" offset-sm="3" md="4" offset-md="4" offset="2" style="background-color: cyan;">
                <h1>Login Page!</h1>
                <v-avatar size="95" tile>
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="Username" v-model="username"></v-text-field>
                <v-text-field label="Password" v-model="password" type="password"></v-text-field>
                <v-btn block elevation="2" @click="authenticate()">LOGIN</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        authenticate() {
            alert("login click!")
        }
    },
}
</script>

<style lang="scss" scoped></style>