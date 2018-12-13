<template>
  <div class="parent">
    <h3>这里是父组件</h3>
    <button type="button" @click="clickHandler">修改自己文本</button>
    <button type="button" @click="clickHandler2">修改子组件文本</button>
    <div>Test: {{msg}}</div>
    <child></child>
  </div>
</template>

<script>
  import store1 from '../store/mystore1'
  import Child from './Child.vue'

  export default {
    name: 'Parent',
    computed: {
      msg () {
        return store1.state.testMsg
      }
    },
    methods: {
      clickHandler () {
        store1.commit('changeTestMsg', '父组件修改自己后的文本')
        console.log(store1.state.testMsg)
      },
      clickHandler2 () {
        store1.commit('changeChildText', '父组件修改子组件后的文本')
      }
    },
    components: {
      'child': Child
    }
    // store1
  }
</script>

<style scoped>
  .parent {
    background-color: #00BBFF;
    height: 400px;
  }
</style>
