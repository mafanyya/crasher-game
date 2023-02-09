<template>

  <div class="content">
    <div class="cnt-inner" v-if="isWin === false && isLost === false">
      <div class="top-menu">
        <div class="clm1">
          <button class="back-btn" @click="$router.push({name:'levels'})">&lt--</button>
        </div>
        <div class="clm2">
          <p class="header">Level {{ num }}</p>
        </div>
        <div class="clm3"></div>
      </div>
      <div class="level-content">
        <div class="hero-content">
          <div class="level-img">
            <img :src="heroImg" alt="">
          </div>
          <p>{{ heroName }}</p>
          <ProgressBar :percent="heroHpPercent" :hp="currentHeroHp"/>
          <div class="hero-panel">
            <button class="attack-btn" @click="heroAttack">Attack</button>
            <button class="super-btn" @click="superAttack(heroSuperAttackValue)">
              <div class="btn-icon">
                <img src="src/assets/images/shop/superIcon.svg" alt="">
              </div>

              <p>Super {{ heroSuperAttack }}</p>
            </button>
            <button class="heal-btn" @click="heal(heroHealValue)">
              <div class="btn-icon">
                <img src="src/assets/images/shop/hillIcon.svg" alt="">
              </div>
              <p>Hill {{ heroHeal }}</p>
            </button>
          </div>
        </div>
        <div class="monster-content">
          <div class="level-img">
            <img :src="monsterImg" alt="">
          </div>
          <p>{{ monsterName }}</p>
          <ProgressBar :percent="monsterHpPercent" :hp="currentMonsterHp"/>
          <div class="event-panel">
            <p>{{ heroEvent }}</p>
            <p>{{ monsterEvent }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cnt-inner" v-if="isWin">
      <div class="level-end-content">
        <p class="title">You win!</p>
        <div class="heroImgLost">
          <img :src="monsterImgDead" alt="">
        </div>
        <p>Your loot is {{ lootName }}</p>
        <div class="lost-panel">
          <div class="lost-panel">
            <button class="back-btn" @click="$router.push({name: 'levels'})">Go to levels</button>
            <button class="try-again-btn" @click="reflesh">Play again</button>
          </div>
        </div>
      </div>
    </div>
    <div class="cnt-inner" v-if="isLost">
      <div class="level-end-content">
        <p class="title">You lost!</p>
        <div class="heroImgLost">
          <img :src="heroImg0" alt="">
        </div>
        <div class="lost-panel">
          <button class="back-btn" @click="$router.push({name: 'levels'})">Back to levels</button>
          <button class="try-again-btn" @click="reflesh">Try again</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.cnt-inner {
  width: 100%;
  height: 100%;
}

.header {
  font-size: 50px;
}

.top-menu {
  height: 13%;
}

.level-content {
  width: 100%;
  height: 87%;
  display: flex;
}

.hero-content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
}

.monster-content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
}

.level-img {
  width: 300px;
  height: 300px;
  margin-top: 30px;
}

.level-img img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.hero-panel {
  display: flex;
  margin-top: 20px;
  width: 355px;
  justify-content: space-between;
}

.hero-panel .attack-btn {
  height: 70px;
  width: 115px;
  border: none;
  background-color: #af3232;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  color: white;
  font-family: Lacquer, serif;
  font-size: 20px;
  cursor: pointer;
}

.hero-panel .attack-btn:hover {
  background-color: #c73131;
}

