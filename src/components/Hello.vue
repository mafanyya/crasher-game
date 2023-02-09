<template>
  <div class="content">
    <div class="logo-img">
      <img :src="logo" alt="">
    </div>
    <button class="play-button" @click="$router.push({name: 'choose-hero'})">Play
    </button>
  </div>
</template>
<style>

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-img {
  margin-top: 75px;
  width: 90%;
  height: 40%;
}

.logo-img img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.play-button {
  border: 5px solid #a23232;
  border-radius: 80px;
  background-color: #c75151;
  height: 150px;
  width: 400px;
  color: white;
  font-family: Lacquer, serif;
  font-size: 90px;
  transform: rotate(-5deg);
  cursor: pointer;
}

.play-button:hover {
  border: 5px solid #b71d1d;
  background-color: #b92828;
  transform: rotate(-3deg);
}
</style>
<script>
import logo from '@/assets/images/logo.svg'

export default {
  data() {
    return {
      logo
    }
  }
}
</script>