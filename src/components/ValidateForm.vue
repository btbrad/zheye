<template>
 <form class="validate-form-container">
   <slot name="default"></slot>
   <div class="submit-area" @click.prevent="submitForm">
     <slot name="submit">
       <button type="submit" class="btn btn-primary">提交</button>
     </slot>
   </div>
 </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidateFunc = () => boolean
export const emitter = mitt()
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    const funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = !funcArr.map(func => func()).some(item => item === false)
      context.emit('form-submit', result)
    }
    const callback = (func: ValidateFunc): void => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback as ValidateFunc)
    onUnmounted(() => {
      emitter.off('form-item-created', callback as ValidateFunc)
    })
    return {
      submitForm
    }
  }
})
</script>

<style scoped>

</style>
