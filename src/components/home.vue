<template>
    <v-container fluid>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                            Nome
                        </th>
                        <th class="text-left">
                            Idade
                        </th>
                        <th class="text-left">
                            Resultado
                        </th>
                        <th class="text-left">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <List 
                    v-for="list in listPatients" 
                    :key="list.id"
                    :id="list.id"
                    :nome="list.nome"
                    :idade="list.idade"
                    :teste="list.teste"
                     @atualizarLista="atualizarLista"
                    />
                        
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
  
</template>

<script>

import List from './list'
//import Vue from 'vue'
import axios from 'axios'
//import Swal from 'sweetalert2';

export default {
    components:{
        List
    },
    data: function() {
        return {
            listPatients: [{id : 1, nome:'Diogo Cesar',idade : 33, teste: 'Positivo'}]
        }
    },
    methods: {
        atualizarLista(){
            axios
         .get('http://localhost:3000/pacientes/').then(response => (
                this.listPatients = response.data.resultado
                )
            )
        }
    },
    mounted () {
        axios
         .get('http://localhost:3000/pacientes/',{
            headers: {
            // remove headers
            }
        }).then(response => (
            this.listPatients = response.data.resultado
            )
        )
    }
}
</script>

<style>

</style>