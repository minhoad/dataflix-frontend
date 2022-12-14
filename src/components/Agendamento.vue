<template>
    <v-container>
        <dataflix-app></dataflix-app>
        <v-form v-model="valid">
            <v-row class="my-10"></v-row>
            <v-card class="mx-auto my-12" max-width="500">
                <v-row class="mx-auto">
                    <v-col>
                        <v-time-picker ampm-in-title format="ampm" full-width required>
                        </v-time-picker>
                    </v-col>
                </v-row>
                <v-row class="mx-auto">
                    <v-col>
                        <v-select :items="items" label="Escolha o Médico">
                        </v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center">
                        <v-btn class="mr-auto" color="primary" elevation="2" large raised @click="register">
                            Cadastrar
                        </v-btn>
                        <v-btn class="mx-auto ml-7" type="button" variant="outline-secondary" large @click="retornar">
                            Retornar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
        <v-snackbar v-model="snackbar">
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import DataflixApp from '@/components/DataflixApp.vue'
import axios from 'axios'

export default Vue.extend({
    name: 'Agendamento',
    components: {
        DataflixApp
    },
    data: () => ({
        urlCadastro: 'http://localhost:8080/api/usuario/',
        valid: false,
        user: { nome: '', senha: '', email: '' },
        items: [ "Dr. Pica Seca", "Dr. Onésio Cu de Mel", "Dr. Paulin Delícia" ],
        retorno: {},
        snackbar: false,
        text: '',
        usuarioRetorno: {
            nome: "",
            email: "",
            senha: "",
            planoIsAtivo: false,
            tipoPlanoId: null
        }
    }),
    methods: {
        clear() {
            this.user.email = ''
            this.user.nome = ''
            this.user.senha = ''
        },
        retornar() {
            this.$router.push('/login')
        },
        register() {
            axios
                .post(this.urlCadastro, this.user)
                .then((res) => {
                    this.usuarioRetorno = res.data;
                    this.text = 'Agendamento feito com sucesso!';
                    this.snackbar = true;
                    this.$router.push('/login')
                }).catch((error) => {
                    this.text = 'Erro ao realizar agendamento!';
                    this.snackbar = true;
                    console.log(error);
                });
        }
    }

})
</script>