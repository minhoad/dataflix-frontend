<template>
  <v-container>
    <dataflix-app></dataflix-app>
    <v-form v-model="valid">
      <v-row class="my-10"></v-row>
      <v-card class="mx-auto my-12" max-width="500">
        <v-row class="mx-auto">
          <v-col>
            <v-text-field v-model="usuario" :rules="usuarioRules" :counter="50" label="Usuário*" required>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>
            <v-text-field v-model="senha" :rules="senhaRules" label="Senha*" required></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>
            <v-text-field class="" v-model="email" :rules="emailRules" label="E-mail*" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <v-btn class="mx-auto" color="primary" elevation="2" large raised @click="login">
              Cadastrar
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import DataflixApp from '@/components/DataflixApp.vue'

export default Vue.extend({
  name: 'FormCadastro',
  components: {
    DataflixApp
  },
  data: () => ({
    valid: false,
    usuario: '',
    senha: '',
    usuarioRules: [
      (v: any) => !!v || 'Usuário é obrigatório',
      (v: string | any[]) => v.length <= 50 || 'Usuário deve conter no máximo 50 caracteres',
    ],
    senhaRules: [
      (v: any) => !!v || 'Senha é obrigatório',
    ],
    email: '',
    emailRules: [
      (v: any) => !!v || 'E-mail é obrigatório',
      (v: string) => /.+@.+/.test(v) || 'E-mail inválido',
    ],
  }),
  methods: {
    clear() {
      this.email = ''
      this.usuario = ''
      this.senha = ''
    },
    login() {
    },
    register() {
    }
  }

})
</script>