<template>
  <v-badge
    color="error"
    overlap
    :class={animation:animation}>
    <template v-slot:badge>{{unDoneTodosCount}}</template>
    <v-btn
      color="primary"
      to="/checklist"
    >
      <span>guide</span>
    </v-btn>
  </v-badge>
</template>

<script>
import { setInterval } from 'timers';
export default {
  name: 'GuideBtn',
  data: () => ({
    animation: false
  }),
  computed: {
    unDoneTodosCount() {
      return this.$store.getters.unDoneTodosCount
    }
  },
  watch: {
    unDoneTodosCount() {
      this.addAnimation()
    }
  },
  methods: {
    addAnimation() {
      return setInterval(this.animation = true, 1000)
    },
    animationState() {
      return this.animation = true;
    }
  }
}
</script>

<style>
.animation {
  animation: hoverShake 0.6s alternate 1;
}

@keyframes hoverShake {
  /* 0% {transform: skew(0deg,0deg);}
  25% {transform: skew(2deg, 2deg);}
  75% {transform: skew(-2deg, -2deg);}
  100% {transform: skew(0deg,0deg);} */
  0% {transform: translateY(0px);}
  25% {transform: translateY(-5px);}
  50% {transform: translateY(0px);}
  75% {transform: translateY(-2px);}
  100% {transform: translateY(0px);}
}
</style>