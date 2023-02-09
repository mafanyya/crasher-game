<template>
  <div class="content">
    <p class="header">Your hero is </p><br>
    <div class="hero">
      <div class="hero-img">
        <img :src="hero.img101" alt="">
      </div>
      <p class="name">{{ hero.name }}</p><br>
      <p>hp: {{ hero.hp }}</p><br>
      <p>attack: {{ hero.attack }}</p>
    </div>
    <div class="btns">
      <div class="btn1">
        <button @click="$router.push({name: 'choose-hero'})">
          <img class="btn-img" src="src/assets/images/back-btn.svg" alt="">
        </button>
      </div>
      <div class="btn1">
        <button @click="$router.push({name: 'levels'})">
          <img class="btn-img" src="src/assets/images/ok-btn.svg" alt="">
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.hero {
  display: flex;
  justify-content: start;
}

.btns {
  display: flex;
  flex-direction: row;
}

.btn1 button {
  width: 100%;
  height: 100%;
  cursor: auto
}

.btn-img {
  cursor: pointer;
}
</style>
<script>
import {db} from '@/firebase'
import {doc, getDoc} from "firebase/firestore"

export default {

  data() {
    return {
      hero: null,

    }
  },
  async mounted() {
    const ref = doc(db, "heroes", "0")
    const docSnap = await getDoc(ref)
    const hero = docSnap.data()
    this.hero = hero
  }
}
</script>