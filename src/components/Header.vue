<template>
  <v-toolbar
    dark
    fixed
    app>
    <v-toolbar-side-icon @click.stop="alick"></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>LOGO</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge
      color="error"
      overlap>
      <template v-slot:badge>{{unDoneTodos}}</template>
      <v-btn
        color="primary"
        to="/checklist"
      >
        <span>guide</span>
      </v-btn>
    </v-badge>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span>setting</span>
    </v-btn>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span>account</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    alick() {
      this.$emit('slick')
    }
  },
  computed: {
    unDoneTodos() {
      return this.$store.getters.unDoneTodosCount
    }
  }
}
</script>