<script>

export default {
  components: {
  },
  data() {
    return {
      selectedTime: '',
      difference: 0,
      pourcentageRemaining: 0,
    };
  },
  mounted() {
    const sleepTime = localStorage.getItem('sleepTime');
    if (sleepTime) {
      this.selectedTime = sleepTime;
    }
    this.startTimer();
    setInterval(() => {
      this.calculateRemaining();
    }, 1000 * 60);
  },
  methods: {
    wakeUpTime() {
      const sleepTime = new Date();
      const [hours, minutes] = this.selectedTime.split(':');
      sleepTime.setHours(hours);
      sleepTime.setMinutes(minutes);
      sleepTime.setSeconds(0);
      const now = new Date();
      // if hour from selectedTime is less than current hour, add 24 hours
      if (sleepTime.getHours() < now.getHours()) {
        sleepTime.setHours(sleepTime.getHours() + 24);
      }
      return sleepTime;
    },
    goToSun() {
      this.$router.push('/');
    },
    startTimer() {
      const sleepTime = this.wakeUpTime();
      const now = new Date();
      this.difference = sleepTime.getTime() - now.getTime();
      // print how many hours and minutes until sleep time
      const hoursUntilSleep = Math.floor(this.difference / 1000 / 60 / 60);
      const minutesUntilSleep = Math.floor(this.difference / 1000 / 60) - (hoursUntilSleep * 60);
      console.log(`Sleeping in ${hoursUntilSleep} hours and ${minutesUntilSleep} minutes`);
      setTimeout(() => {
        this.$refs.moonSection.classList.add('moon-transition-to-sun');
        this.$refs.progressBar.classList.add('is-hidden');
        // Wait for transition to finish
        setTimeout(() => {
          this.goToSun()
        }, 9000);
      }, this.difference);
    },
    calculateRemaining() {
      const now = new Date();
      this.pourcentageRemaining = ((this.difference - (this.wakeUpTime().getTime() - now.getTime())) / this.difference * 100).toFixed(0);
    }
  }
}
</script>

<template>
  <section ref="moonSection" class="moon-section section is-fullwidth is-fullheight has-text-centered">
    <div class="columns is-mobile">
      <div class="column is-vcentered">
        <span ref="moonIcon" class="icon moon big-icon">
          <ion-icon name="moon-outline"></ion-icon>
        </span>
      </div>
      <div class="column">
        <div class="block is-vcentered has-text-centered p-6">
          <div class="field is-grouped is-justify-content-center">
            <p class="control">
              <button class="button is-outlined has-text-grey is-large is-rounded invisible-background" @click="goToSun()">
                <span class="icon is-large">
                  <ion-icon name="close-outline"></ion-icon>
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
    <progress ref="progressBar" class="progress is-small" :value="pourcentageRemaining" max="100"></progress>
  </section>
</template>

<style scoped>
.moon-section {
  background-color: #0d1221;
}

.invisible-background {
  background-color: transparent;
}

.moon-transition-to-sun {
  animation-name: colorTransition;
  animation-duration: 10s;
  animation-fill-mode: forwards;
}

.moon {
  color: #3a4861;
}

.progress {
  border: 1px solid #3a4861;
}

.progress::-webkit-progress-bar {
  background-color: #0d1221;
}

.progress::-webkit-progress-value {
  background-color: #3a4861;
}

@keyframes colorTransition {
  0% {
    background-color: #0d1221;
  }
  100% {
    background-color: #ffffcc;
  }
}
</style>
