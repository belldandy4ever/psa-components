<template>
  <transition-group tag="div" name="slide-fade" class="transfer-platform-person-indicator" :style="personPosition[position]">
    <img v-for="person in personCount" :key="person" :src="personImg" alt="">
  </transition-group>
</template>

<script>
export default {
  props:{
    /**upper, middle, lower */
    position:{
      type:String,
      default:'upper'
    },
    personCount:{
      type:Number,
      default:0
    }
  },
  data(){
    return {
      personPosition:Object.freeze({
        'upper':{top:'0%',transform:'translate3d(-50%,0,0)'},
        'middle':{top:'50%',transform:'translate3d(-50%,-50%,0)'},
        'lower':{bottom:'0%',transform:'translate3d(-50%,0,0)'}
      })
    }
  },
  created(){
    this.personImg = require('../assets/person.png')
  }
}
</script>

<style lang="scss">
  .transfer-platform-person-indicator{
    position: absolute;
    z-index: 1;
    left:50%;
    >img{
      display:inline-block;
      transition: all .3s ease;
    }
    .slide-fade-enter-active, .slide-fade-leave-active {
      transition: all .3s ease;
    }
    .slide-fade-enter,.slide-fade-leave-to{
      transform: translateX(10px);
      opacity: 0;
    }
  }
</style>


