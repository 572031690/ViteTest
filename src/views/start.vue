<template lang="pug">
div(ref="box") 1321234564------{{num}}
</template>

<script lang="ts">
import { nextTick } from '@vue/runtime-core';
import {useRoute} from 'vue-router'
import { onMounted, ref } from 'vue'

export default {
    name: 'start',
    setup() {
        let route = useRoute();
        let num = route.query.num;
        //let num = route.params.num;

        let box = ref(null); //本质是reactive({value:null})
        // 需要在生命周期获取
        onMounted(()=>{
            // 当界面挂载出来后就会自动执行
            console.log(box.value);
        })
        //接受的是null,原因是setup执行时机比mounted早,dom还没形成
        console.log(box.value);

        return{
            num,
            box
        }
    }
}
</script>

<style>

</style>