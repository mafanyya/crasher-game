<template>
  <div class="content">
    <div class="my-hero-content">
      <div class="top-menu">
        <div class="clm1">
          <button class="back-btn" @click="$router.push({name:'levels'})">&lt--</button>
        </div>
        <div class="clm2">
          <p>My hero</p>
        </div>
        <div class="clm3"></div>
      </div>
      <div class="hero-content">
        <div class="clm1">
          <div class="hero-img">
            <img :src="heroImg" alt="">
          </div>
        </div>
        <div class="clm2">
          <p class="name">{{ heroName }}</p>
          <p class="hero-inf">HP: {{ heroHp }}</p>
          <p class="hero-inf">Max attack: {{ maxHeroAttack }}</p>
          <div class="row">
            <div class="clm">
              <div class="icon1">
                <img src="src/assets/images/coin.svg" alt="">
              </div>
              <p>{{ heroMoney }}</p>
            </div>
            <div class="clm">
              <div class="icon1">
                <img src="src/assets/images/shop/hillIcon.svg" alt="">
              </div>
              <p>{{ heroHeal }}</p>
            </div>
            <div class="clm">
              <div class="icon1">
                <img src="src/assets/images/shop/superIcon.svg" alt="">
              </div>
              <p>{{ heroSuperAttack }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="share">
        <div class="share-header">
          <p>Share with friends</p>
        </div>
        <div class="share-icons">

          <div class="share-icon">
            <ShareNetwork
                network="telegram"
                url="crasher.comic"
                title="Hi! This is my character in Crasher!"
                :description=shareDescription>
              <img src="https://cdn3.iconfinder.com/data/icons/social-icons-33/512/Telegram-256.png">
            </ShareNetwork>
          </div>
          <div class="share-icon">
            <ShareNetwork
                network="facebook"
                url="crasher.comic"
                title="Hi! This is my character in Crasher!"
                :description=shareDescription>
              <img
                  src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png">
            </ShareNetwork>
          </div>
          <div class="share-icon">
            <ShareNetwork
                network="twitter"
                url="crasher.comic"
                title="Hi! This is my character in Crasher!"
                :description=shareDescription>
              <img
                  src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-256.png">
            </ShareNetwork>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.my-hero-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.my-hero-content .top-menu {
  width: 100%;
  height: 15%;
  display: flex;
}

.my-hero-content .top-menu .clm1 {
  height: 100%;
  width: 20%;
}

.my-hero-content .top-menu .clm2 {
  height: 100%;
  width: 60%;
  font-size: 60px;

}

.my-hero-content .top-menu .clm3 {
  height: 100%;
  width: 20%;
}

.my-hero-content .hero-content {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
}

.my-hero-content .hero-content .clm1 {
  width: 40%;
  height: 100%;
}

.my-hero-content .hero-content .clm1 .hero-img {
  width: 100%;
  height: 60%;
  margin-top: 20px;

}

.my-hero-content .hero-content .clm1 .hero-img img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.my-hero-content .hero-content .clm2 {
  width: 60%;
  height: 100%;
}

.my-hero-content .hero-content .clm2 .name {
  font-size: 80px;
  margin-left: 40px;
  color: #8f2828;
  margin-bottom: 15px;
}

.my-hero-content .hero-content .clm2 .hero-inf {
  margin-left: 40px;

  font-size: 30px;
}

.my-hero-content .hero-content .clm2 .row {
  display: flex;
  height: 80px;
  width: 100%;
  margin-left: 20px;
  margin-top: 40px;

}

.my-hero-content .hero-content .clm2 .row .clm {
  display: flex;
  margin-left: 20px;
  align-items: center;
}

.my-hero-content .hero-content .clm2 .row .clm p {
  font-size: 30px;
  margin-left: 10px;
}

.my-hero-content .hero-content .clm2 .row .clm .icon1 {
  width: 70%;
  height: 100%;
}

.my-hero-content .hero-content .clm2 .row .clm .icon1 img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.share {

  height: 25%;
  width: 40%;
  display: flex;
  flex-direction: column;
}

.share .share-header {
  font-size: 30px;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.share .share-icons {
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: space-between;
}

.share .share-icons .share-icon {

  width: 100px;
  height: 100px;
}

.share .share-icons .share-icon img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}


</style>
<script>
import {db} from '@/firebase'
import {doc, getDoc} from "firebase/firestore"
import {ShareNetwork} from "vue-social-sharing/src/vue-social-sharing";

export default {
  components: {
    ShareNetwork
  },
  data() {
    return {
      refHero: null,
      heroName: null,
      heroHeal: null,
      hero: null,
      heroHp: null,
      heroSuperAttack: null,
      heroHealValue: null,
      heroSuperAttackValue: null,
      maxHeroAttack: null,
      heroMoney: null,
      heroImg: null,
      shareDescription: null,
    }
  },
  async mounted() {

    const refHero = doc(db, "heroes", "0")
    this.refHero = refHero
    const docSnapHero = await getDoc(refHero)
    const hero = docSnapHero.data()
    this.hero = hero

    const heroName = hero.name
    this.heroName = heroName

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

    const heroImg = hero.img101
    this.heroImg = heroImg

    const shareDescription = "My hero is " + this.heroName + ". HP: " + this.heroHp + ", attack: " + this.maxHeroAttack + ", money: " + this.heroMoney +
        ", heals: " + this.heroHeal + ", super-attack: " + this.heroSuperAttack + ". "
    this.shareDescription = shareDescription


  }
}
</script>
