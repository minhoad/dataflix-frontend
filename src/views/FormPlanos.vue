<template>
  <form-planos />
</template>

<script lang="ts">


import Vue from 'vue'
import FormPlanos from '../components/FormPlanos.vue'

export default Vue.extend({
  name: 'Planos',

  components: {
    FormPlanos
  }
})
</script>
