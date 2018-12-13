<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <context></context>
    <left-aside></left-aside>
  </el-container>

</template>

<script>
  import Context from './Context'
  import LeftAside from './LeftAside'

  export default {
    name: 'Container',
    components: {
      Context,
      LeftAside
    }

  }
</script>

<style scoped>

</style>
