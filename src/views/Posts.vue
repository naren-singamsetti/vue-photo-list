<template>
<div>
    <v-container fluid class="lighten-5">
        <h2 class="mt-6">Posts</h2>
        <!-- <v-text-field class="" v-model="search" flat hide-details label="Search" prepend-inner-icon="mdi-magnify" solo-inverted clearable @click:clear="clearSearch"></v-text-field> -->
        <v-row v-if="posts.items.length">
            <template v-for="post in posts.items">
                <v-col class="d-flex align-stretch flex-wrap card" :key="post.id">
                    <v-card class="pa-2" outlined tile>
                        <div>
                            <h2 class="mb-2">{{post.title.substring(0, 20)}}</h2>
                            <p class="mb-2">{{post.body}}</p>
                        </div>
                    </v-card>
                </v-col>
            </template>
        </v-row>
        <v-row v-else>
            <v-container v-if="posts.error.length" fluid>
                <span class="red--text">ERROR: {{posts.error}}</span>
            </v-container>
        </v-row>
    </v-container>
</div>
</template>

<style scoped>
.card {
    flex: 0 0 21%;
    margin: 5px;
}
</style>

<script>
import {
    mapActions,
    mapState
} from 'vuex'

export default {
    name: "Posts",
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapState({
            posts: state => state.posts.posts
        })
    },
    created() {
        this.getPosts()
    },
    methods: {
        ...mapActions('posts', {
            getPosts: 'getAllPosts'
        })
    }
}
</script>
