<template>
    <header class="header">
        <div class="menu-btn" :class="{ open: isOpen }" @click="toggleBtn">
            <div ></div>
            <div></div>
            <div></div>
        </div>
        <div>
            <img src="@/assets/logo.png"  class="logo" alt="">
        </div>
        <div>
            <img src="@/assets/search.png" alt="">
        </div>
    </header>
</template>

<script setup>

    import { ref } from 'vue';
    const emit = defineEmits(['toggleMenu'])
    const isOpen = ref(false);
    function toggleBtn() {
        isOpen.value = !isOpen.value
        emit('toggleMenu');
    }


</script>


<style scoped>

.header {
    width: 100%;
    height: 100px;
    background-color: #bd8c51;
    box-shadow: 0px 10px 20px rgba(43, 61, 79, 0.21);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}

.menu-btn {
    width: 25px;
    height: 25px;

}

.menu-btn div {
    background: #FFF;
    width: 25px;
    height: 2px;
    margin: 5px 0px;
    border-radius: 2px;
    transition: .3s;
}

.menu-btn.open div:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-btn.open div:nth-child(2) {
  opacity: 0;
}
.menu-btn.open div:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

img {
    width: 25px;
    cursor: pointer;
}

.logo {
    width: 80px;
}

</style>