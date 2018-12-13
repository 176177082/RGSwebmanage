<template>
  <el-container>
    <context-header></context-header>
    <context-main></context-main>
  </el-container>
</template>

<script>
  import ContextHeader from './ContextHeader'
  import ContextMain from './ContextMain'

  export default {
    name: 'Context',
    components: {
      ContextHeader,
      ContextMain
    }
  }
</script>

<style scoped>

</style>
