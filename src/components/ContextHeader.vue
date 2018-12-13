<template>
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>{{ username }}</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>{{ username1 }}</span>
  </el-header>
</template>

<script>
  import store from '../store/mystore'

  export default {
    name: 'ContextHeader',
    data () {
      // console.log(store.state.username)
      return {
        username: ''
      }
    },
    mounted () {
      this.username = store.state.username
      console.log(store.state.username)
      console.log('store.state.username')
    },
    // computed: {
    //   username1: function () {
    //     return store.state.username
    //   }
    // },
    watch: {
      username1: function () {
        return store.state.username
      }
    }
  }
</script>

<style scoped>

</style>
