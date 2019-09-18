<template>
  <div class="base-image-container" :style="{width:layerWidth,height:layerHeight}">
    <img :src="require('../assets/lifting-tool.png')" alt="">
  </div>
</template>

<script>
export default {
  props: {
    layerWidth: {
      type: String,
      default: '100%',
    },
    layerHeight: {
      type:String,
      default:'auto'
    }
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.base-image-container{
  >img{
    display: block;
    width:100%;
    height:100%;
  }
}
</style>
