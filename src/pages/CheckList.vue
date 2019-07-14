<template>
  <v-container
    fluid
    fill-height>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-list>
          <v-list-tile to="/page1">
            <v-list-tile-action>
              <v-icon>check</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Page1</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Check-list"
  }
</script>