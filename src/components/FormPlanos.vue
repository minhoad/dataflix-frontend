<template>
    <v-container>
        <dataflix-app-vue></dataflix-app-vue>
        <v-row class="my-5"></v-row>
        <div>
            <h1 class="my-10"> Escolha o melhor plano para você</h1>
        </div>
        <div>
            <v-row class="my-10">
                <v-col class="mt-10">
                    <div>
                        <v-row class="mt-15 mb-15"></v-row>
                        <v-row class="mt-15 mb-15"></v-row>
                        
                        <v-row class="mt-15">
                            <v-progress-linear color="black" class="mb-3" length="100px"></v-progress-linear>
                            <h3 class="mb-3"> HD disponível</h3>
                        </v-row>

                        <v-row>
                            <v-progress-linear color="black" class="mb-3"></v-progress-linear>
                            <h3 class="mb-3">Ultra HD disponível</h3>
                        </v-row>

                        <v-row>
                            <v-progress-linear color="black" class="mb-3"></v-progress-linear>
                            <h3 class="mb-3">Telas simultâneas</h3>
                        </v-row>

                        <v-row>
                            <v-progress-linear color="black" class="mb-3"></v-progress-linear>
                            <h3 class="mb-3">Assista no notebook, TV smartphone ou tablet</h3>
                        </v-row>

                        <v-row>
                            <v-progress-linear color="black" class="mb-3"></v-progress-linear>
                            <h3 class="mb-3">Filmes e séries ilimitados</h3>
                        </v-row>

                        <v-row>
                            <v-progress-linear color="black" class="mb-3"></v-progress-linear>
                            <h3 class="mb-3">cancele quando quiser</h3>
                        </v-row>

                        <v-row>
                            <v-progress-linear color="black" class="mb-3"></v-progress-linear>
                            <h3 class="mb-3">Primeiro mês grátis</h3>
                        </v-row>

                    </div>
                </v-col>

                <v-col class="text-center">
                    <v-sheet class="ml-10" color="red" elevation="11" height="144" width="148">Básico</v-sheet>
                    <h3> R$ 19,90 </h3>
                    <v-btn icon @click="clickEnableButton(1)">
                        <v-icon :color="button1Checked">mdi-check-circle</v-icon>
                    </v-btn>
                </v-col>

                <v-col class="text-center">
                    <v-sheet class="ml-9" color="red" elevation="11" height="144" width="148"> Padrão </v-sheet>
                    <h3> R$ 27,90 </h3>
                    <v-btn icon v-on:click="clickEnableButton(2)">
                        <v-icon :color="button2Checked">mdi-check-circle</v-icon>
                    </v-btn>
                </v-col>

                <v-col class="text-center">
                    <v-sheet class="ml-8" color="red" elevation="11" height="144" width="148"> Premium </v-sheet>
                    <h3> R$ 37,90 </h3>
                    <v-btn icon v-on:click="clickEnableButton(3)">
                        <v-icon :color="button3Checked">mdi-check-circle</v-icon>
                    </v-btn>
                </v-col>

                <v-col class="text-center">
                    <v-sheet class="ml-7" color="red" elevation="11" height="144" width="148"> Ultra </v-sheet>
                    <h3> R$ 45,90 </h3>
                    <v-btn icon v-on:click="clickEnableButton(4)">
                        <v-icon :color="button4Checked">mdi-check-circle</v-icon>
                    </v-btn>
                </v-col>

            </v-row>

            <v-row>
                <v-col class="text-center">
                    <v-btn color="primary">
                        Confirmar
                    </v-btn>
                    <v-btn class="ml-10" color="error">
                        Voltar
                    </v-btn>
                </v-col>

            </v-row>



        </div>
    </v-container>
</template>

<script lang="ts">

import Vue from "vue"

import DataflixAppVue from "./DataflixApp.vue"


export default Vue.extend({
    name: 'Planos',
    data: function () {
        return {
            button1Checked: "grey",
            button2Checked: "grey",
            button3Checked: "grey",
            button4Checked: "grey",
            vermelho: "red",
            cinza: "grey",
            list: [
                { name: 'myName', age: 25 }
            ]
        }
    },
    methods: {
        clickEnableButton(index: number) {
            if (index === 1) {
                this.button1Checked = this.vermelho
                this.button2Checked = this.cinza
                this.button3Checked = this.cinza
                this.button4Checked = this.cinza
            }
            if (index === 2) {
                this.button1Checked = this.cinza
                this.button2Checked = this.vermelho
                this.button3Checked = this.cinza
                this.button4Checked = this.cinza
            }
            if (index === 3) {
                this.button1Checked = this.cinza
                this.button2Checked = this.cinza
                this.button3Checked = this.vermelho
                this.button4Checked = this.cinza
            }
            if (index === 4) {
                this.button1Checked = this.cinza
                this.button2Checked = this.cinza
                this.button3Checked = this.cinza
                this.button4Checked = this.vermelho
            }

        },
    },
    components: {
        DataflixAppVue
    }

})


</script>