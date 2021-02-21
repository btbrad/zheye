<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
    <form>
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailValue" placeholder="请输入邮箱地址" type="text"></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input :rules="passwordRules" v-model="passwordValue" placeholder="请输入密码" type="password"></validate-input>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RuleProps } from './components/ValidateInput.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'btbrad'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: 'test1111',
    avatar: require('@/assets/logo.png')
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: 'test22222222222222222222222222222222222222222222222222222222222222'
  },
  {
    id: 3,
    title: 'test2的专栏',
    description: 'test2222',
    avatar: require('@/assets/logo.png')
  },
  {
    id: 4,
    title: 'test2的专栏',
    description: 'test2222',
    avatar: require('@/assets/logo.png')
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailValue = ''
    const passwordValue = ''
    const emailRules: RuleProps = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RuleProps = [
      { type: 'required', message: '密码不能为空' }
    ]
    return {
      list: testData,
      currentUser,
      emailRules,
      emailValue,
      passwordValue,
      passwordRules
    }
  }
})
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
