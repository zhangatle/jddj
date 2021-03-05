<template>
  <div class="wrapper">
    <shop-info :item="item" :hide-border="true"></shop-info>
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
 }
</style>
