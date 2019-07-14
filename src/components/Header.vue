<template>
  <v-toolbar
    dark
    fixed
    app>
    <v-toolbar-side-icon @click.stop="alick"></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>Vuetify</span>
      <span class="font-weight-light">MATERIAL DESIGN</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2">Latest Release</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    //drawer: null
  }),
  methods: {
    alick() {
      this.$emit('slick')
    }
  },
}
</script>