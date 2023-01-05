declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

// declare module 'vue-echarts' // 引入vue-echarts等其他库
