<template>
  <div class="footer">
    者也 copyright@{{ new Date().getFullYear() }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>

<style>
.footer {
  text-align: center;
  height: 100px;
  width: 100%;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
