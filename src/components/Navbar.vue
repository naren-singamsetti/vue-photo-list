<template>
<v-toolbar flat color="primary align-right row-pointer" dark>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/about" text>About</v-btn>
        <v-btn to="/posts" text>Posts</v-btn>
        <v-btn to="/photos" text>Photos</v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
    name: "Navbar"
}
</script>
