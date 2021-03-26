<template>
    <div>
        <Toolbar :BtnNew=true :BtnSave=false />
        <v-content>
            <home />
        </v-content>
    </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Home from '@/components/home'
export default {
  name: 'App',

  components: {
    Toolbar,
    Home,
  },

  data: () => ({
    
  }),
};
</script>