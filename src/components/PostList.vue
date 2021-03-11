<template>
  <div class="post-list">
    <article v-for="post in list" :key="post.id" class="card mb-3 shadow">
      <div class="card-body">
        <h4>{{post.title}}</h4>
        <div class="row my-3 align-item-center">
          <div v-if="post.image" class="col-3">
            <img :src="post.image" :alt="post.title" class="rounded-lg">
          </div>
          <p :class="{'col-9': post.image}">{{post.content}}</p>
        </div>
        <span class="text-muted">{{post.createdAt}}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropsType } from 'vue'
import { PostProps } from '@/testData'

export default defineComponent({
  props: {
    list: {
      required: true,
      type: Array as PropsType<PostProps[]>
    }
  }
})
</script>

<style>

</style>
