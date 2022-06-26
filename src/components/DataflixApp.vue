<template>
  <v-app-bar absolute color="primary" dark scroll-target="#scrolling-techniques-2">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title>Dataflix</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DataflixApp',
  components: {
  },
  data: () => ({

  }),
  methods: {
  }

})
</script>