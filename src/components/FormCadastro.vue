<template>
  <v-container>
    <dataflix-app></dataflix-app>
    <v-form v-model="valid">
      <v-row class="my-10"></v-row>
      <v-card class="mx-auto my-12" max-width="500">
        <v-row class="mx-auto">
          <v-col>
            <v-text-field v-model="user.usuario" :rules="usuarioRules" :counter="50" label="Usuário*" required>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>
            <v-text-field v-model="user.senha" :rules="senhaRules" label="Senha*" required></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>
            <v-text-field class="" v-model="user.email" :rules="emailRules" label="E-mail*" required></v-text-field>
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
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
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
  name: 'FormCadastro',
  components: {
    DataflixApp
  },
  data: () => ({
    urlCadastro: 'http://localhost:8080/api/usuario/create-user',
    valid: false,
    user: {usuario: '', senha: '', email: ''},
    retorno: {},
    usuarioRules: [
      (v: any) => !!v || 'Usuário é obrigatório',
      (v: string | any[]) => v.length <= 50 || 'Usuário deve conter no máximo 50 caracteres',
    ],
    senhaRules: [
      (v: any) => !!v || 'Senha é obrigatório',
    ],
    emailRules: [
      (v: any) => !!v || 'E-mail é obrigatório',
      (v: string) => /.+@.+/.test(v) || 'E-mail inválido',
    ],
    snackbar: false,
    text: '',
    usuarioRetorno: {
      id: 0,
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
      this.user.usuario = ''
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
           this.text = 'Usuário criado com sucesso!';
           this.snackbar = true;
           this.$router.push('/login')
         }).catch((error) => {
          this.text = 'Erro ao realizar cadastro!';
          this.snackbar = true;
          this.clear()
          console.log(error);
         });
    }
  }

})
</script>