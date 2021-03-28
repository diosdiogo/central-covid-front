<template>
  <tr>
        <td>{{ nome }}</td>
        <td>{{ idade }}</td>
        <td>
            <v-chip
                class="ma-2"
                color="red"
                text-color="white"
                v-if="teste=='Positivo'"
                >
                {{ teste }}
            </v-chip>

             <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                v-else-if="teste=='Negativo'"
                >
                {{ teste }}
            </v-chip>

        </td>
        <td>
            <v-speed-dial
                v-model="fab"
                :top="top"
                :bottom="bottom"
                :right="right"
                :left="left"
                :direction="direction"
                :open-on-hover="hover"
                :transition="transition"
                 class="btn-edit-pacient">
                <template v-slot:activator>
                    <v-btn
                    v-model="fab"
                    color="blue darken-2"
                    dark
                    fab
                    small
                    >
                        <v-icon v-if="fab">
                            mdi-close
                        </v-icon>
                        <v-icon v-else>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                </template>
                <v-btn
                    fab
                    dark
                    small
                    color="green"
                    :to="{ name: 'edit', params: { id: id }}"
                >
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                    fab
                    dark
                    small
                    color="red"
                    @click="deletar(id)"
                >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-speed-dial>
        </td>
  </tr>
</template>

<script>
import axios from 'axios';
//import Swal from 'sweetalert2';

export default {
    props: ['id','nome','idade','teste'],

    data: () => ({
        direction: 'left',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: false,
        bottom: true,
        left: true,
        transition: 'slide-y-reverse-transition',

    }),
    methods:{
        deletar(id){
             axios
            .delete('http://localhost:3000/pacientes/'+id)
            .then(
                 this.$emit("atualizarLista")
            )
            
        }
    }
}
</script>

<style scoped>
    .btn-edit-pacient{
        margin-top: 23px; 
    }
</style>