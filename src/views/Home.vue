<template>
    <div>
      <Banner />
      <div class="main-container">
      </div>
      <div>
        <v-row justify="center" width="80%">
            <v-expansion-panels accordion>
                <v-expansion-panel>
                    <v-expansion-panel-header>Quem somos</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Somos a Health Clinical, uma clínica geral consolidada, há mais de 10 anos no mercado.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>Nossos valores</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Prezamos pelo melhor atendimento, pelos melhores profissionais e garantimos ter as melhores tecnologias do mercado.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>Nossa missão</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        A clínica foi criada pelo médico Nasser, especializado em Omeopatia, ele tinha o intuito de introduzir no Brasil essa ciência, subestimada por muitos.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
        <Footer />
    </div>
    </div>
    
  </template>
  
  <script lang="ts">
  import Banner from '../components/Banner.vue'
  import Footer from '../components/Footer.vue'
  
  export default {
    name: 'Home',
    components: {
      Banner,
      Footer
    }
  }
  </script>