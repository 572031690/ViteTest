<template lang="pug">
div
    img(alt="Vue logo" src="../assets/logo.png")
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
