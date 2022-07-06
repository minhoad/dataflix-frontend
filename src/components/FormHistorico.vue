<template>
  <container>
    <dataflix-app-vue></dataflix-app-vue>

    <div>
      <v-row class="mt-5">
        <v-col class="mt-15 ml-10">
          <h2 class="mb-3">Historico de filmes</h2>
          <v-progress-linear
            color="black"
            class="mb-3"
            length="100px"
          ></v-progress-linear>
        </v-col>
      </v-row>
      <v-row class="ml-10">
        <div v-for="historico in arrayHistorico" class="mr-5 mb-5">
          <template>
            <v-parallax :src="historico.idImagem" height="1000">
              <v-card
                outlined
                color="black"
                elevation="13"
                class="white--text"
                width="300px"
                height="120px"
              >
                <h2 class="text-center">{{ historico.idFilme }}</h2>
                <h3 class="text-center">
                  Tempo Assistido: {{ historico.tempoAssistido }} min
                </h3>
                <v-row class="mt-3"></v-row>
                <v-row
                  ><v-btn color="black" class="mx-auto">
                    <v-icon x-large color="primary">mdi-play-circle</v-icon>
                  </v-btn></v-row
                >
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
      arrayHistorico: [
        {
          id: 1,
          idUsuario: 1,
          idFilme: "The Boys",
          tempoAssistido: "12",
          idImagem: "https://images2.alphacoders.com/111/1116548.png",
        },
        {
          id: 2,
          idUsuario: 1,
          idFilme: "Stranger Things",
          tempoAssistido: "34",
          idImagem:
            "https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg",
        },
        {
          id: 2,
          idUsuario: 1,
          idFilme: "Peaky Blinders",
          tempoAssistido: "34",
          idImagem:
            "https://desertgardensguru.com/wp-content/uploads/2022/06/Peaky-Blinders-Sangue-Apostas-e-Navalhas-6a-Temporada-Completa-2022-Google-Drive-e-Torrent-Dublada.jpg",
        },
        {
          id: 2,
          idUsuario: 1,
          idFilme: "Star Wars",
          tempoAssistido: "34",
          idImagem:
            "https://images.hdqwalls.com/download/darth-vader-rogue-one-star-wars-4k-de-1280x1024.jpg",
        },
        {
          id: 2,
          idUsuario: 1,
          idFilme: "Sons of Anarchy",
          tempoAssistido: "34",
          idImagem:
            "https://br.web.img2.acsta.net/pictures/210/506/21050619_2013101722133409.jpg",
        },
      ],
      urlCadastro: "http://localhost:8080/api/usuario/create-user",
    };
  },
  components: {
    DataflixAppVue,
  },
  methods: {
    register() {
      axios
        .post(this.urlCadastro) // Colocar o this.user
        .then((res) => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
