<template>
    <filmes/>
</template>

<script lang="ts">
import Vue from 'vue'
import Filmes from '@/components/Filmes.vue'
import DataflixApp from '@/components/DataflixApp.vue'

export default Vue.extend({
    name: 'Filme',
    components: {
        Filmes,
        DataflixApp
    }
})
</script>