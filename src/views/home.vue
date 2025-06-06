<template>
    <div id="home">
        <div class="topBlock">
            <h1>騎士手遊代儲</h1>
            <h2>Knight Game Shop</h2>

            <div class="iconIntro">
                <div>
                    <img src="../assets/award-solid.svg" alt="">
                    <h4>正規代儲代抽</h4>
                </div>
                <div>
                    <img src="../assets/crown-solid.svg" style="height: 80%;">
                    <h4>速度完成訂單</h4>
                </div>
                <div>
                    <img src="../assets/users-solid.svg" style="height: 80%;">
                    <h4>多則五星好評</h4>
                </div>
                <div>
                    <img src="../assets/scale-unbalanced-flip-solid.svg" alt="">
                    <h4>市場最低價格</h4>
                </div>
                <div>
                    <img src="../assets/handshake-solid.svg" style="height: 80%">
                    <h4>終身售後服務</h4>
                </div>
                <div>
                    <img src="../assets/headset-solid.svg" alt="">
                    <h4>專人客服回覆</h4>
                </div>
            </div>
        </div>
        <div class="middleBlock">
            <h2>選擇騎士代儲</h2>
        </div>
        <div class="bottomBlock">
            <h1>近期熱門手遊</h1>
            <div>
                <swiper
                    :modules="[Autoplay, Pagination]"
                    :spaceBetween="20"
                    :slidesPerView="1"
                    :loop="true"
                    :autoplay="{ delay: 3000 }"
                    :pagination="{ clickable: true }"
                    class="mySwiper"
                >
                <swiper-slide v-for="(item, index) in items1" :key="index">
                    <img :src="item.image" :alt="item.alt" />
                </swiper-slide>
                </swiper>

                <div class="searchMore1">
                    查看更多遊戲
                </div>
            </div>
            <div>
                <swiper
                    :modules="[Autoplay, Pagination]"
                    :spaceBetween="20"
                    :slidesPerView="1"
                    :loop="true"
                    :autoplay="{ delay: 3000 }"
                    :pagination="{ clickable: true }"
                    class="mySwiper"
                >
                <swiper-slide v-for="(item, index) in items2" :key="index">
                    <img :src="item.image" :alt="item.alt" />
                </swiper-slide>
                </swiper>

                <div class="searchMore2">
                    查看更多遊戲
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const items1 = [
  {
    image: new URL('@/assets/free_fire.webp', import.meta.url).href,
    alt: '圖片 1'
  },
  {
    image: new URL('@/assets/age_of_kings.png', import.meta.url).href,
    alt: '圖片 2'
  },
  {
    image: new URL('@/assets/pubg.png', import.meta.url).href,
    alt: '圖片 3'
  },
  {
    image: new URL('@/assets/lastwar.png', import.meta.url).href,
    alt: '圖片 4'
  },
  {
    image: new URL('@/assets/star_rail.png', import.meta.url).href,
    alt: '圖片 5'
  },
]

const items2 = [
  {
    image: new URL('@/assets/garena.jpg', import.meta.url).href,
    alt: '圖片 1'
  },
  {
    image: new URL('@/assets/call_of_duty.webp', import.meta.url).href,
    alt: '圖片 2'
  },
  {
    image: new URL('@/assets/god.jpg', import.meta.url).href,
    alt: '圖片 3'
  },
  {
    image: new URL('@/assets/summoners.jpeg', import.meta.url).href,
    alt: '圖片 4'
  },

]

</script>

<style lang="scss" scoped>

#home {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
    overflow-y: auto;
    padding-bottom: 80px;
}

.topBlock {
    margin-top: 40px;
    margin-bottom: 60px;
}

.middleBlock {
    margin-bottom: 60px;
    height: 300px;

    h2{
        color: #694a1c;
        font-size: 20px;
    }
}

.bottomBlock {
    width: 100%;
    background-color: #ffd580cc;
    border-radius: 20px;
    padding: 20px 10px;

    h1 {
        font-size: 30px;
        color: #694a1c;
        margin-bottom: 10px;
    }

    .mySwiper {
        width: 90%;
        padding: 20px;
        height: 300px;
        margin-bottom: 10px;
    }
    .mySwiper img {
        width: 90%;
        height: 90%;
        object-fit: cover;
        display: block;
        border-radius: 20px;
    }

    .searchMore1 {
        width: 40%;
        box-sizing: border-box;
        border-radius: 20px;
        background-color: transparent;
        background-image: linear-gradient(180deg, #F5ADAD 0%, #EE0942 100%);
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        text-align: center;
        color: white;
    }

    .searchMore2 {
        width: 40%;
        box-sizing: border-box;
        border-radius: 20px;
        background-color: transparent;
        background-image: linear-gradient(180deg, #F5ADAD 0%, #EE0942 100%);
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        text-align: center;
        color: white;
    }
}

h1 {
    color: white;
    text-align: center;
    font-size: 38px;
}

h2 {
    color: white;
    font-size: 18px;
    text-align: center;
    margin-bottom: 40px;
}

h4 {
    font-size: 14px;
    color: white;
    text-align: center;
}

.iconIntro {
    width: 100%;
    background-color: #251A0DCF;
    justify-content: space-around;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 20px;
    backdrop-filter: blur(40px) brightness(200%);
}

.iconIntro > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 28%;
    flex-grow: 1;
    
}

img {
    width: 50%;
    display: block;
    margin-bottom: 10px;
}



</style>