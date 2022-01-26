<template lang="pug">
#app    
    router-view
    
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {reactive, provide} from 'vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
     
  }
}
</script>
<style >
* {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
}
#app {
    width: 100%;
    height: 100%;
}
</style>
