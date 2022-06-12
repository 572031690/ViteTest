<template lang="pug">
div
    .img-box
        .loginImg
        .loginImgBall
    div {{mjh.list[0]}}
    HelloWorld(msgss="Hello Vue 3.0 + Vite" :mjhData="mjhData" @outData="myData")
    br
    button(@click="goToRouter") goToRouter
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { reactive, provide } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: 'index',
    components: {
        HelloWorld
    },
    setup() {
        let router = useRouter();
        
        let mjhData:string = 'hello mjh'
        const myData = (e:number) => {
            console.log('------------'+ e)
        }
        const mjh = reactive({
            list : [
                111,
                222,
                333
            ]
        })
        provide('mmm', mjh.list)

        const goToRouter = () => {
            router.push({
                path:'/start',
                query:{
                    num:1
                }
            //name:'Home',
            //params:{
            //num:1
            //}
            })
        }
        return {
            mjhData,
            mjh,
            goToRouter,
            myData
        }
    }
}
</script>
<style scoped lang="css">
.loginImg {
    position: relative;
    width: 900px;
    height: 400px;
    background: url("../assets/123.png") 100% no-repeat;
    /* transition: all 1s; */
    /* animation: rollings 3s linear infinite; */
    
    


    /* -webkit-mask:
        linear-gradient(135deg, transparent 35px, #fff 0)
        top left,
        linear-gradient(-135deg, transparent 35px, #fff 0)
        top right,
        linear-gradient(-45deg, transparent 35px, #fff 0)
        bottom right,
        linear-gradient(45deg, transparent 35px, #fff 0)
        bottom left;
    -webkit-mask-size: 50% 50%;
    -webkit-mask-repeat: no-repeat; */


    /* -webkit-mask: linear-gradient(90deg, transparent, #fff); */

    /* -webkit-mask: radial-gradient(
        transparent 0%, transparent 10%,blue 10%,blue 20%,blue 20%,blue 30%,
        transparent 25%,transparent 40%,blue 40%,blue 50%,blue 50%,blue 60%,
        transparent 50%, transparent 70%,blue 70%,blue 70%,blue 70%,blue 80%,
        transparent 70%,transparent 90%,blue 90%
    );  */
   

    /* mask-image: url(../assets/123.png);
    mask-position: 0;
    mask-size: auto;
    mask-repeat: no-repeat;  */
    /* -webkit-mask-image: url(../assets/logo.png);
    -webkit-mask-position: center;
    -webkit-mask-size: auto;
    -webkit-mask-repeat: no-repeat;  */

}
/* .loginImg::before {
        position: absolute;
        content: "";
        top: 0;left: 0; right: 0;bottom: 0;
        width: 900px;
        height: 400px;
        background: url(../assets/6.png) ;
        background-size: 100%;
        background-repeat: no-repeat;
        -webkit-mask: linear-gradient(45deg, #000 40%, transparent 60%);
        animation: maskRotate 1.2s infinite;
} */
@keyframes maskRotate {
  0% {
    -webkit-mask: linear-gradient(45deg, #000 0%, transparent 5%, transparent 5%);
  }
  20% {
    -webkit-mask: linear-gradient(45deg, #000 1%, transparent 25%, transparent 25%);
  }
  40% {
    -webkit-mask: linear-gradient(45deg, #000 1%, transparent 45%, transparent 45%);
  }
  50% {
    -webkit-mask: linear-gradient(45deg, #000 1%, transparent 55%, transparent 55%);
  }
  60% {
    -webkit-mask: linear-gradient(45deg, #000 1%, transparent 65%, transparent 65%);
  }
  80% {
    -webkit-mask: linear-gradient(45deg, #000 1%, transparent 85%, transparent 85%);
  }
  100% {
    -webkit-mask: linear-gradient(45deg, #000 100%, transparent 105%, transparent 105%);
  }
}
@keyframes rollings   {
        0% {
            -webkit-mask: linear-gradient(45deg, #000 0%, transparent 5%, transparent 5%);
        }
        50% {
            -webkit-mask: linear-gradient(45deg, #000 50%, transparent 6%, transparent 6%);
        }
        100% {
            -webkit-mask: linear-gradient(45deg, #000 100%, transparent 105%, transparent 105%);
        }
    }
</style>
<style lang="stylus" >
.img-box
    display flex
.loginImgBall 
    height 300px
    width: 300px
    background: radial-gradient(#000, transparent)
    background-size: 20px 20px

</style>
