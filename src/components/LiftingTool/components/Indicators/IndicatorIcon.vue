<template>
  <transition-group out-in name="slide" tag="div" class="lifting-tool-status-icon-status" :style="iconPosition">
    <img v-for="(url,index) in iconUrls" :key="url" :src="url"  v-show="index === activeUrl" alt="">
  </transition-group>
</template>

<script>
export default {
  props:{
    iconUrls:{
      type:Array,
      default: () => ([]) 
    },
    activeUrl:{
      type:Number,
      default: 0
    },
    top:{
      type:String,
    },
    bottom:{
      type:String
    },
    left:{
      type:String,
    },
    right:{
      type:String,
    }
  },
  computed:{
    iconPosition(){
      const style = {}
      if(!this.top && !this.bottom){
        style.top = 0
      }else if(this.top){
        style.top = this.top
      }else{
        style.bottom = this.bottom
      }
      if(!this.left && !this.right){
        style.left = 0
      }else if(this.left){
        style.left = this.left
      }else{
        style.right = this.right
      }
      return style
    }
  }
}
</script>

<style lang="scss">
$icon-size : 30px;

.lifting-tool-status-icon-status{
  position: absolute;
  height:$icon-size;
  width:$icon-size;
  overflow: hidden;
  border-radius: 50%;
  img{
    position:absolute;
    height:100%;
    width:100%;
    left:0;
    top:0;
  }
  .slide-enter-active {
    transition: all .3s ease;
  }
  .slide-leave-active {
    transition: all .3s ease;  
  }
  .slide-enter, .slide-leave-to
  /* .slide-leave-active for below version 2.1.8 */ {
    transform: translateX(-100%);
  }
}
</style>


