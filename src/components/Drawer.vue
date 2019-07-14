<template>
  <v-navigation-drawer
      v-model="checkValue"
      fixed
      app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.link"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Drawer',
    props: {
      value: {
        type: Boolean,
        default: null,
      }
    },
    data :() => ({
      items: [
        { title: 'Home', icon: 'dashboard', link:"/" },
        { title: 'Page1', icon: 'question_answer',link:"/page1" }
      ],
      right: null
    }),
    computed: {
      checkValue: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit("input", val)
        }
      }
    }
  }
</script>