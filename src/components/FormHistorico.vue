<template>
  <container>
    <dataflix-app-vue></dataflix-app-vue>

    <div>
      <v-row class="mt-5">
        <v-col class="mt-15 ml-10">
          <h2 class="mb-3">Historico de filmes</h2>
          <v-progress-linear color="black" class="mb-3" length="100px"></v-progress-linear>
        </v-col>
      </v-row>
      <v-row class="ml-10">
        <div v-for="historico in retornoHistorico" class="mr-5 mb-5">
          <template>
            <v-parallax :src="historico.idImagem" height="1000">
              <v-card outlined color="black" elevation="13" class="white--text" width="300px" height="120px">
                <h2 class="text-center">{{ historico.nomeFilme }}</h2>
                <h3 class="text-center">
                  Tempo Assistido: {{ historico.tempoAssistido }} min
                </h3>
                <v-row class="mt-3"></v-row>
                <v-row>
                  <v-btn color="black" class="mx-auto" @click="watch(historico.idFilme)">
                    <v-icon x-large color="primary">mdi-play-circle</v-icon>
                  </v-btn>
                </v-row>
              </v-card>
            </v-parallax>
          </template>
        </div>
      </v-row>
    </div>
  </container>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import DataflixAppVue from "@/components/DataflixApp.vue";

export default Vue.extend({
  name: "Historico",

  data: function () {
    return {
      urlUsuario: "http://localhost:8080/api/usuario/",
      urlHistorico: "http://localhost:8080/api/historico/",
      urlFilmes: "http://localhost:8080/api/filmes/",
      usuarioRetorno: {
        id: 0,
        nome: "",
        email: "",
        senha: "",
        planoIsAtivo: false,
        tipoPlanoId: 0
      },
      retornoHistorico: []
    };
  },
  components: {
    DataflixAppVue,
  },
  methods: {
    BuscarUsuario() {
      axios
        .get(this.urlUsuario + this.$route.params.id)
        .then((res) => {
          this.usuarioRetorno = res.data;
        }).catch((error) => {
          console.log(error);
        });
    },
    buscarHistorico() {
      axios
        .get(this.urlHistorico + this.$route.params.id)
        .then((res) => {
          this.retornoHistorico = res.data;
          console.log(this.retornoHistorico);
        }).catch((error) => {
          console.log(error);
        });
    },
    watch(idFilme: any) {
            axios
                .post("http://localhost:8080/api/historico/" + this.usuarioRetorno.id + "/" +idFilme)
                .then((res) => {
                    console.log(res)
                }).catch((error) => {
                    console.log(error);
                });
        }
  },
  mounted() {
    this.BuscarUsuario();
    this.buscarHistorico();
  }
});
</script>
