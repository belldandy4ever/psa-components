<template>
  <status-icon :top="top" :bottom="bottom" :left="left" :right="right" :iconUrls="icons" :activeUrl="isLocked ? 0 : 1"/>
</template>


<script>
import StatusIcon from './IndicatorIcon.vue'
export default {
  components:{
    StatusIcon
  },
  props:{
    isLocked:{
      type:Boolean,
      default:false
    },
    top:{
      type:String,
    },
    bottom:{
      type:String,
    },
    left:{
      type:String,
    },
    right:{
      type:String
    }
  },
  data(){
    return {
      icons:Object.freeze([
        require('../../assets/icon-locked.png'),
        require('../../assets/icon-unlocked.png')
      ])
    }
  }
}
</script>
