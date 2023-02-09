<template>
  <img class="background" src="src/assets/images/background.svg" alt="">
  <div class="container-inner">
    <router-view></router-view>
  </div>
  <img class="eraser" src="src/assets/images/eraser.svg" alt="">
  <img class="pencil" src="src/assets/images/pencil.svg" alt="">
  <img class="pencil2" src="src/assets/images/pencil2.svg" alt="">
  <img class="pencil3" src="src/assets/images/pencil3.svg" alt="">
</template>
<style>
body {
  --color-background: #4B9649;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  margin: 0 auto;
  width: 1270px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
}

.background {
  width: 1263.5px;
  height: 805.5px;
  top: 20px;
}

.container-inner {
  position: absolute;
  width: 960px;
  height: 700px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  top: 93px;
  left: 150px
}

.content {
  width: 100%;
  height: 100%;
  background-color: white;
}

.pencil3 {
  position: absolute;
  left: -170px;
  bottom: 50px;
  transform: rotate(50deg);
  scale: 120%;
}

.eraser {
  position: absolute;
  left: -130px;
  top: 50px;
  transform: rotate(10deg);
}

.pencil {
  position: absolute;
  right: -180px;
  bottom: 60px;
  transform: rotate(10deg);
  scale: 120%;
}

.pencil2 {
  position: absolute;
  right: -180px;
  top: 100px;
  transform: rotate(-40deg);
  scale: 120%;
}
</style>