.hero-panel .super-btn {
  height: 70px;
  width: 115px;
  background-color: #e07f1a;
  border: none;
  color: white;
  font-family: Lacquer, serif;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.hero-panel .heal-btn {
  height: 70px;
  width: 115px;
  background-color: #3c87d3;
  border: none;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  color: white;
  font-family: Lacquer, serif;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.hero-panel .btn-icon {
  height: 80%;
  width: 60px;
}

.hero-panel .btn-icon img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.level-end-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.level-end-content .title {
  font-size: 100px;
}

.level-end-content p {
  font-size: 40px;
}

.level-end-content .lost-panel {
  width: 400px;
  display: flex;
  justify-content: space-between;
}

.level-end-content .lost-panel .back-btn {
  border: 5px solid #9f1c1c;
  border-radius: 50px;
  height: 85px;
  width: 180px;
  background-color: #bd4848;
  color: white;
  font-family: Lacquer, serif;
  font-size: 22px;
  transform: rotate(-5deg);
  cursor: pointer;
}

.level-end-content .lost-panel .back-btn:hover {
  background-color: #b93636;
  transform: rotate(-7deg);
}

.level-end-content .lost-panel .try-again-btn {

  border: 5px solid #105917;
  border-radius: 50px;
  height: 75px;
  width: 170px;
  background-color: #4B9649;
  color: white;
  font-family: Lacquer, serif;
  font-size: 25px;
  transform: rotate(2deg);
  cursor: pointer;
}

.level-end-content .lost-panel .try-again-btn:hover {
  background-color: #4fa424;
  transform: rotate(4deg);
}

.level-end-content .heroImgLost {
  height: 350px;
}

.level-end-content .heroImgLost img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

</style>
<script>
import {useRoute} from "vue-router";
import {db} from '@/firebase'
import {doc, getDoc, updateDoc} from "firebase/firestore"
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  components: {
    ProgressBar
  },
  methods: {
    reflesh() {
      location.reload()
    }
    ,
    heroAttack() {
      if (this.currentHeroHp <= 0) {
        this.isLost = true
      }
      let heroAttack = Math.round((Math.random() * (this.maxHeroAttack + 1)))
      console.log('Hero attack is: ' + heroAttack)
      this.currentMonsterHp = this.currentMonsterHp - heroAttack
      if (this.monsterHp < 0) {
        this.monsterHp = 0
      }
      if (heroAttack === 0) {
        let heroEvent = this.heroName + " misses"
        this.heroEvent = heroEvent
      } else {
        let heroEvent = this.heroName + " attack is " + heroAttack
        this.heroEvent = heroEvent
      }
      this.convertMonsterHp()
      this.setHeroImg()
      this.monsterAttack()
    },
    monsterAttack() {
      if (this.currentMonsterHp <= 0) {
        this.isWin = true
        this.getLoot()
      }
      let monsterAttack = Math.round(Math.random() * (this.maxMonsterAttack + 1))
      console.log('Monster attack is: ' + monsterAttack)
      this.currentHeroHp = this.currentHeroHp - monsterAttack
      this.convertHeroHp()
      if (monsterAttack === 0) {
        let monsterEvent = this.monsterName + " misses"
        this.monsterEvent = monsterEvent
      } else {
        let monsterEvent = this.monsterName + " attack is " + monsterAttack
        this.monsterEvent = monsterEvent
      }
      if (this.currentHeroHp < 0) {
        this.currentHeroHp = 0
      }
      if (this.currentHeroHp <= 0) {
        this.isLost = true
      }
    },
    superAttack() {
      if (this.heroSuperAttack > 0) {
        this.heroSuperAttack--

        let heroAttack = Math.round((Math.random() * (this.maxHeroAttack + 1) * 3))
        console.log('Hero attack is: ' + heroAttack)
        this.currentMonsterHp = this.currentMonsterHp - heroAttack
        if (heroAttack === 0) {
          let heroEvent = this.heroName + " misses"
          this.heroEvent = heroEvent
        } else {
          let heroEvent = this.heroName + " attack is " + heroAttack
          this.heroEvent = heroEvent
        }
        if (this.monsterHp < 0) {
          this.monsterHp = 0
        }
        this.convertMonsterHp()
        this.monsterAttack()
      }
    },
    heal() {
      if (this.heroHeal > 0 && this.currentHeroHp < this.heroHp) {
        if (this.currentHeroHp > this.heroHp - 10) {
          this.currentHeroHp = this.heroHp
        } else {
          this.currentHeroHp = this.currentHeroHp + 10
        }
        this.heroHeal--
        this.convertHeroHp()
        this.setHeroImg()

      }
    },
    async updateData() {
      const ref = doc(db, 'heroes', '0');
      await updateDoc(ref, {
        attack: this.maxHeroAttack, hp: this.heroHp, super: this.heroSuperAttack, heal: this.heroHeal,
        healValue: this.heroHealValue, superAttackValue: this.heroSuperAttackValue
      });
    },
    async getLoot() {
      const ref = doc(db, 'heroes', '0');
      if (this.num <= 3) {
        let loot = Math.round(Math.random() * (15 - 10) + 10)
        console.log(loot)
        let lootName = loot + " coins"
        this.lootName = lootName
        this.heroMoney = this.heroMoney + loot
        await updateDoc(ref, {money: this.heroMoney});
        await this.updateData()

      }
      if (this.num >= 4 && this.num <= 6) {
        let loot = Math.round(Math.random() * (20 - 15) + 15)
        console.log(loot)
        let lootName = loot + " coins"
        this.lootName = lootName
        this.heroMoney = this.heroMoney + loot
        await updateDoc(ref, {money: this.heroMoney});
        await this.updateData()
      }
      if (this.num >= 7 && this.num <= 9) {
        let loot = Math.round(Math.random() * (25 - 20) + 20)
        console.log(loot)
        let lootName = loot + " coins"
        this.lootName = lootName
        this.heroMoney = this.heroMoney + loot
        await updateDoc(ref, {money: this.heroMoney});
        await this.updateData()
      }
      if (this.num >= 10) {
        let loot = Math.round(Math.random() * (35 - 25) + 25)
        console.log(loot)
        let lootName = loot + " coins"
        this.lootName = lootName
        this.heroMoney = this.heroMoney + loot
        await updateDoc(ref, {money: this.heroMoney});
        await this.updateData()
      }
    },
    convertHeroHp() {
      let heroHpPercent = (100 * this.currentHeroHp) / this.heroHp
      if (heroHpPercent > 100) {
        heroHpPercent = 100
      }
      this.heroHpPercent = heroHpPercent
    },
    convertMonsterHp() {
      let monsterHpPercent = (100 * this.currentMonsterHp) / this.monsterHp
      if (monsterHpPercent > 100) {
        monsterHpPercent = 100
      }
      this.monsterHpPercent = monsterHpPercent
      console.log(this.currentMonsterHp)
      console.log(monsterHpPercent)
    },
    setHeroImg() {
      if (this.heroHpPercent >= 85) {
        this.heroImg = this.hero.img100
      }
      if (this.heroHpPercent <= 84 && this.heroHpPercent >= 50) {
        this.heroImg = this.heroImg75
      }
      if (this.heroHpPercent <= 49 && this.heroHpPercent >= 25) {
        this.heroImg = this.heroImg50
      }
      if (this.heroHpPercent <= 24 && this.heroHpPercent >= 1) {
        this.heroImg = this.heroImg25
      }
    }
  },

  data() {
    const route = useRoute()
    const num = route.params.id
    this.num = num
    return {
      num: null,
      hero: null,
      heroName: null,
      heroHp: null,
      heroMoney: null,
      currentHeroHp: null,
      heroSuperAttack: null,
      heroHeal: null,
      heroHealValue: null,
      heroSuperAttackValue: null,
      heroImg: null,
      heroImg100: null,
      heroImg75: null,
      heroImg50: null,
      heroImg25: null,
      heroImg0: null,
      level: null,
      monsterName: null,
      monsterHp: null,
      currentMonsterHp: null,
      maxMonsterAttack: null,
      monsterImg: null,
      monsterImgDead: null,
      isLost: null,
      isWin: null,
      lootName: null,
      heroHpPercent: 100,
      monsterHpPercent: 100,
      heroEvent: "Let's go!",
      monsterEvent: null
    }
  },
  async mounted() {
    /// Get level id
    const route = useRoute()
    let num = route.params.id
    const id = String(num)
    this.num = num

    /// Get level status

    let isWin = false
    this.isWin = isWin
    let isLost = false
    this.isLost = isLost

    /// Get hero

    const refHero = doc(db, "heroes", "0")
    const docSnapHero = await getDoc(refHero)
    const hero = docSnapHero.data()
    this.hero = hero

    const heroName = hero.name
    this.heroName = heroName

    const heroHp = hero.hp
    this.heroHp = heroHp

    const currentHeroHp = this.heroHp
    this.currentHeroHp = currentHeroHp

    const heroMoney = hero.money
    this.heroMoney = heroMoney

    const maxHeroAttack = hero.attack
    this.maxHeroAttack = maxHeroAttack

    const heroSuperAttack = hero.super
    this.heroSuperAttack = heroSuperAttack

    const heroHeal = hero.heal
    this.heroHeal = heroHeal

    const heroHealValue = hero.healValue
    this.heroHealValue = heroHealValue

    const heroSuperAttackValue = hero.superAttackValue
    this.heroSuperAttackValue = heroSuperAttackValue


    const heroImg = hero.img100
    this.heroImg = heroImg
    const heroImg75 = hero.img75
    this.heroImg75 = heroImg75
    const heroImg50 = hero.img50
    this.heroImg50 = heroImg50
    const heroImg25 = hero.img25
    this.heroImg25 = heroImg25
    const heroImg0 = hero.img0
    this.heroImg0 = heroImg0

    /// Get level

    const refLevel = doc(db, "levels", id)
    const docSnapLevel = await getDoc(refLevel)
    const level = docSnapLevel.data()
    this.level = level


    const monsterHp = level.monsterHp
    this.monsterHp = monsterHp

    const currentMonsterHp = this.monsterHp
    this.currentMonsterHp = currentMonsterHp

    const monsterName = level.monsterName
    this.monsterName = monsterName

    const monsterImg = level.monsterImg
    this.monsterImg = monsterImg

    const monsterImgDead = level.monsterImgDead
    this.monsterImgDead = monsterImgDead

    const maxMonsterAttack = level.maxMonsterAttack
    this.maxMonsterAttack = maxMonsterAttack
  }
}
</script>