<template>
    <div class="menu" :class="{ 'menu-open': props.openMenu }">
      <!-- <h1>menu</h1> -->
       <ul>
            <li>首頁</li>
            <li>代儲免責聲明</li>
            <li>聯絡我們</li>
       </ul>
    </div>
</template>

<script setup>
    const props = defineProps({
        openMenu: Boolean
    })

</script>


<style>

.menu{
    width: 40vw;
    height: 100vh;
    position: fixed;
    left: -40vw;
    top: 0;
    margin-top: 100px;
    backdrop-filter: blur(10px);
    background-color: #db9d50;
    transition: left 0.3s ease;
    z-index: 10;
}

.menu-open {
    left: 0;
}

.menu ul {
    /* padding: 10px; */

}

.menu ul li {
    border-bottom: 1px solid #b89567;
    padding: 15px 10px;
    color: white;
    
}


</style>