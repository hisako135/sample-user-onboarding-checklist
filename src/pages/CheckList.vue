<template>
  <v-container
    fluid
    fill-height>
    <v-layout
      text-xs-center
      wrap
    >
      <h1>Check List</h1>
      <v-flex xs12>
        <v-list>
          <v-list-tile
            to="/page1"
            :disabled="$store.state.todos[0].done">
            <v-list-tile-action>
              <div v-if="!$store.state.todos[0].done">
                <v-icon disabled>check_circle_outline</v-icon>
              </div>
              <div v-else>
                <v-icon color="teal">check_circle</v-icon>
              </div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{$store.state.todos[0].text}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    mounted() {
      console.log(Object.keys(this.$store.state).length)
    }
  }
</script>