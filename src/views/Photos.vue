<template>
<div>
    <h2 class="mt-6">Photos</h2>
    <v-container fluid class="lighten-5">
        <!-- <v-text-field class="" v-model="search" flat hide-details label="Search" prepend-inner-icon="mdi-magnify" solo-inverted clearable @click:clear="clearSearch"></v-text-field> -->
        <v-row v-if="photos.items.length">
            <template v-for="photo in photos.items">
                <v-col class="d-flex align-stretch flex-wrap card" :key="photo.id">
                    <v-card class="pa-2" outlined tile>
                        <div>
                            <h2 class="mb-2">{{photo.title.substring(0, 24)}}</h2>
                            <p class="mb-2">
                                <v-img :lazy-src="photo.thumbnailUrl" max-height="150" max-width="300" :src="photo.url"></v-img>
                            </p>
                        </div>
                    </v-card>
                </v-col>
            </template>
        </v-row>
        <v-row v-else>
            <v-container v-if="photos.error.length" fluid>
                <span class="red--text">ERROR: {{photos.error}}</span>
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
    name: "Photos",
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapState({
            photos: state => state.photos.photos
        })
    },
    created() {
        this.getPhotos()
    },
    methods: {
        ...mapActions('photos', {
            getPhotos: 'getAllPhotos'
        }),
        clearSearch: () => {
            return
        }
    }
}
</script>
