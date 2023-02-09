<template>
  <div class="content">
    <div class="top-menu-choose">
      <div class="clm1">
        <button class="back-btn" @click="$router.push({name: 'hello'})">&lt--</button>
      </div>
      <div class="clm2"><p class=header>Choose hero</p></div>
      <div class="clm3"></div>
    </div>

    <div class="heroes">
      <Janusz/>
      <Zosia/>
      <Kamil/>
    </div>
  </div>
</template>
<style>
.heroes {
  display: flex;
  height: 70%;
  width: 90%;
  justify-content: space-between;
}

.header {
  font-size: 70px;
}

.top-menu-choose {
  width: 100%;
  height: 100px;
  display: flex;
}

.top-menu-choose .clm1 {
  width: 20%;
  display: flex;
  align-items: center;
}

.top-menu-choose .clm2 {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-menu-choose .clm3 {
  width: 20%;
}

.top-menu-choose .back-btn {
  border: 3px solid #b2662d;
  background-color: #bd802a;
  color: white;
  height: 60px;
  width: 70px;
  font-family: Lacquer, serif;
  font-size: 30px;
  border-radius: 20px;
  transform: rotate(3deg);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  margin-right: 10px;
  cursor: pointer;
}

.top-menu-choose .back-btn:hover {
  background-color: #cb8a35;
  transform: rotate(7deg);
}
</style>
<script>
import Zosia from "@/components/choose-hero/heroes/Zosia.vue";
import Janusz from "@/components/choose-hero/heroes/Janusz.vue";
import Kamil from "@/components/choose-hero/heroes/Kamil.vue";

export default {
  components: {
    Janusz,
    Zosia,
    Kamil
  },
}

</script>
