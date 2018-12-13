<template>
  <div class="login">
    <h1>登录页面</h1>
    <input type="text" placeholder="请输入用户名" v-model="Username">
    <input type="password" placeholder="请输入密码" v-model="Password">
    <input type="button" value="登录" @click="toLogin">
  </div>
</template>

<script>
  // import * as types from '../store/types'
  import api from '../axios'
  import store from '../store/mystore'

  export default {
    name: 'LogIn',
    data: function () {
      return {
        Username: '',
        Password: ''
      }
    },
    methods: {
      toLogin () {
        let params = {
          username: this.Username,
          password: this.Password
        }
        api.UserLogin(params).then(res => {
          console.log(res.data)
          console.log(res.data.token)
          store.commit('savetoken', res.data.token)
          api.UserMessage().then(res => {
            console.log(res.data)
            store.commit('saveusername', res.data[0].username)
            store.commit('saverole', res.data[0].role)
            console.log(store.state.username)
          })
          this.$router.push('/container')
        })
      }
    },
    store
  }
</script>

<style scoped>

</style>
