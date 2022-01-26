<template lang="pug">
div#hello
    h1 {{msg}}
    button(@click="counts++") count is: {{ counts }}
    button(@click="changeHandle") {{ '---' + msg + '---' }}
    button(@click="changeHandle2") 改变person
    br
    span {{filterMsg}} ---- {{filterMsg2(2)}}
    br
    button(@click="emitData") emit
    children

    //- <h1>{{ msg }}</h1> count is: {{ count }}
    //- <button @click="count++">count is: {{ count }}</button>
    //- <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
    //- <button @click="changeHandle">{{ '---' + msg + '---' }}</button>
    //- <button @click="changeHandle2">改变person</button>
    //- <br>
    //- {{filterMsg}} ---- {{filterMsg2(2)}}
    //- <br>
    //- <button @click="emitData">emit</button>
    //- <br>
    //- <children/>
</template>

<script lang="ts">
import { reactive, readonly, ref, watch, computed, toRefs } from 'vue'
import children from './children.vue'

export default {
    name: 'HelloWorld',
    props: {
        msgss: {
            type: String,
            default: ''
        },
        mjhData: {
            type: String,
            default: ''
        }
    },
    components: {
        children
    },
    setup(props:any, context:any) {

        let counts = ref(0)
        let msg = ref('初始化') //string number
        let person = reactive({ name: 'lisi', age: 20 }) // object array //本身就是响应式对象
        const changeHandle = () => {
            msg.value = '改变的'
        }
        const changeHandle2 = () => {
            person.age = 30
        }

        // watch ************
        watch(
            msg,
            (newValue, oldValue) => {
                console.log('this: ',this) //undefined;箭头函数绑定父级作用域的上下文，所以this不会指向当前的组件
                console.log('watchMsg: ',newValue, oldValue)
            },
            { deep: false, immediate: true }
        )

        watch(
            () => person.age,
            (newValue, oldValue) => {
                console.log('watch-personAge:',newValue, oldValue)
            }
        )

        // computed ************
        //无参数
        const filterMsg = computed(() => msg.value + 'fdfasdf')
        //有参数
        const filterMsg2 = computed(() => {
            return function (num:number) {
                return msg.value + num
            }
        })
        // 自定义set方法和get方法
        const count = ref(1)
        const plusOne = computed({
            get: () => count.value + 1,
            set: val => {
                count.value = val - 1
            }
        })

        plusOne.value = 1
        console.log('count.value：',count.value) // 0
        console.log('plusOne.value：',plusOne.value) // 0 + 1

        // props *************
        const { mjhData } =  toRefs(props)
        console.log('mjhData: ',mjhData.value)

        // emit *************
        const emitData = () => {
            context.emit('outData',2)
            // context.attrs('outData',2)
            console.log({...context.attrs})
        }
        // console.log({...context.attrs});
        return {
            counts,
            msg,
            filterMsg,
            filterMsg2,
            emitData,
            changeHandle,
            changeHandle2
        }
    }
}
</script>
