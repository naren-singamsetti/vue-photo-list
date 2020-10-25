<template>
<v-app>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center row-pointer" @click="toHome()">
            <v-img alt="Vue photo list Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
            <h2>POC APP</h2>
        </div>
        <v-spacer></v-spacer>
        <Navbar></Navbar>
        <v-btn to="/login" dark v-if="!isLoggedIn">
            <span class="mr-2">Login</span>
            <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn dark @click="logout" v-else>
            <span class="mr-2">Logout</span>
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-main>
</v-app>
</template>

<style lang="css" scoped>
.row-pointer:hover {
    cursor: pointer;
}
</style>

<script>
import {
    mapActions,
    mapGetters
} from "vuex"
import Navbar from "./components/Navbar";

export default {
    name: "App",
    components: {
        Navbar,
    },
    computed: {
        ...mapGetters('user', ['isLoggedIn'])
    },
    methods: {
        ...mapActions('user', ['logout']),
        toHome() {
            this.$router.push("/");
        }
    },
};
</script>
