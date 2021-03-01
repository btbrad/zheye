<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <img :src="column.avatar" :alt="column.title" class="rounded-circle" />
    </div>
    <div class="col-9">
      <h4>{{ column.title }}</h4>
      <p class="text-muted">{{ column.description }}</p>
    </div>    
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { PostProps } from '../testData'

export default defineComponent({
  name: 'Detail',
  setup () {
    const route = useRoute()
    const currentId = route.params.id
    // 当前id的详情
    const column = {} 
    return {
      column
    }
  }
})
</script>

<style>

</style>
