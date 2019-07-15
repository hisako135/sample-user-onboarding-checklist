<template>
  <v-toolbar
    light
    fixed
    app>
    <v-toolbar-side-icon @click.stop="alick"></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>LOGO</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <GuideBtn/>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span>help</span>
    </v-btn>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span>settings</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
import GuideBtn from './GuideBtn'

export default {
  name: 'Header',
  components: {
    GuideBtn
  },
  methods: {
    alick() {
      this.$emit('slick')
    }
  }
}
</script>