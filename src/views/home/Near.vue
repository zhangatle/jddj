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
import { ref } from 'vue'
import { get } from '@/utils/request'

const getNearListEffect = () => {
  const nearList = ref([])
  const getNearList = async () => {
    try {
      const result = await get('/api/shop/list')
      if (result?.errno === 0 && result.data.length > 0) {
        nearList.value = result.data
      } else {
        console.log('err')
      }
    } catch (e) {
      console.log('err')
    }
  }
  return { getNearList, nearList }
}

export default {
  name: 'Near',
  setup () {
    const { nearList, getNearList } = getNearListEffect()
    getNearList()
    return { nearList }
  }
}
</script>

<style lang="scss" scoped>
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
