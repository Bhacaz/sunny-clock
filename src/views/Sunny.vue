<script>

export default {
  components: {
  },
  data() {
    return {
      selectedTime: '',
    };
  },
  mounted() {
    const sleepTime = localStorage.getItem('sleepTime');
    if (sleepTime) {
      this.selectedTime = sleepTime;
    }
  },
  methods: {
    triggerTimePicker() {
      this.$refs.timePicker.showPicker();
    },
    saveSleepTime() {
      localStorage.setItem('sleepTime', this.selectedTime);
    },
    goToMoon() {
      this.$router.push('/moon');
    }
  }
}
</script>

<template>
  <section class="sun-section section is-fullwidth is-fullheight has-text-centered">
    <div class="columns is-mobile">
      <div class="column is-vcentered">
        <span class="icon sun big-icon">
          <ion-icon name="sunny-outline"></ion-icon>
        </span>
      </div>
      <div class="column">
        <div class="block is-vcentered has-text-centered p-6">
          <div class="field is-grouped is-justify-content-center">
            <p class="control">
              <button class="button is-outlined has-text-grey-light is-large is-rounded has-background-white" @click="triggerTimePicker()">
                <span class="icon is-large">
                  <ion-icon name="alarm-outline"></ion-icon>
                </span>
              </button>
            </p>
            <p class="control">
              <button class="button is-outlined is-primary has-background-white is-large is-rounded" @click="goToMoon()">
                <span class="icon is-large">
                  <ion-icon name="play-outline"></ion-icon>
                </span>
              </button>
            </p>
          </div>
        </div>
        <div class="block">
          <h3 class="title is-3 has-text-grey">{{selectedTime}}</h3>
        </div>
      </div>
    </div>
    <input @input="saveSleepTime()" ref="timePicker" type="time" v-model="selectedTime" class="is-hidden">
  </section>
</template>

<style scoped>
.sun-section {
  background-color: #ffffcc;
}

.sun {
  color: #efef6a;
}
</style>
