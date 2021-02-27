<template>
  <div>
    <p>详情页</p>
    <pre>{{ route }}</pre>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Detail',
  setup () {
    const route = useRoute()
    return {
      route
    }
  }
})
</script>

<style>

</style>
