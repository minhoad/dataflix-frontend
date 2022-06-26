<template>
  <v-form v-model="valid">
    <v-container>
      <v-row class="align-items-center">
        <v-col sm="5">
          <v-text-field
            v-model="usuario"
            :rules="usuarioRules"
            :counter="50"
            label="Usuário*"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="5">
          <v-text-field
            v-model="senha"
            :rules="senhaRules"
            label="Senha*"
            required
         ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="5">
          <v-text-field
            class=""
            v-model="email"
            :rules="emailRules"
            label="E-mail*"
            required
         ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="5">
          <v-btn
            class="ml-4"
            color="primary"
            elevation="2"
            large
            raised
            @click="login">
            Cadastrar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script lang="ts"> 
import Vue from 'vue'

export default Vue.extend({
  name: 'FormCadastro',
  components: {
  },
  data: () => ({
      valid: false,
      usuario: '',
      senha: '',
      usuarioRules: [
(        v: any) => !!v || 'Usuário é obrigatório',
(        v: string | any[]) => v.length <= 50 || 'Usuário deve conter no máximo 50 caracteres',
      ],
      senhaRules: [
(        v: any) => !!v || 'Senha é obrigatório',
      ],
      email: '',
      emailRules: [
(        v: any) => !!v || 'E-mail é obrigatório',
(        v: string) => /.+@.+/.test(v) || 'E-mail inválido',
      ],
    }),
  methods: {
    clear() {
      this.email = ''
      this.usuario = ''
      this.senha = ''
    },
    login(){
    },
    register(){
    }
  }

})
</script>