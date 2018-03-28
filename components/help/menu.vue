<template>
  <ul class="G_tit">
    <li>
      <a href="javascript:void(0);"><i></i>关于我们</a>
      <div class="G_list_link">
        <a href="/help/about" :class="{'on':active=='about'}">联系我们</a>
        <a href="/help/privacy" :class="{'on':active=='privacy'}">网站隐私政策</a>
      </div>
    </li>
    <li>
      <a href="javascript:void(0);" class="jj"><i class=""></i>购物指南</a>
      <div class="G_list_link">
        <a href="/help/buy" :class="{'on':active=='buy'}">购物流程</a>
        <a href="/help/pay" :class="{'on':active=='pay'}">支付方式</a>
        <a href="/help/member" :class="{'on':active=='member'}">会员介绍</a>
        <a href="/help/faq" :class="{'on':active=='faq'}">常见问题</a>
      </div>
    </li>
    <li>
      <a href="javascript:void(0);"><i></i>物流配送</a>
      <div class="G_list_link">
        <a href="/help/delivery" :class="{'on':active=='delivery'}">配送方式</a>
      </div>
    </li>
    <li>
      <a href="javascript:void(0);"><i></i>售后服务</a>
      <div class="G_list_link">
        <a href="/help/returnPolicy" :class="{'on':active=='returnPolicy'}">退款政策</a>
        <a href="/help/returnProcess" :class="{'on':active=='returnProcess'}">退/换货流程</a>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    active: {
      type: String,
      default: 'privacy'
    }
  }
}
</script>
