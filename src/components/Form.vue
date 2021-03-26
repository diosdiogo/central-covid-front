<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="form-new-patiente"
    >

    <v-text-field
        v-model="name"
        :counter="40"
        :rules="nameRules"
        label="Name"
        required
        ></v-text-field>

    <v-text-field
        v-model="idade"
        :rules="idadeRules"
        label="Idade"
        type="number"
        required
        ></v-text-field>

        <v-select
        v-model="teste"
        :items="item"
        :rules="[v => !!v || 'teste é obrigatório']"
        label="Teste"
        required
        ></v-select>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Salvar
        </v-btn>

    </v-form>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {

    data: () => ({

        valid: true,
        name: '',
        nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length <= 40) || 'O nome é maior que 40 carácteres',
      ],

      idade: '',
      idadeRules: [
        v => !!v || 'A idade é obrigatório',
      ],
      teste: 'Negativo',
      item: [
        'Positivo',
        'Negativo',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
        if(this.name != '' && this.idade != ''){
          const data = {'nome': this.name, 'idade':  this.idade, 'teste':this.teste}
          
           axios
            .post('http://localhost:3000/pacientes/',data ).then(response => (
                Swal.fire({
                  type: "success",
                  html: `Paciente Cadastrado`,
                }),
                this.$emit('atualizarLista')
              )
            )
           this.$router.go(-1);
        }
        
      }

    },

}
</script>

<style>
    .form-new-patiente{
        margin-top: 80px;
    }
</style>