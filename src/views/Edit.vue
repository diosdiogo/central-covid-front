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
    //import axios from 'axios';

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
        this.id = this.pacienteId
    }

}
</script>

<style>

</style>