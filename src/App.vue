<template>
  <div class="container row">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'

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
    ColumnList
  },
  setup () {
    return {
      list: testData
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
