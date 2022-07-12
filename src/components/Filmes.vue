<template>
    <v-container>
        <dataflix-app bind></dataflix-app>
        <v-item-group multiple>
            <v-row>
                <div id="filme" v-for="filme in filmes" class="mx-auto my-12">
                    <v-card class="mx-auto my-12" max-width="374">

                        <v-img height="250" :src="filme.idImagem">
                        </v-img>

                        <v-card-title>
                            {{ filme.nomeFilme }}
                        </v-card-title>

                        <v-card-text>
                            <v-row class="mx-0">
                                <v-text>
                                    Duração (minutos):
                                </v-text>

                                <div class="grey--text ms-4">
                                    {{ filme.duracao }}
                                </div>
                            </v-row>

                            <v-row class="mx-0">
                                <v-text>
                                    Classificação:
                                </v-text>

                                <div class="grey--text ms-4">
                                    {{ filme.classificacao }}
                                </div>
                            </v-row>

                            <v-row class="mx-0">
                                <v-text>
                                    Disponível para o plano:
                                </v-text>

                                <div class="grey--text ms-4">
                                    {{ filme.tipoPlanoId }}
                                </div>
                            </v-row>

                            <div class="my-3 text-subtitle-1">
                                {{ filme.idGenero }}
                            </div>

                            <div class="my-4 text-subtitle-1" style="height: 200px">
                                {{ filme.descricao }}
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <v-row justify="space-around">
                                <v-btn color="primary" class="ma-2 white--text" @click="watch(filme.id)">
                                    <v-icon left dark>
                                        mdi-play
                                    </v-icon>
                                    Watch now
                                </v-btn>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </div>
            </v-row>
        </v-item-group>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import DataflixApp from '@/components/DataflixApp.vue'
import axios from 'axios'

export default Vue.extend({
    name: 'Filmes',
    components: {
        DataflixApp
    },
    data: () => ({
        urlUsuario: "http://localhost:8080/api/usuario/",
        loading: false,
        selection: 1,
        filmes: [],
        usuarioRetorno: {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            planoIsAtivo: false,
            tipoPlanoId: 0
        }
    }),

    methods: {
        loadFilmes() {
            axios
                .get("http://localhost:8080/api/filmes/" + this.usuarioRetorno.id )
                .then((res) => {
                    this.filmes = res.data;
                    console.log(this.filmes)
                }).catch((error) => {
                    console.log(error);
                });
        },
        BuscarUsuario() {
            axios
                .get(this.urlUsuario + this.$route.params.id)
                .then((res) => {
                    this.usuarioRetorno = res.data;
                    console.log(this.usuarioRetorno);
                }).catch((error) => {
                    console.log(error);
                });
        },
        watch(filmeId: any) {
            axios
                .post("http://localhost:8080/api/historico/" + this.usuarioRetorno.id + "/" +filmeId)
                .then((res) => {
                    console.log(res)
                }).catch((error) => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.loadFilmes();
        this.BuscarUsuario();
    }
})
</script>