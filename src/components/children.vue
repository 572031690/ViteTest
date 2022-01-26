<template lang="pug">
div
    ul
        li(v-for="(item, index) in list" :key="index" @click="parentClick(index)") {{item}}
</template>

<script lang="ts">
import { inject }  from 'vue'
export default {
    setup() {
        // interface homeDatas :number[]
        const list :number[] = inject('mmm') || []
        const parentClick = (e:number) => {
            list[e] ++
            alert(1 + e)
        }
    return {
        list,
        parentClick
    }

    }
}
</script>

<style>

</style>