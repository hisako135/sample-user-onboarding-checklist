<template>
  <v-container
    fluid>
    <v-layout
      wrap
    >
      <h1>Page3</h1>
      <v-flex xs12 text-xs-center>
        <v-btn
          color="primary"
          :disabled="this.$store.state.todos[2].done"
          @click="done">
          DONE
        </v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Page3",
    methods: {
      done() {
        return this.$store.state.todos[2].done = !this.$store.state.todos[2].done;
      }
    }
  }
</script>

<style>

</style>
