<template>
  <div class="wrapper">
    <div class="address">
      <span class="iconfont address_icon">&#xe62f;</span>
      北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
      <span class="iconfont notice">&#xeb68;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe67d;</span>
      山姆会员商店优惠商品
    </div>
    <div class="banner">
      <img src="../../assets/banner.jpg" alt="">
    </div>
    <div class="service">
      <div class="item">
        <img src="../../assets/market.png" alt="">
        <p>超市便利</p>
      </div>
      <div class="item">
        <img src="../../assets/csc.png" alt="">
        <p>菜市场</p>
      </div>
      <div class="item">
        <img src="../../assets/sgd.png" alt="">
        <p>水果店</p>
      </div>
      <div class="item">
        <img src="../../assets/xhlz.png" alt="">
        <p>鲜花绿植</p>
      </div>
      <div class="item">
        <img src="../../assets/yyjk.png" alt="">
        <p>医药健康</p>
      </div>
      <div class="item">
        <img src="../../assets/jjss.png" alt="">
        <p>家居时尚</p>
      </div>
      <div class="item">
        <img src="../../assets/hpdg.png" alt="">
        <p>烘培蛋糕</p>
      </div>
      <div class="item">
        <img src="../../assets/qd.png" alt="">
        <p>签到</p>
      </div>
      <div class="item">
        <img src="../../assets/dpmy.png" alt="">
        <p>大牌免运</p>
      </div>
      <div class="item">
        <img src="../../assets/hbtc.png" alt="">
        <p>红包套餐</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="near">
      <h3>附近店铺</h3>
      <div class="item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="content">
          <div class="title">沃尔码</div>
          <p class="tag">月售1万+</p>
          <p class="tag">起送￥0</p>
          <p class="tag">基础运费￥5</p>
          <div class="notice">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
      <div class="item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="content">
          <div class="title">沃尔码</div>
          <p class="tag">月售1万+</p>
          <p class="tag">起送￥0</p>
          <p class="tag">基础运费￥5</p>
          <div class="notice">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
      <div class="item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="content">
          <div class="title">沃尔码</div>
          <p class="tag">月售1万+</p>
          <p class="tag">起送￥0</p>
          <p class="tag">基础运费￥5</p>
          <div class="notice">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
      <div class="item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="content">
          <div class="title">沃尔码</div>
          <p class="tag">月售1万+</p>
          <p class="tag">起送￥0</p>
          <p class="tag">基础运费￥5</p>
          <div class="notice">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
    </div>
  </div>
  <div class="docker">
    <span class="item active">
      <div class="iconfont">&#xe635;</div>
      <div class="title">首页</div>
    </span>
    <span class="item">
      <div class="iconfont">&#xe632;</div>
      <div class="title">购物车</div>
    </span>
    <span class="item">
      <div class="iconfont">&#xe637;</div>
      <div class="title">订单</div>
    </span>
    <span class="item">
      <div class="iconfont">&#xe602;</div>
      <div class="title">我的</div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
@import "../../style/variable";
@import "../../style/mixin";

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .1rem .18rem;
  color: $content-font-color;
  overflow-y: auto;

  .address {
    position: relative;
    padding: .16rem .16rem .16rem 0;
    line-height: 22px;
    font-size: .16rem;
    @include ellipsis;

    .address_icon {
      position: relative;
      top: .02rem;
      font-size: .2rem;
    }

    .notice {
      position: absolute;
      right: 0;
      font-size: .2rem;
      top: .17rem;
    }
  }

  .search {
    width: 100%;
    height: .32rem;
    line-height: .32rem;
    color: #B7B7B7;
    border-radius: .16rem;
    background-color: #F5F5F5;
    font-size: .14rem;

    .iconfont {
      display: inline-block;
      font-size: .20rem;
      position: relative;
      top: .02rem;
      padding: 0 .08rem 0 .16rem;
    }
  }

  .banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    margin: .12rem 0;

    img {
      width: 100%;
    }
  }

  .service {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 20%;

      img {
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
      }

      p {
        text-align: center;
        margin: .06rem 0 .16rem 0;
        color: #333;
      }
    }
  }

  .gap {
    background-color: #F1F1F1;
    height: .1rem;
    margin: 0 -.18rem
  }

  .near {
    color: #333333;

    h3 {
      font-size: .18rem;
      padding: .14rem 0;
      line-height: .25rem;
    }

    .item {
      margin-top: .12rem;
      display: flex;

      img {
        width: .56rem;
        height: .56rem;
        margin-right: .16rem;
      }

      .title {
        font-size: .16rem;
        line-height: .22rem;
        margin-bottom: .08rem;
      }

      .tag {
        display: inline-block;
        margin-right: .16rem;
        font-size: .13rem;
        line-height: .18rem;
      }

      .notice {
        margin-top: .08rem;
        color: #E93B3B;
        font-size: .13rem;
        line-height: .18rem;
        padding-bottom: .12rem;
        border-bottom: .01rem solid #F1F1F1;;
      }
    }
  }
}

.docker {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #F1F1F1;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 .18rem;
  color: $content-font-color;

  .item {
    flex: 1;
    text-align: center;

    .iconfont {
      font-size: .18rem;
      margin: 0.07rem 0 0.02rem 0;
    }

    .title {
      font-size: .2rem;
      transform: scale(.5, .5);
      transform-origin: center top;
    }
  }

  .active {
    color: #1FA4FC;
  }
}
</style>
