<template>
  <div class="docker">
    <span v-for="(item, index) in menuList" :key="index" :class="{'item':true, 'active': index === 0}">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="title">{{item.title}}</div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  setup () {
    const menuList = [
      { icon: '&#xe635;', title: '首页' },
      { icon: '&#xe632;', title: '购物车' },
      { icon: '&#xe637;', title: '订单' },
      { icon: '&#xe602;', title: '我的' }
    ]
    return { menuList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";
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
