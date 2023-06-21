<template>
  <div>
    <button @click="openTimePicker">Open Time Picker</button>
    <input
        ref="timePicker"
        type="time"
        style="position: absolute; left: -9999px;"
        @input="handleTimePickerInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    selectedTime: {
      type: String,
      default: '',
    },
  },
  methods: {
    openTimePicker() {
      this.$refs.timePicker.click();
    },
    handleTimePickerInput(event) {
      const selectedTime = event.target.value;
      this.$emit('update:selectedTime', selectedTime);
    },
  },
};
</script>
