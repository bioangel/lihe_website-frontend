<template>
  <div class="loading-container" >
    <i></i>
    <div class="ctx">
      <img src="/images/request_loading.gif" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading',
  mounted() {},
  methods: {

  },
  computed: {
    fetching() {
      return this.$store.state.fetching
    }
  }
}

</script>
<style lang="scss" scoped>
@import '~assets/sass/variables';
.loading-container {
  i {
    z-index: 200;
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    filter: alpha(opacity=30);
    -moz-opacity: 0.3;
    opacity: 0.3;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .ctx {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 75px;
    height: 40px;
    margin: -20px 0 0 -37px;
    border-radius: 4px;
    overflow: hidden;
    span {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background: #fea829;
      left: 19px;
      top: 16px;
      &.active {
        background: #dc0f50;
        left: 48px;
      }
    }
  }
}

</style>
