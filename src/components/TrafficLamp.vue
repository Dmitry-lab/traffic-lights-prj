<template>
  <div
    class="lamp"
    :class="fitStyles"
  >
    <span v-if="isActive" class="lamp__timer">{{timer}}</span>
  </div>
</template>

<script>
const BLINK_TIME = 3;

export default {
  props: {
    color: {
      type: String,
      required: true
    },
    activeLight: {
      type: String,
      required: true
    },
    timer: {
      type: Number,
      required: true
    }
  },

  computed: {
    isActive() {
      return this.color === this.activeLight
    },

    fitStyles() {
      return {
        'lamp_red': this.color === 'red',
        'lamp_yellow': this.color === 'yellow',
        'lamp_green': this.color === 'green',
        'lamp_active': this.isActive,
        'lamp_blink': this.timer <= 3 && this.isActive
      }
    }
  }
}
</script>

<style scoped>
  @keyframes blink {
    from {
      opacity: 1;
      filter: drop-shadow(0 0 20px);
    }
    to {
      opacity: .3;
      filter: none;
    }
  }

  .lamp {
    width: 200px;
    height: 200px;
    margin: 25px;
    border-radius: 50%;
    flex-grow: 0;
    flex-shrink: 0;
    opacity: .3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lamp_green {
    color: #00ab41;
    background-color: #00ab41;
  }

  .lamp_yellow {
    color: #fdfa00;
    background-color: #fdfa00;
  }

  .lamp_red {
    color: #eb3d00;
    background-color: #eb3d00;
  }

  .lamp_active {
    opacity: 1;
    filter: drop-shadow(0 0 20px)
  }

  .lamp_blink {
    animation: blink .4s linear 0s infinite alternate both;
  }

  .lamp__timer {
    color: #1c1c21;
    font-size: 50px;
    font-family: Helvetica, sans-serif;
  }

</style>>
