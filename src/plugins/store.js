import Vue from 'vue'
import Vuex from 'vuex'
// actions
// getters
// mutations

Vue.use(Vuex)

const state = {
  todos: [
    {id: 1, text: 'Page1 Todo', done: false},
    {id: 2, text: 'Page2 Todo', done: false},
    {id: 3, text: 'Page3 Todo', done: false},
    {id: 4, text: 'Page4 Todo', done: false}
  ]
}

export default new Vuex.Store({
  state,
  getters: {
    unDoneTodos: state => {
        return state.todos.filter(todo => !todo.done)
    },
    unDoneTodosCount: (state, getters) => {
        return getters.unDoneTodos.length
    }
  }
})