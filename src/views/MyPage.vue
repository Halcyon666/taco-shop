<template>
  <view>
    <input type="text" v-model="inputText" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const inputText = ref<string>('hello')
</script>
