<template>
  <status-icon :top="top" :bottom="bottom" :left="left" :right="right" :iconUrls="icons" :activeUrl="isContained ? 0 : 1"/>
</template>


<script>
import StatusIcon from './IndicatorIcon.vue'
export default {
  components:{
    StatusIcon
  },
  props:{
    isContained:{
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
        require('../../assets/icon-contained.png'),
        require('../../assets/icon-uncontained.png')
      ])
    }
  }
}
</script>
