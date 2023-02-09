<template>
  <div class="icon" :style="{backgroundColor: color, borderColor: border,  }">
    <a class="icon-link">{{ level }}</a>
  </div>
</template>
<style>
.icon {
  width: 120px;
  height: 120px;
  border: 5px solid #bea318;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: #e3c616;
}

.icon:hover {
  background-color: v-bind(hover);
  transform: rotate(-3deg);

}

a:-webkit-any-link {
  text-decoration: none;
  color: white;
}
</style>
<script>
export default {
  props: {
    level: Number,
    color: String,
    border: String,
    hover: String

  }
}
</script>