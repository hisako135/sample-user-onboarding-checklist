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
          :disabled="state"
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
    data: () => ({
      state: false,
    }),
    methods: {
      done() {
        return this.state = !this.state;
      }
    }
  }
</script>

<style>

</style>
