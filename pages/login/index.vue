<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
const formRef = ref(null)
// const age = ref(null)
const modelRef = ref({
  age: null
})
const model = modelRef
const rules = {
  age: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error('需要年龄')
        } else if (!/^\d*$/.test(value)) {
          return new Error('年龄应该为整数')
        } else if (Number(value) < 18) {
          return new Error('年龄应该超过十八岁')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ]
}
</script>

<template>
  <div>
    <p>登入</p>
    <n-form ref="formRef" :model="model" :rules="rules">
      <n-form-item path="age" label="年龄">
        <n-input v-model:value="model.age" @keydown.enter.prevent />
      </n-form-item>
    </n-form>
    <!-- <pre>{{ JSON.stringify(model, null, 2) }}</pre> -->
  </div>
</template>

<style scoped lang="scss"></style>
