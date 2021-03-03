<template>
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
    <div class="item" v-for="(item, index) in serviceList" :key="index">
      <img :src="imgSrc(item.img)" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'Recommend',
  methods: {
    imgSrc (name) {
      return require(`../../assets/${name}.png`)
    }
  },
  setup () {
    const serviceList = [
      { img: 'market', title: '超市便利' },
      { img: 'csc', title: '菜市场' },
      { img: 'sgd', title: '水果店' },
      { img: 'xhlz', title: '鲜花绿植' },
      { img: 'yyjk', title: '医药健康' },
      { img: 'jjss', title: '家居时尚' },
      { img: 'hpdg', title: '烘培蛋糕' },
      { img: 'qd', title: '签到' },
      { img: 'dpmy', title: '大牌免运' },
      { img: 'hbtc', title: '红包套餐' }
    ]
    return { serviceList }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/mixin";

.address {
  position: relative;
  padding: .16rem .18rem .16rem 0;
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
</style>
