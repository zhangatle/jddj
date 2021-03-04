<template>
  <div class="header">我的订单</div>
  <div class="wrapper">
    <div class="order">
      <div class="item">
        <div class="shop">沃尔玛</div>
        <div class="status">已取消</div>
        <div class="list">
          <img src="https://p0.meituan.net/208.126/deal/455c6a884bc5b83c7c460a4896454ea9555417.jpg@100w_100h_1e_1c" alt="">
          <img src="https://p0.meituan.net/208.126/deal/9c10d5d26dd2d5231f4f2bbd84785bc4273021.jpg@100w_100h_1e_1c" alt="">
          <img src="https://p1.meituan.net/208.126/deal/d1b5a130b5aaa7d27ab39b52e10d48c6303208.jpg@100w_100h_1e_1c" alt="">
          <img src="https://p0.meituan.net/208.126/deal/b5b7b1fcf4543e08eb0088193bef566c219861.jpg@100w_100h_1e_1c" alt="">
          <div class="right">
            <div class="total">￥36,88</div>
            <div class="num">共2件</div>
          </div>
        </div>
      </div>
      <div class="item">
        <span class="shop">沃尔玛</span>
        <span class="status">已取消</span>
        <div class="list">
          <img src="https://p0.meituan.net/208.126/deal/455c6a884bc5b83c7c460a4896454ea9555417.jpg@100w_100h_1e_1c" alt="">
          <img src="https://p0.meituan.net/208.126/deal/9c10d5d26dd2d5231f4f2bbd84785bc4273021.jpg@100w_100h_1e_1c" alt="">
          <img src="https://p1.meituan.net/208.126/deal/d1b5a130b5aaa7d27ab39b52e10d48c6303208.jpg@100w_100h_1e_1c" alt="">
          <img src="https://p0.meituan.net/208.126/deal/b5b7b1fcf4543e08eb0088193bef566c219861.jpg@100w_100h_1e_1c" alt="">
          <div class="right">
            <div class="total">￥36,88</div>
            <div class="num">共2件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
  .header {
    font-size: .16rem;
    line-height: .22rem;
    color: #333;
    margin: .11rem auto;
    text-align: center;
  }
  .wrapper {
    background-color: #f8f8f8;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: .5rem;
    bottom: 0;
    .order{
      .item {
        background-color: #fff;
        height: 1.1rem;
        padding: .16rem;
        margin: .16rem;
        box-sizing: border-box;
        line-height: .22rem;
        .shop {
          display: inline-block;
          font-size: .16rem;
        }
        .status {
          display: inline-block;
          float: right;
          font-size: .14rem;
          color: #999;
        }
        .list {
          img {
            width: .4rem;
            height: .4rem;
            display: inline-block;
            margin: .06rem;
          }
        }
        .right {
          float: right;
          text-align: right;
          margin-top: .05rem;
          .total{
            font-size: 14px;
            color: #E93B3B;
          }
          .num {
            font-size: .12rem;
            color: #333;
          }
        }
      }
    }
  }
</style>
