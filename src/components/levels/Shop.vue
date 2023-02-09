<template>
  <div class="content">
    <div class="top-menu">
      <div class="clm1">
        <button class="back-btn" @click="$router.push({name: 'levels'})">&lt--</button>
      </div>
      <div class="clm2">
        <p class="header">Shop</p>
      </div>
      <div class="clm3">
        <p>You have: {{ heroMoney }}$</p>
        <div class="icon1">
          <img src="src/assets/images/shop/hillIcon.svg" alt="">
        </div>
        <p>{{ heroHeal }}</p>
        <div class="icon1">
          <img src="src/assets/images/shop/superIcon.svg" alt="">
        </div>
        <p>{{ heroSuperAttack }}</p>
      </div>
    </div>
    <div class="items">
      <div class="item" v-for="item in shopRef" :key="item.id">
        <div class="item-img">
          <img :src="item.img" alt="">
        </div>
        <p class="name">{{ item.name }}</p>
        <p>{{ item.description }}</p>
        <p class="price">{{ item.price }}$</p>
        <button class="buy-btn" @click="getItem(item.id, item.value, item.price )">Buy</button>
      </div>
    </div>
  </div>
</template>
<style>

.top-menu {
  display: flex;
  width: 100%;
}

.top-menu .clm1 {
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: start;
}

.top-menu .clm2 {
  width: 30%;
  display: flex;
  justify-content: center;
}

.top-menu .clm3 {
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 19px;
}

.top-menu .clm3 .icon1 {
  height: 70px;
  width: 70px;
}

.top-menu .clm3 .icon1 img {
  object-fit: fill;
  height: 100%;
  width: 100%;
}

.items {
  padding-top: 75px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.item {
  width: 23%;
  height: 380px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  justify-content: center;
  align-items: center;
  transform: rotate(2deg);
  border: 5px solid #6b718f;
  border-radius: 20px;
  background-color: #ffffff;
}

.item:hover {
  transform: rotate(0deg);
}

.item p {
  font-size: 18px;
}

.item .name {
  font-size: 23px;
  color: #842c2c;
}

.item .price {
  font-size: 23px;
}

.item .item-img {
  background-color: white;
  border: none;
  border-radius: 20px;
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item .item-img img {
  object-fit: fill;
  width: 90%;
  height: 90%;
}

.item .buy-btn {
  border: 3px solid green;
  border-radius: 40px;
  height: 50px;
  width: 150px;
  background-color: #358d15;
  font-family: Lacquer, serif;
  font-size: 25px;
  color: white;
  cursor: pointer;
}

.item .buy-btn:hover {
  background-color: #205b0b;

}
</style>
<script>

import {db} from '@/firebase'
import {doc, getDoc, setDoc, updateDoc, collection, getDocs, collectionGroup} from "firebase/firestore"

import {useCollection} from "vuefire";

export default {
  methods: {
    async getItem(itemId, itemValue, itemPrice) {
      itemId = Number(itemId)
      if (this.heroMoney >= itemPrice) {
        switch (itemId) {
          case 1:
            this.heroHeal = this.heroHeal + itemValue
            this.heroMoney = this.heroMoney - itemPrice
            await updateDoc(this.refHero, {heal: this.heroHeal, money: this.heroMoney});
            break
          case 2:
            this.heroSuperAttack = this.heroSuperAttack + itemValue
            this.heroMoney = this.heroMoney - itemPrice
            await updateDoc(this.refHero, {super: this.heroSuperAttack, money: this.heroMoney});
            break
          case 3:
            this.heroHp = this.heroHp + itemValue
            this.heroMoney = this.heroMoney - itemPrice
            await updateDoc(this.refHero, {hp: this.heroHp, money: this.heroMoney});
            break
          case 4:
            this.maxHeroAttack = this.maxHeroAttack + itemValue
            this.heroMoney = this.heroMoney - itemPrice
            await updateDoc(this.refHero, {attack: this.maxHeroAttack, money: this.heroMoney});
            break
          default:
            console.log("ITEM ID IS INCORRECT")

        }
      } else {
        alert("You do not have enough money.")
      }
    }

  },
  data() {
    return {
      shopRef: null,
      refHero: null,
      heroHeal: null,
      hero: null,
      heroHp: null,
      heroSuperAttack: null,
      heroHealValue: null,
      heroSuperAttackValue: null,
      maxHeroAttack: null,
      heroMoney: null,
    }
  },
  async mounted() {

    const refHero = doc(db, "heroes", "0")
    this.refHero = refHero
    const docSnapHero = await getDoc(refHero)
    const hero = docSnapHero.data()
    this.hero = hero

    const heroHp = hero.hp
    this.heroHp = heroHp

    const heroMoney = hero.money
    this.heroMoney = heroMoney

    const maxHeroAttack = hero.attack
    this.maxHeroAttack = maxHeroAttack

    const heroSuperAttack = hero.super
    this.heroSuperAttack = heroSuperAttack

    const heroHeal = hero.hill
    this.heroHeal = heroHeal

    const heroHealValue = hero.healValue
    this.heroHealValue = heroHealValue

    const heroSuperAttackValue = hero.superAttackValue
    this.heroSuperAttackValue = heroSuperAttackValue


    const shopRef = useCollection(collection(db, "shop"))
    this.shopRef = shopRef
  }
}


</script>