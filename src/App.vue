<template>
  <v-app>
    <Drawer
      v-model="drawer"/>
    <Header
      @slick="click"/>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Drawer from './components/Drawer'

export default {
  name: 'App',
  components: {
    Header,
    Drawer
  },
  data () {
    return {
      drawer: null,
    }
  },
  methods: {
    click() {
      return this.drawer = !this.drawer;
    },
  },
}
</script>
