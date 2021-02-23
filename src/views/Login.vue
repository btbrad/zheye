<template>
  <div>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailValue" placeholder="请输入邮箱地址" type="text"></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input :rules="passwordRules" v-model="passwordValue" placeholder="请输入密码" type="password"></validate-input>
      </div>
      <template #submit>
        <button type="submit" class="btn btn-danger">Submit</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ValidateInput, { RuleProps } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
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
    const onFormSubmit = (valid: boolean) => {
      console.log('onFormSubmit', valid)
    }
    return {
      emailRules,
      emailValue,
      passwordValue,
      passwordRules,
      onFormSubmit
    }
  }
})
</script>

<style>

</style>
