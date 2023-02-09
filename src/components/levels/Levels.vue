<template>
  <div class="content">
    <div class="top-menu">
      <div class="tm-clm1">
        <button class="back-btn" @click="$router.push({name:'choose-hero'})">&lt--</button>
        <button class="btn1" @click="$router.push({name:'my-hero'})">My hero</button>
      </div>
      <div class="tm-clm2">
        <p class="header">Levels</p>
      </div>
      <div class="tm-clm3">
        <button class="btn2" @click="$router.push({name:'shop'})">Shop</button>
      </div>
    </div>
    <div class="levels-wrapper">
      <router-link :to="({name: 'level', params:{id: 1}})">
        <LevelIcon class="icon1" :level="1" color="#92C600" border="#5D9035" hover="#7AA305"/>
      </router-link>

      <router-link :to="({name: 'level', params:{id: 2}})">
        <LevelIcon class="icon2" :level="2" color="#DE623B" border="#7E2A05" hover="#B75030"/>
      </router-link>

      <router-link :to="({name: 'level', params:{id: 3}})">
        <LevelIcon class="icon3" :level="3" color="#FB8315" border="#905B35" hover="#D26C0D"/>
      </router-link>

      <router-link :to="({name: 'level', params:{id: 4}})">
        <LevelIcon class="icon4" :level="4" color="#92C600" border="#5D9035" hover="#7AA305"/>
      </router-link>

      <router-link :to="({name: 'level', params:{id: 5}})">
        <LevelIcon class="icon5" :level="5" color="#DE623B" border="#7E2A05" hover="#B75030"/>
      </router-link>

      <router-link :to="({name: 'level', params:{id: 6}})">
        <LevelIcon class="icon6" :level="6" color="#FB8315" border="#905B35" hover="#D26C0D"/>
      </router-link>

      <router-link :to="({name: 'level', params:{id: 7}})">
        <LevelIcon class="icon7" :level="7" color="#DE623B" border="#7E2A05" hover="#B75030"/>
      </router-link>

      <router-link :to="({name: 'level', params:{id: 8}})">
        <LevelIcon class="icon8" :level="8" color="#92C600" border="#5D9035" hover="#7AA305"/>
      </router-link>

      <router-link :to="({name: 'level', params:{id: 9}})">
        <LevelIcon class="icon9" :level="9" color="#DE623B" border="#7E2A05" hover="#B75030"/>
      </router-link>

      <router-link :to="({name: 'level', params:{id: 10}})">
        <LevelIcon class="icon10" :level="10" color="#FB8315" border="#905B35" hover="#D26C0D"/>
      </router-link>
      <!--      <div class = "level" v-for = "count in count" :key = "count">-->
      <!--        <router-link :to="({name: 'level', params:{id: count}})">-->
      <!--          <LevelIcon class = "icon" :level = "count"/>-->
      <!--        </router-link>-->
      <!--      </div>-->
    </div>

  </div>
</template>
<style>
.top-menu {
  display: flex;
}

.icon p {
  text-decoration: none;
}

.levels-wrapper {
  padding-top: 50px;
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

.levels-wrapper .icon1 {
  position: absolute;
  top: 10px;
  right: 330px;
  transform: rotate(-7deg);
}

.levels-wrapper .icon2 {
  position: absolute;
  top: 8px;
  right: 145px;
  transform: rotate(5deg);
}

.levels-wrapper .icon3 {
  position: absolute;
  top: 20px;
  right: -40px;
  transform: rotate(2deg);
}

.levels-wrapper .icon4 {
  position: absolute;
  top: 12px;
  right: -220px;
  transform: rotate(-10deg);
}

.levels-wrapper .icon5 {
  position: absolute;
  top: 15px;
  right: -430px;
  transform: rotate(8deg);
}

.levels-wrapper .icon6 {
  position: absolute;
  top: 240px;
  right: 330px;
  transform: rotate(2deg);
}

.levels-wrapper .icon7 {
  position: absolute;
  top: 220px;
  right: 150px;
  transform: rotate(8deg);
}

.levels-wrapper .icon8 {
  position: absolute;
  top: 250px;
  right: -30px;
  transform: rotate(-4deg);
}

.levels-wrapper .icon9 {
  position: absolute;
  top: 250px;
  right: -240px;
  transform: rotate(15deg);
}

.levels-wrapper .icon10 {
  position: absolute;
  top: 250px;
  right: -390px;
  transform: rotate(1deg);
}

.top-menu {
  width: 100%;
}

.top-menu .tm-clm1 {
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: start;
}

.top-menu .tm-clm2 {
  width: 34%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-menu .tm-clm2 .header {
  font-size: 80px;
  transform: rotate(-3deg);
}

.top-menu .tm-clm3 {
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: end;
}

.top-menu .btn1 {
  border: 3px solid #751616;
  background-color: #bb4949;
  color: white;
  height: 50px;
  width: 120px;
  font-family: Lacquer, serif;
  font-size: 24px;
  border-radius: 20px;
  transform: rotate(-4deg);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  cursor: pointer;
}

.top-menu .btn1:hover {
  background-color: #af1d1d;
  transform: rotate(-2deg);
}

.top-menu .btn2 {
  border: 3px solid #144d1d;
  background-color: #358d15;
  color: white;
  height: 60px;
  width: 120px;
  font-family: Lacquer, serif;
  font-size: 30px;
  border-radius: 20px;
  transform: rotate(3deg);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  cursor: pointer;
}

.top-menu .btn2:hover {
  background-color: #21540e;
  transform: rotate(6deg);
}

.top-menu .back-btn {
  border: 3px solid #b2662d;
  background-color: #bd802a;
  color: white;
  height: 60px;
  width: 70px;
  font-family: Lacquer, serif;
  font-size: 30px;
  border-radius: 20px;
  transform: rotate(3deg);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-right: 10px;
  cursor: pointer;
}

.top-menu .back-btn:hover {
  background-color: #cb8a35;
  transform: rotate(7deg);
}
</style>
<script>
import LevelIcon from "@/components/levels/LevelIcon.vue";
import {collection, getCountFromServer} from "firebase/firestore";
import {db} from "@/firebase";

const ref = collection(db, "levels");
const count = await getCountFromServer(ref);

export default {

  components: {
    LevelIcon
  },
  data() {
    return {
      count: count.data().count
    }
  }
}
</script>