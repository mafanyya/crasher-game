<template>
  <div class="bar">
    <div id="progress" class="progress" ref="progress"
         :style="{width: getPercent.percent, backgroundColor: setStyles.color, borderTopRightRadius: setStyles.border, borderBottomRightRadius: setStyles.border}">
      <p :style="{visibility: setStyles.visibility}">{{ hp }}</p>
    </div>
  </div>
</template>
<style>
.bar {
  border: none;
  width: 280px;
  height: 30px;
  border-radius: 50px;
  background-color: #dcdce1;
}

.progress {
  height: 100%;
  width: 75%;
  background-color: #d5b44e;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
<script>
export default {
  props: {
    percent: Number,
    hp: Number,
  },
  computed: {
    getPercent() {
      let percent = this.percent + "%"
      return {
        percent
      }
    },
    setStyles() {
      if (this.percent >= 100) {
        this.color = "#46B478"
        this.border = "50px"
      }
      if (this.percent < 100 && this.percent >= 91) {
        this.color = "#46B478"
        this.border = "0"
        this.visibility = "visible"
      }
      if (this.percent <= 90 && this.percent >= 80) {
        this.color = "#93DA39"
      }
      if (this.percent <= 79 && this.percent >= 64) {
        this.color = "#CDE82C"
      }
      if (this.percent <= 63 && this.percent >= 48) {
        this.color = "#FAF235"
      }
      if (this.percent <= 47 && this.percent >= 32) {
        this.color = "#EBC335"
      }
      if (this.percent <= 31 && this.percent >= 16) {
        this.color = "#E49C30"
      }
      if (this.percent <= 15) {
        this.color = "#E35528"
      }
      if (this.percent < 1) {
        this.visibility = "hidden"
      }
      return {
        color: this.color,
        border: this.border,
        visibility: this.visibility
      }

    }

  }
}
</script>