<template>
  <div class="near">
    <h3>附近店铺</h3>
    <div class="item" v-for="(item, index) in nearList" :key="index">
      <img :src="item.img" alt="">
      <div class="content">
        <div class="title">{{item.title}}</div>
        <p class="tag" v-for="(inner_item, inner_index) in item.tags" :key="inner_index">{{inner_item}}</p>
        <div class="notice">{{item.notice}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Near',
  setup () {
    const nearList = [
      { img: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛', tags: ['月售1万+', '起送￥0', '基础运费￥5'], notice: 'VIP尊享满89元减4元运费券（每月3张）' },
      { img: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛', tags: ['月售1万+', '起送￥0', '基础运费￥5'], notice: 'VIP尊享满89元减4元运费券（每月3张）' },
      { img: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛', tags: ['月售1万+', '起送￥0', '基础运费￥5'], notice: 'VIP尊享满89元减4元运费券（每月3张）' },
      { img: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛', tags: ['月售1万+', '起送￥0', '基础运费￥5'], notice: 'VIP尊享满89元减4元运费券（每月3张）' },
      { img: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛', tags: ['月售1万+', '起送￥0', '基础运费￥5'], notice: 'VIP尊享满89元减4元运费券（每月3张）' }
    ]
    return { nearList }
  }
}
</script>

<style scoped lang="scss">
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
      position: absolute;
      width: .56rem;
      height: .56rem;
    }

    .content {
      padding-bottom: .12rem;
      border-bottom: .01rem solid #F1F1F1;
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
}
</style>
