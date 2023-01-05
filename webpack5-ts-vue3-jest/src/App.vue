<template>
  <div>
    <IconFont type="duanxin" :size="32" ></IconFont>
    <div class="background">
      <span>use iconfont, i18n</span>
      <h1>{{ name }}</h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
import IconFont from '@/components/IconFont.vue';
import { ref } from "vue";

const name = ref("webpack5 + ts + vue3");
</script>
<style lang="scss" scoped>
.background {
  width: 500px;
  height: 500px;
  h1 {
    color: rgb(53, 44, 220);
    user-select: text;
  }
}
</style>
