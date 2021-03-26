<template>
    <v-app-bar app color="primary" dark>
        <v-toolbar-title>Central Covid</v-toolbar-title>
        <v-spacer></v-spacer>
        <BtnNew :show='BtnNew' />
        <BtnSave :show='BtnSave' />
    </v-app-bar>
</template>

<script>

import BtnNew from '@/components/BtnNew'
import BtnSave from '@/components/BtnSave'

export default {
  props:['BtnNew', 'BtnSave'],

 components: {
    BtnNew,
    BtnSave

  },

}
</script>

<style>

</style>