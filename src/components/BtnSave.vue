<template>
        <v-btn
            class="mx-1"
            fab
            dark
            small
            color="indigo"
            v-if='show'
           to="/"
        >
            <v-icon dark>
                mdi-arrow-left
            </v-icon>
        </v-btn>
</template>

<script>
export default {
    props: ['show'],

    methods:{
        
    }

}
</script>

<style>

</style>