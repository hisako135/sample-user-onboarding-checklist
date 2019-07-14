<template>
  <v-container
    fluid
    fill-height>
    <v-layout
      wrap
    >
      <h1>Page1</h1>
      <v-flex xs12 text-xs-center>
        <v-btn
          color="primary"
          :disabled="this.$store.state.todos[0].done"
          @click="done">
          DONE
        </v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Page1",
    methods: {
      done() {
        return this.$store.state.todos[0].done = !this.$store.state.todos[0].done;
      }
    }
  }
</script>

<style>

</style>
