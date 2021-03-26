<template>
    <div>
        <Toolbar :BtnNew=false :BtnSave=true />
        
        <v-container fluid>
           <From />
        </v-container>
    </div>
   
</template>

<script>
import Toolbar from '@/components/Toolbar'
import From from '@/components/Form'

export default {
    components: {
        Toolbar,
        From
    },

    
}
</script>

<style>

</style>