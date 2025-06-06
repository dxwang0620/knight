<script setup>
import { ref } from 'vue'
import Header from '@/components/template/header.vue';
import Footer from '@/components/template/footer.vue' ; 
import Menu from '@/components/template/menu.vue';

const openMenu = ref(false);

function toggleMenu() {
  openMenu.value = !openMenu.value
}

</script>

<template>
  <div>
    <Header @toggleMenu="toggleMenu"/>
    <div id="index">
      <Menu :openMenu="openMenu" />
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Footer />
  </div>
  <!-- <div v-show="loading">loading</div> -->

</template>

<style>

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#index {
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  background: linear-gradient(180deg, #DD9036 30%, #F2295B00 60%);
  background-color: transparent;
  /* position: relative; */
  /* background-color: transparent; */
  /* background-image: linear-gradient(180deg, #DD9036 48%, #F2295B00 88%); */
}

li {
  list-style: none;
}

</style>
