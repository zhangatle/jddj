<template>
  <div class="item">
    <img :src="item.img" alt="">
    <div :class="{content: true, content_border_bottom: !hideBorder}">
      <div class="title">{{ item.title }}</div>
      <p class="tag" v-for="(inner_item, inner_index) in item.tags" :key="inner_index">{{ inner_item }}</p>
      <div class="notice">{{ item.notice }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
.item {
  margin-top: .12rem;
  display: flex;

  img {
    position: absolute;
    width: .56rem;
    height: .56rem;
  }

  .content_border_bottom {
    border-bottom: .01rem solid #F1F1F1;
  }

  .content {
    padding-bottom: .12rem;
    width: 100%;
    margin-left: .8rem;

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
    }
  }
}
</style>
