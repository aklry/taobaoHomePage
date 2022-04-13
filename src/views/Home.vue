<template>
  <layout :loading="loading"
  :error="error"
  :errorMessage="errMsg" >
  </layout>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      loading: true,
      error: false,
      errMsg: '别紧张，试试看刷新页面~',
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>
