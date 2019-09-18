<template>
  <div class="transfer-platform-locker-indicator" :style="indicatorStyle"></div>
</template>

<script>
export default {
  props:{
    /**lockUp, lockDn */
    status:{
      type:String,
      default:'lockDn'
    },
    /**topLeft,topRight,bottomLeft,bottomRight */
    position:{
      type:String,
      default:'topLeft'
    }
  },
  data(){
    return {
      indicatorPosition:Object.freeze({
        'topLeft':{top:'25%',left:'4%'},
        'topRight':{top:'25%',right:'4%'},
        'bottomLeft':{bottom:'25%',left:'4%'},
        'bottomRight':{bottom:'25%',right:'4%'}
      }),
      indicatorStatus:Object.freeze({
        'lockUp':{backgroundColor:'#0dbb07'},
        'lockDn':{backgroundColor:'#fe0100'}
      })
    }
  },
  computed:{
    indicatorStyle(){
      return {
        ...this.indicatorPosition[this.position],
        ...this.indicatorStatus[this.status]
      }
    }
  }
}
</script>

<style lang="scss">
  .transfer-platform-locker-indicator{
    position: absolute;
    width:20px;
    height:20px;
    border-radius: 50%;
    border: 3px solid #fff;
    transition:all .5s ease;
  }
</style>


