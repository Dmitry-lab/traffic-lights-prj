<template>
  <div class="traffic-lights">
    <traffic-lamp color="red" :activeLight="activeLight" :timer="counter"/>
    <traffic-lamp color="yellow" :activeLight="activeLight" :timer="counter"/>
    <traffic-lamp color="green" :activeLight="activeLight" :timer="counter"/>
  </div>
</template>

<script>
import TrafficLamp from './TrafficLamp.vue';
import { lightsSpec } from '../../utils/data';

const TIMER_INTERVAL = 1000;

export default {
  components: {
    TrafficLamp
  },

  props: {
    activeLight: {
      type: String,
      required: true
    }
  },

  mounted() {
    const savedState = JSON.parse(localStorage.getItem('saved-state'))
    this.counter = savedState?.color === this.activeLight
      ? savedState.counter
      : lightsSpec[this.activeLight].timer
    setInterval(this.countdown, TIMER_INTERVAL)
  },

  data() {
    return {
      counter: 0
    }
  },

  methods: {
    countdown() {
      this.counter--;
    }
  },

  watch: {
    counter(newValue) {
      const savedState = {
        counter: newValue,
        color: this.activeLight,
        prevLight: this.$route.params?.prevLight
      }

      localStorage.setItem('saved-state', JSON.stringify(savedState))

      if (newValue === 0) {
        this.activeLight === 'red' || this.activeLight === 'green'
          ? this.$router.push({name: 'Yellow', params: {prevLight: this.activeLight}})
          : this.$route.params?.prevLight === 'green'
            ? this.$router.push('/red')
            : this.$router.push('/green')
      }
    }
  }
}
</script>

<style scoped>
  .traffic-lights {
    background-color:  #1c1c21;
    height: 800px;
    width: 250px;
    flex-shrink: 0;
    flex-grow: 0;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
