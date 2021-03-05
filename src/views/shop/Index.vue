<template>
  <div class="wrapper">
    <div class="top">
      <span class="back iconfont">&#xe624;</span>
      <div class="search">
        <span class="search_icon iconfont">&#xe67d;</span>
        <input type="text" placeholder="请输入商品名称搜索">
      </div>
    </div>
    <shop-info :item="item" :hide-border="true"></shop-info>
    <div class="content">
      <div class="kind"></div>
      <div class="goods">
        <img src="" alt="">
        <div class="desc">番茄250g/份</div>
        <div class="sold">月售10件</div>
        <div class="price">￥33.6 <span>￥33.6</span></div>
        <div class="num">
          <span>-</span>88<span>+</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="car">1</div>
      <div class="btn">去结算</div>
    </div>
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo'
export default {
  name: 'Index',
  components: { ShopInfo },
  setup () {
    const item = {
      id: 1,
      img: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: [
        '月售1万+',
        '起送￥0',
        '基础运费￥5'
      ],
      notice: 'VIP尊享满89元减4元运费券（每月3张）'
    }
    return { item }
  }
}
</script>

<style lang="scss" scoped>
 .wrapper {
   padding: 0 .18rem;
   .top {
     height: .32rem;
     margin-top: .16rem;
     display: flex;
     .back {
       color: #B6B6B6;
       font-size: .26rem;
       line-height: .34rem;
       margin-right: .1rem;
     }
     .search {
       float: right;
       height: .32rem;
       border: .01rem solid #F5F5F5;
       border-radius: .16rem;
       padding: 0 .12rem;
       background-color: #F5F5F5;
       font-size: .16rem;
       line-height: .32rem;
       width: 100%;
       display: flex;
       .search_icon {
         left: 0;
         font-size: .18rem;
         color: #B7B7B7;
         margin-right: .05rem;
       }
       input{
         display: block;
         width: 100%;
         color: #333333;
         border: none;
         outline: none;
         background: none;
         &::placeholder {
           font-size: .14rem;
         }
       }
     }
   }
 }
</style>
