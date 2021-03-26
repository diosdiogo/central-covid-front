<template>
  <div>
        <Toolbar :BtnNew=false :BtnSave=true />
        
         <v-container fluid>
             <FormEdit 
                :id="id"
                :nome="nome"
                :idade="idade"
                :teste="teste"
            />
         </v-container>


  </div>
</template>

<script>
    import Toolbar from '@/components/Toolbar'
    import FormEdit from '@/components/FormEdit'
    import axios from 'axios';

export default {
    components: {
        Toolbar,
        FormEdit
    },

    data()
    {
        return{
            pacienteId:[],
            id:0,
            nome:'',
            idade:'',
            teste:''
        }
    },
    created(){
        this.pacienteId = this.$route.params.id;
        
         axios
            .get('http://localhost:3000/pacientes/'+ this.pacienteId, ).then(response => (
                this.result = response.data.resultado[0],
                this.idade = this.result.idade,
                this.id= this.result.id,
                this.nome = this.result.nome,
                this.teste = this.result.teste
            )
            )
    }

}
</script>

<style>

</style>