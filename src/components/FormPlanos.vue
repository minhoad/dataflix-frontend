<template>
  <v-container>
    <dataflix-app-vue></dataflix-app-vue>
    <v-row class="my-5"></v-row>
    <div>
      <h1 class="my-10">Escolha o melhor plano para você</h1>
    </div>
    <div>
      <v-row class="my-10">
        <v-col class="mt-10">
          <div>
            <v-row class="mt-15 mb-15"></v-row>
            <v-row class="mt-15 mb-15"></v-row>

            <v-row class="mt-15">
              <v-progress-linear color="black" class="mb-5"></v-progress-linear>
              <h3 class="mb-5 mr-15">HD disponível</h3>
            </v-row>

            <v-row>
              <v-progress-linear color="black" class="mb-5"></v-progress-linear>
              <h3 class="mb-5">Ultra HD disponível</h3>
            </v-row>

            <v-row>
              <v-progress-linear color="black" class="mb-5"></v-progress-linear>
              <h3 class="mb-5">Telas simultâneas</h3>
            </v-row>

            <v-row>
              <v-progress-linear color="black" class="mb-5"></v-progress-linear>
              <h3 class="mb-5">Assista no notebook, TV smartphone ou tablet</h3>
            </v-row>

            <v-row>
              <v-progress-linear color="black" class="mb-5"></v-progress-linear>
              <h3 class="mb-5">Filmes e séries ilimitados</h3>
            </v-row>

            <v-row>
              <v-progress-linear color="black" class="mb-5"></v-progress-linear>
              <h3 class="mb-5">cancele quando quiser</h3>
            </v-row>

            <v-row>
              <v-progress-linear color="black" class="mb-5"></v-progress-linear>
              <h3 class="mb-5">Primeiro mês grátis</h3>
              <v-progress-linear color="black"></v-progress-linear>
            </v-row>
          </div>
        </v-col>

        <v-col class="text-center">
          <v-sheet
            class="ml-10"
            color="primary"
            elevation="11"
            height="144"
            width="148"
          >
            <v-col></v-col>
            <v-col
              ><h2><b>Básico</b></h2>
            </v-col>
          </v-sheet>
          <h3>R$ 19,90</h3>
          <v-btn icon @click="clickEnableButton(1)">
            <v-icon :color="button1Checked">mdi-check-circle</v-icon>
          </v-btn>
          <v-col>
            <v-progress-linear color="black"></v-progress-linear>
            <v-icon class="mt-5 mb-6" color="black">mdi-alpha-x</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-alpha-x</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-numeric-1</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black" class="mt-11"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon class="mb-5" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon class="mb-5" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
        </v-col>

        <v-col class="text-center">
          <v-sheet
            class="ml-9"
            color="primary"
            elevation="11"
            height="144"
            width="148"
          >
            <v-col></v-col>
            <v-col
              ><h2><b>Padrão</b></h2>
            </v-col>
          </v-sheet>
          <h3>R$ 27,90</h3>
          <v-btn icon v-on:click="clickEnableButton(2)">
            <v-icon :color="button2Checked">mdi-check-circle</v-icon>
          </v-btn>
          <v-col>
            <v-progress-linear color="black"></v-progress-linear>
            <v-icon class="mt-5 mb-6" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-alpha-x</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-numeric-2</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black" class="mt-11"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon class="mb-5" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon class="mb-5" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
        </v-col>

        <v-col class="text-center">
          <v-sheet
            class="ml-8"
            color="primary"
            elevation="11"
            height="144"
            width="148"
          >
            <v-col></v-col>
            <v-col
              ><h2><b>Premium</b></h2>
            </v-col>
          </v-sheet>
          <h3>R$ 37,90</h3>
          <v-btn icon v-on:click="clickEnableButton(3)">
            <v-icon :color="button3Checked">mdi-check-circle</v-icon>
          </v-btn>
          <v-col>
            <v-progress-linear color="black"></v-progress-linear>
            <v-icon class="mt-5 mb-6" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-numeric-2</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black" class="mt-11"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon class="mb-5" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon class="mb-5" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
        </v-col>

        <v-col class="text-center">
          <v-sheet
            class="ml-7"
            color="primary"
            elevation="11"
            height="144"
            width="148"
          >
            <v-col></v-col>
            <v-col
              ><h2><b>Ultra</b></h2>
            </v-col>
          </v-sheet>
          <h3>R$ 45,90</h3>
          <v-btn icon v-on:click="clickEnableButton(4)">
            <v-icon :color="button4Checked">mdi-check-circle</v-icon>
          </v-btn>
          <v-col>
            <v-progress-linear color="black"></v-progress-linear>
            <v-icon class="mt-5 mb-6" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-numeric-3</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black" class="mt-11"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon class="mb-5" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon class="mb-5" color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black"></v-progress-linear>
          </v-col>
          <v-col>
            <v-icon color="black">mdi-check-bold</v-icon>
            <v-progress-linear color="black" class="mt-5"></v-progress-linear>
          </v-col>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text-center">
          <v-btn color="primary" large raised @click="Confirmar">
            Confirmar
          </v-btn>
          <v-btn class="ml-10" color="error" large raised @click="Login">
            Sair da conta
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-snackbar v-model="snackbar">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Fechar
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import DataflixAppVue from "./DataflixApp.vue";

