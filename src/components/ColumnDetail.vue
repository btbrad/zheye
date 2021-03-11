<template>
  <div v-if="column" class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <img :src="column.avatar" :alt="column.title" class="rounded-circle" style="width:100px" />
    </div>
    <div class="col-9">
      <h4>{{ column.title }}</h4>
      <p class="text-muted">{{ column.description }}</p>
    </div>
    <post-list :list="list"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { testPosts, testData } from '../testData'
import PostList from './PostList'

export default defineComponent({
  name: 'Detail',
  components: {
    PostList
  },
  setup () {
    const route = useRoute()
    const currentId = route.params.id
    // 当前id的详情
    const column = testData.find(c => c.id === +currentId)
    const list = testPosts.filter(post => post.columnId === +currentId)
    console.log(111, column, list)
    return {
      column,
      list
    }
  }
})
</script>

<style>

</style>
