<template>
  <v-badge
    v-if="todoCount <= 4 && unDoneTodosCount >= 1"
    color="error"
    overlap
    ref="badgeAnim"
    :class={animation:animation}>
    <template v-slot:badge>{{unDoneTodosCount}}</template>
    <v-btn
      color="primary"
      to="/checklist"
    >
      <span>setup guide</span>
    </v-btn>
  </v-badge>
  <v-btn
    v-else
    color="primary"
    to="/checklist"
  >
    <span>setup guide</span>
  </v-btn>
</template>

<script>
export default {
  name: 'GuideBtn',
  data: () => ({
    animation: false
  }),
  computed: {
    todoCount() {
      return Object.keys(this.$store.state.todos).length
    },
    unDoneTodosCount() {
      return this.$store.getters.unDoneTodosCount
    }
  },
  watch: {
    unDoneTodosCount() {
      this.addAnimationClass()
    }
  },
  mounted() {
    this.$refs.badgeAnim.$el.addEventListener(
      'animationend',
      this.removeAnimationClass
    )
  },
  destroyed: function () {
    this.$refs.badgeAnim.$el.removeEventListener(
      'animationend',
      this.removeAnimationClass   
    )
  },
  methods: {
    addAnimationClass() {
      this.animation = true
    },
    removeAnimationClass() {
      this.animation = false
    }
  }
}
</script>

<style>
.animation {
  animation: hoverShake 0.6s alternate 1;
}

@keyframes hoverShake {
  25% {transform: translateY(-5px);}
  50% {transform: translateY(0px);}
  75% {transform: translateY(-2px);}
  100% {transform: translateY(0px);}
}
</style>