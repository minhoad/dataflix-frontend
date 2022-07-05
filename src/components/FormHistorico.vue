<template>
    <container>
        <dataflix-app-vue></dataflix-app-vue>
        
        <div>
            <v-row class="mt-5">
                <v-col class="mt-15 ml-10">
                    <h2 class="mb-3"> Historico de filmes </h2>
                    <v-progress-linear color="black" class="mb-3" length="100px"></v-progress-linear>
                </v-col>
            </v-row>
        </div>
    </container>
</template>


<script lang="ts">
    import Vue from 'vue'
    import DataflixAppVue from '@/components/DataflixApp.vue'

    export default Vue.extend({
        name: 'Historico',

        data: function (){
            return {
                
            }
        },
        components: {
        DataflixAppVue
    }
    })
</script>