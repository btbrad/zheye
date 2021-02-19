<template>
  <div class="validate-input-container pb-3">
    <input type="text" :class="['form-control', {'is-invalid': inputRef.error}]" v-model="inputRef.val" @blur="validateInput" />
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
export type RuleProps = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RuleProps>
  },
  setup (props) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        console.log('校验结果', inputRef.error)
      }
    }
    return {
      inputRef,
      validateInput
    }
  }
})
</script>

<style scoped>

</style>