export default Vue.extend({
  name: "Planos",
  data: function () {
    return {
      urlUsuario: "http://localhost:8080/api/usuario/",
      button1Checked: "grey",
      button2Checked: "grey",
      button3Checked: "grey",
      button4Checked: "grey",
      primary: "primary",
      cinza: "grey",
      list: [{ name: "myName", age: 25 }],
      snackbar: false,
      snackbar1: false,
      text: "",
      retorno: {},
      confere: false,
      usuarioRetorno: {
        id: 0,
        nome: "",
        email: "",
        senha: "",
        planoIsAtivo: false,
        tipoPlanoId: 0
      },
      selectedButton: 0
    };
  },
  methods: {
    clickEnableButton(index: number) {
      if (index === 1) {
        this.button1Checked = this.primary;
        this.button2Checked = this.cinza;
        this.button3Checked = this.cinza;
        this.button4Checked = this.cinza;
      }
      if (index === 2) {
        this.button1Checked = this.cinza;
        this.button2Checked = this.primary;
        this.button3Checked = this.cinza;
        this.button4Checked = this.cinza;
      }
      if (index === 3) {
        this.button1Checked = this.cinza;
        this.button2Checked = this.cinza;
        this.button3Checked = this.primary;
        this.button4Checked = this.cinza;
      }
      if (index === 4) {
        this.button1Checked = this.cinza;
        this.button2Checked = this.cinza;
        this.button3Checked = this.cinza;
        this.button4Checked = this.primary;
      }
      this.selectedButton = index;
      this.confere = true;
    },
    Confirmar() {
      if (this.confere) {
        this.usuarioRetorno.tipoPlanoId = this.selectedButton;
        console.log(this.usuarioRetorno);
        axios
          .post(this.urlUsuario, this.usuarioRetorno)
          .then((res) => {
            this.retorno = res.data;
            this.text = res.data;
            this.snackbar = true;
            this.text = "Plano escolhido com sucesso!";
            console.log(this.retorno);
            //this.$router.push("/filmes");
          })
          .catch((e) => {
            this.text = "Erro ao escolher plano!";
            this.snackbar = true;
            console.log(e);
          });
      } else {
        this.text = "Escolha um plano antes de confirmar";
        this.snackbar = true;
      }
    },
    Login() {
      this.$router.push("/login");
    },
    AtivarSnack() {
      this.snackbar1 = false;
    },
    BuscarUsuario() {
      axios
      .get(this.urlUsuario+this.$route.params.id)
      .then((res) => {
           this.usuarioRetorno = res.data;
           console.log(this.usuarioRetorno);
         }).catch((error) => {
          console.log(error);
         });
    }
  },
  components: {
    DataflixAppVue,
  },
  mounted() {
    this.BuscarUsuario();
  }
});
</script>
