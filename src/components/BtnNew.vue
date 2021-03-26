<template>
    <div>
        <v-btn
            class="mx-1"
            fab
            dark
            small
            color="indigo"
            v-if='show'
            to="/new"
        >
            <v-icon dark>
                mdi-plus
            </v-icon>
        </v-btn>
        
    </div>
  
</template>

<script>
export default {
    props: ['show'],
}
</script>

<style>

</style>