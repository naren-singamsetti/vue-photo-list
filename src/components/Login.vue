<template>
<v-app>
    <v-layout flex align-center justify-center>
        <v-flex xs12 sm4 elevation-6>
            <div class="pa-2 blue darken-2 white--text">
                <h3>Login</h3>
            </div>
            <v-card>
                <v-card-text class="pt-4">
                    <div>
                        <v-form v-model="valid" ref="form">
                            <v-text-field label="Enter your e-mail address" v-model="email" :rules="emailRules" required></v-text-field>
                            <v-text-field label="Enter your password" v-model="password" min="8" type="password" :rules="passwordRules" required></v-text-field>
                            <v-layout justify-space-between mt-5>
                                <v-btn @click="handleSubmit" :class="{ 'blue darken-4 white--text': valid, disabled: !valid, }">Login</v-btn>
                                <v-btn @click="clear">Clear</v-btn>
                            </v-layout>
                            <div v-if="errorMessage" class="flat red--text">{{errorMessage}}</div>
                        </v-form>
                    </div>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-app>
</template>

<script>
import {
    mapActions
} from 'vuex'

export default {
    name: "Login",
    data() {
        return {
            email: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            password: '',
            passwordRules: [
                (v) => !!v || 'Password is required',
            ],
            valid: false,
            errorMessage: ''
        };
    },
    methods: {
        ...mapActions('user', ['login']),
        handleSubmit() {
            if (this.$refs.form.validate()) {
                let email = this.email
                let password = this.password
                this.login({
                    email,
                    password
                })
            } else {
                return
            }
        },
        clear() {
            this.errorMessage = ''
            this.$refs.form.reset()
        }
    }
};
</script>
