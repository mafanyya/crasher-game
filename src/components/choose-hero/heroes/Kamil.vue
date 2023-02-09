<template>
  <div class="hero">
    <div class="hero-img">
      <img :src="heroImg" alt="">
    </div>
    <p class="name">{{ heroName }}</p>
    <p>HP: {{ heroHp }}</p>
    <p>Attack: {{ maxHeroAttack }}</p>
    <button class="choose-btn" @click="confirm">Choose</button>
  </div>
</template>
<style>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

.hero .hero-img {
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
}

.hero .hero-img img {
  object-fit: inherit;
  width: 100%;
  height: 100%;
}

.hero .choose-btn {
  height: 60px;
  width: 150px;
  border: 3px solid #084f08;
  border-radius: 40px;
  background-color: #379d35;
  color: white;
  font-family: Lacquer, serif;
  font-size: 30px;
  transform: rotate(-8deg);
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.hero .choose-btn:hover {
  border: 3px solid #084f08;
  background-color: #226422;
  transform: rotate(2deg);
}

.hero .name {
  font-size: 40px;
  color: #752828;
}

.hero p {
  font-size: 20px;
}

</style>
<script>

import {db} from '@/firebase'
import {doc, getDoc, setDoc, updateDoc} from "firebase/firestore"
import router from "../../../../router";

export default {
  methods: {
    async confirm() {
      const heroRef = doc(db, 'heroes', '0');
      await updateDoc(heroRef, {
        name: this.hero.name,
        hp: this.hero.hp,
        attack: this.hero.attack,
        super: this.hero.super,
        hill: this.hero.hill,
        healValue: this.hero.healValue,
        superAttackValue: this.hero.superAttackValue,
        money: this.hero.money,
        img0: this.hero.img0,
        img25: this.hero.img25,
        img50: this.hero.img50,
        img75: this.hero.img75,
        img100: this.hero.img100,
        img101: this.hero.img101
      });
      await router.push({name: 'levels'})
      location.reload()
    }
  },
  data() {
    return {
      hero: null,
      heroImg: null,
      heroName: null,
      maxHeroAttack: null,
      heroHp: null,
      confirm: this.confirm
    }
  },
  async mounted() {
    const ref = doc(db, "heroes", "3")
    const docSnap = await getDoc(ref)
    const hero = docSnap.data()
    this.hero = hero

    const heroName = hero.name
    this.heroName = heroName

    const heroHp = hero.hp
    this.heroHp = heroHp

    const heroImg = hero.img101
    this.heroImg = heroImg

    const maxHeroAttack = hero.attack
    this.maxHeroAttack = maxHeroAttack

  }
}
</script>