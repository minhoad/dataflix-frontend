<template>
  <form-cadastro />
</template>

<script lang="ts">
import Vue from 'vue'
import FormCadastro from '../components/FormCadastro.vue'

export default Vue.extend({
  name: 'Cadastro',

  components: {
    FormCadastro
  }
})
</script>
