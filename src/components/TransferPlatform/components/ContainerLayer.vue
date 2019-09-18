<template>
  <div class="container-layer-container" :style="containerStyle">
    <img :src="images.container45"  alt="">
  </div>
</template>

<script>
export default {
  props:{
    type:{
      /** container45, container40, container20 */
      type: String,
      default:'container20'
    },
    position:{
      /** topCenter topLeft topRight bottomCenter bottomLeft bottomRight */
      type: String,
      default:'topRight'
    }   
  },
  data(){
    return {
      images:Object.freeze({
        container45:require('../assets/45.png'),
        container40:require('../assets/40.png'),
        container20:require('../assets/20.png'),
      }),
      containerPosition:Object.freeze({
        'topCenter':{top:'13%',left:'50%',transform:'translate3d(-50%,0,0)'},
        'topLeft':{top:'13%',right:'51%'},
        'topRight':{top:'13%',left:'51%'},
        'bottomCenter':{bottom:'13%',left:'50%',transform:'translate3d(-50%,0,0)'},
        'bottomLeft':{bottom:'13%',right:'51%'},
        'bottomRight':{bottom:'13%',left:'51%'},
      }),
      containerSize:Object.freeze({
        'container45':{width:'79%',height:'31%'},
        'container40':{width:'70%',height:'31%'},
        'container20':{width:'35%',height:'31%'}
      })
    }
  },
  computed:{
    containerStyle(){
      return {
        ...this.containerSize[this.type],
        ...this.containerPosition[this.position]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container-layer-container{
  position: absolute;
  img{
    display: block;
    height:100%;
    width:100%;
  }
}
</style>


