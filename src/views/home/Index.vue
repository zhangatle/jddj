<template>
  <div class="wrapper">
    <Recommend />
    <Near />
  </div>
  <Menu />
</template>

<script>
import Recommend from '@/views/home/Recommend'
import Near from '@/views/home/Near'
import Menu from '@/views/home/Menu'
export default {
  name: 'Index',
  components: { Recommend, Near, Menu }
}
</script>

<style lang="scss" scoped>
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
}
</style>
