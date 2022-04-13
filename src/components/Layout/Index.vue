<template>
  <div class="layout">
    <!-- 加载状态 -->
    <div class="layout__loading" v-if="loading">
      <van-loading
      text-size="18"
      color="#FC5717"
      text-color="#333"
      size="24px">
        加载中...
      </van-loading>
    </div>
    <!-- 异常状态 -->
    <div class="layout__error" v-else-if="error">
      <van-image
      src="https://fast-learn-oss.youbaobao.xyz/tb/error.png"
      width="110"
      height="107.5" />
      <div class="layout__error__title">网络竟然崩溃了</div>
      <div class="layout__error__message">{{errorMessage}}</div>
      <van-button
      class="layout__error__btn"
      color="#7E7E7E"
      size="normal"
      round
      plain
      @click="refresh">
      刷新
      </van-button>
    </div>
    <!-- 正常状态 -->
    <div class="layout__normal" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  methods: {
    refresh() {
      window.location.reload();
    },
  },
};
</script>

<style lang="less">
  .layout {
    width: 100%;
    height: 100%;
    &__loading {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    &__error {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #f5f5f5;
      &__title {
        font-size: 32px;
        color: #6C6C6C;
        font-weight: 400;
        margin-top: 47px;
      }
      &__message {
        font-size: 24px;
        color: #A5A5A5;
        font-weight: 400;
        margin-top: 9px;
      }
      &__btn {
        width: 132px;
        height: 48px;
        margin-top: 35px;
        border: 2px solid rgba(151, 151, 151, 1)
      }
    }
    &__normal {
      width: 100%;
      height: 100%;
    }
  }
</style>
