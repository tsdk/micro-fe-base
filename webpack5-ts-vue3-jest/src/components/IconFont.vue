<template>
    <i :class="[iconfont, icontype, iconsize]"></i>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 0
  }
})

const iconfont = ref('iconfont')

const icontype = computed(() => 'icon-' + props.type)

const iconsize = computed(() => 'icon-size' + props.size)

</script>
<style lang="scss" scoped>
.iconfont {
  font-size: 40px;
}

.icon-size32 {
  font-size: 32px;
}

.icon-size16 {
  font-size: 16px;
}
</style>
