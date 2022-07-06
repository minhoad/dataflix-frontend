<template>
    <v-container>
        <dataflix-app></dataflix-app>
        <v-item-group multiple>
            <v-row>
                <div id="filme" v-for="filme in filmes" class="mx-auto my-12">
                    <v-card class="mx-auto my-12" max-width="374">
            
                        <v-img height="250"
                            :src="filme.idImagem">
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
                                {{filme.idGenero}}
                            </div>

                            <div class="my-4 text-subtitle-1" style="height: 200px">
                                {{filme.descricao}}
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <v-row justify="space-around">
                               <v-btn
                                    color="primary"
                                    class="ma-2 white--text"
                                    >
                                    <v-icon
                                        left
                                        dark
                                    >
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
        loading: false,
        selection: 1,
        filmes: [
            {
                id: 1,
                nomeFilme: "Stranger Things",
                duracao: "127",
                idGenero: 1,
                idImagem: "https://lojapiticas.vteximg.com.br/arquivos/ids/166655/brands-strangerthings2.png",
                descricao: "When a little boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
                tipoPlanoId: 1,
                classificacao: "16 anos"
            },
            {
                id: 2,
                nomeFilme: "The Boys",
                duracao: "158",
                idGenero: 1,
                idImagem: "https://images2.alphacoders.com/111/1116548.png",
                descricao: "The Boys is set in a universe in which superpowered people are recognized as heroes by the general public and owned by a powerful corporation, Vought International, which ensures that they are aggressively marketed and monetized. Outside of their heroic personas, most are arrogant and corrupt.",
                tipoPlanoId: 1,
                classificacao: "18 anos"
            }
        ]
    }),

    methods: {
        loadFilmes() {
            axios
                .get("http://localhost:8080/api/filmes")
                .then((res) => {
                    this.filmes = res.data;
                }).catch((error) => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.loadFilmes()
    }
})
</script>