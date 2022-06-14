<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
            <v-text-field
               v-model="usuario"
               :rules="usuarioRules"
               :counter="50"
               label="Usuário*"
               required
            ></v-text-field>
      </v-row>
      <v-row>
         <v-text-field
            v-model="senha"
            :rules="senhaRules"
            label="Senha*"
            required
         ></v-text-field>
      </v-row>
      <v-row>
         <v-text-field
            class=""
            v-model="email"
            :rules="emailRules"
            label="E-mail*"
            required
         ></v-text-field>
      </v-row>
      <v-row>
         <v-btn
            color="primary"
            elevation="2"
            large
            raised>
         Login
         </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>
<script lang="ts"> 
import Vue from 'vue'

export default Vue.extend({
  name: 'FormLogin',
  components: {
  },
  data: () => ({
      valid: false,
      usuario: '',
      senha: '',
      usuarioRules: [
        v => !!v || 'Usuário é obrigatório',
        v => v.length <= 50 || 'Usuário deve conter no máximo 50 caracteres',
      ],
      senhaRules: [
        v => !!v || 'Senha é obrigatório',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+/.test(v) || 'E-mail inválido',
      ],
    }),
  methods: {
      submit() {
      const valid = this.$refs.observer.validate()
      if (valid) {
        this.login(this.params) // action to login
      }
    },
    clear() {
      // you can use this method to clear login form
      this.email = ''
      this.senha = null
      this.$refs.observer.reset()
    }
  }

})
</script>