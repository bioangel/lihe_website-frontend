<template>
  <div class="GoTop">
    <div class="showBtn">
      <p>
        <a href="#" class="TopBtn"></a>
        <i class="TopIcon1"></i>
        <i class="TopIcon2"></i>
        <strong>info@priplus.com</strong>
        <i class="TopIcon3"></i>
      </p>
    </div>
    <div class="showBtn">
      <p>
        <a href="#" class="TopBtn"></a>
        <i class="TopIcon1"></i>
        <strong>400-1818-840</strong>
        <i class="TopIcon2 marginT"></i>
        <i class="TopIcon3"></i>
      </p>
    </div>
    <div class="showBtn">
      <p>
        <a href="#" class="TopBtn"></a>
        <i class="TopIcon1"></i>
        <i class="TopIcon2 marginT"></i>
        <i class="TopIcon3"></i>
        <strong>priplus</strong>
        <img src="images/wx.jpg" width="45px" alt="" />
      </p>
    </div>
  </div>
</template>
<script>
import { scrollTo, easing } from '~/utils/scroll-to-anywhere'
export default {
  name: 'tool',
  data() {
    return {
      topBtnMouseOver: false,
      bottomBtnMouseOver: false,
      toggleWebrtcFn: null,
      firstOpenWeRtc: true,
      animationFrameId: null,
      showGoTop: false
    }
  },
  mounted() {
    $(window).scroll(function() {
      var sc = $(window).scrollTop();
      if (sc > 700) {
        $(".GoTop").css("display", "block");
      } else {
        $(".GoTop").css("display", "none");
      }
    })
    $(".TopBtn").click(function() {
      var sc = $(window).scrollTop();
      $('body,html').animate({
        scrollTop: 0
      }, 500);
    });
    // window.onscroll = (e) => {
    //   var e = e || window.event;
    //   var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    //   if (scrolltop > 600) {
    //     this.showGoTop = true;
    //     $('#layout-header').addClass('header-fix');
    //     $('#goAddCar').show();
    //   } else {
    //     this.showGoTop = false;
    //     $('#layout-header').removeClass('header-fix');
    //     $('#goAddCar').hide();
    //   }
    // }
  },
  methods: {
    totop() {
      $('#layout-header').removeClass('header-fix');
      scrollTo('body', 300, { easing: easing['ease-in'] })
    },
    toBottom() {
      scrollTo(window.scrollY + window.innerHeight, 300, { easing: easing['ease-in'] })
    },
    setButtonState(position, state, start) {
      this[(Object.is(position, 'bottom') ? 'bottomBtnMouseOver' : 'topBtnMouseOver')] = state
      window.cancelAnimationFrame(this.animationFrameId)
      start && this.slowMoveToAnyWhere()
    },
    slowMoveToAnyWhere() {
      const step = () => {
        let targetScrollY = window.scrollY
        const currentScrollY = document.body.scrollHeight - window.innerHeight
        if (this.bottomBtnMouseOver) targetScrollY += 1
        if (this.topBtnMouseOver) targetScrollY -= 1
        if (targetScrollY < 0) {
          targetScrollY = 0
        } else if (targetScrollY >= currentScrollY) {
          targetScrollY = currentScrollY
        }
        const canScrollTo = targetScrollY > 0 && targetScrollY < currentScrollY
        if (!canScrollTo) return false
        window.scrollTo(0, targetScrollY)
        if (this.bottomBtnMouseOver || this.topBtnMouseOver) {
          this.animationFrameId = window.requestAnimationFrame(step)
        } else {
          window.cancelAnimationFrame(this.animationFrameId)
          return false
        }
      }
      this.animationFrameId = window.requestAnimationFrame(step)
    }
  }
}

</script>
