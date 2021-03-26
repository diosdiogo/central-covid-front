<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="form-new-patiente"
    >

    
    <v-text-field
        v-model="nameParc"
        :counter="40"
        :rules="nameRules"
        label="Nome"
        required
        ></v-text-field>

    <v-text-field
        v-model="idadePac"
        :rules="idadeRules"
        label="Idade"
        type="number"
        required
        ></v-text-field>

        <v-select
        v-model="testePac"
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
    props: ['id','nome','idade','teste'],

    data: () => ({
        valid: true,
        nameParc: '',
        nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length <= 40) || 'O nome é maior que 40 carácteres',
        ],

        idadePac: '',
        idadeRules: [
            v => !!v || 'A idade é obrigatório',
        ],
        testePac: 'Negativo',
        item: [
            'Positivo',
            'Negativo',
        ],
    }),
    

    methods: {
      validate () {
        this.$refs.form.validate()
        if(this.name != '' && this.idade != ''){
            const data = {'nome': this.nome, 'idade':  this.idade, 'teste':this.teste, 'id': this.id}
          if(this.id != 0){
            axios
              .patch('http://localhost:3000/pacientes/',data).then(response => (
                    Swal.fire({
                        type: "success",
                        html: `Paciente Cadastrado`,
                    })
                )
              )

              
          }
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