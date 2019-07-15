<template>
  <v-container
    fluid>
    <v-layout
      wrap
    >
      <h1>Page4</h1>
      <v-flex xs12 text-xs-center>
        <v-btn
          color="primary"
          :disabled="this.$store.state.todos[3].done"
          @click="done">
          DONE
        </v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Page4",
    methods: {
      done() {
        return this.$store.state.todos[3].done = !this.$store.state.todos[3].done;
      }
    }
  }
</script>

<style>

</style>
