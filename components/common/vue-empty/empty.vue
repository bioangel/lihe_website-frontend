<template>
  <div class="empty-box">
    <slot name="image">
      <img src="/images/icon_search_nothing.png" alt="">
    </slot>
    <div class="ac">
      <slot name="message">
        没有相关信息
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vue-empty'
}

</script>
<style lang="scss" scoped>
@import '~assets/sass/mixins';
@import '~assets/sass/variables';
.empty-box {
  position: relative;
  height: 100%;
  min-height: 5em;
  text-align: center;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    display: block;
    margin: 10px auto;
    text-align: center;
  }
  div {
    text-align: center;
    font-size: 12px;
    color: #666;
    line-height: 35px;
  }
}

</style>
