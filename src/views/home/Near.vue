<template>
  <div class="near">
    <h3>附近店铺</h3>
    <shop-info v-for="(item, index ) in nearList" :key="index" :item="item" :hide-border="false"></shop-info>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '@/utils/request'
import ShopInfo from '@/components/ShopInfo'

const getNearListEffect = () => {
  const nearList = ref([])
  const getNearList = async () => {
    try {
      const result = await get('/api/shop/list')
      if (result?.errno === 0 && result?.data?.length > 0) {
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
  components: { ShopInfo },
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
}
</style>
