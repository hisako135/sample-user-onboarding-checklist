<template>
  <v-container
    fluid>
    <v-layout
      text-xs-center
      wrap
    >
      <h1>Check List</h1>
      <v-flex xs12>
        <p v-if="todoCount <= 4 && unDoneTodosCount >= 1">{{todoCount - unDoneTodosCount}}/{{todoCount}} 個の設定が完了しています。</p>
        <p v-else>全ての設定が完了しました！</p>
        <v-list two-line>
          <template v-for="item in items">
            <v-list-tile
              :key="item.id"
              :to="'/page'+ item.id"
              :disabled="item.done">
              <v-list-tile-action>
                <v-icon disabled v-if="!item.done">check_circle_outline</v-icon>
                <v-icon color="teal" v-else>check_circle</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                <v-list-tile-sub-title>hogehogehoge</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: function(){
    return {
      items: this.$store.state.todos
    }
  },
  computed: {
    todoCount() {
      return Object.keys(this.$store.state.todos).length
    },
    unDoneTodosCount() {
      return this.$store.getters.unDoneTodosCount
    }
  }
}
</script>

<style scoped>
body {
  background-color: #000;
}
.v-list__tile {
  border-bottom: 1px solid #ccc;
}
</style>