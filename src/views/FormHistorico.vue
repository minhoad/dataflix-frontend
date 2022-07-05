<template>
  <form-historico />
</template>

<script lang="ts">
import Vue from 'vue'
import FormHistorico from '../components/FormHistorico.vue'

export default Vue.extend({
  name: 'Historico',

  components: {
    FormHistorico
  }
})
</script>
