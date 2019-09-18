<template>
  <div style="position:relative;width:100%;overflow:hidden;padding:40px">
    <base-image-layer />
    <!--top left status  -->
    <lock-indicator top="5.5%" left="2.5%" :isLocked="true"/> 
    <container-indicator top="15.5%" left="2.5%" :isContained="true" />
    <guild-board-indicator top="5.5%" left="7.5%" :isGuildUp="true"/>

    <!-- top left center status -->
    <lock-indicator top="5.5%" left="35%" :isLocked="true"/> 
    <container-indicator top="5.5%" left="40%" :isContained="true" />
    
    <!-- top right center status -->
    <lock-indicator top="5.5%" right="35%" :isLocked="false"/> 
    <container-indicator top="5.5%" right="40%" :isContained="true" />

    <!-- top right status -->
    <lock-indicator top="5.5%" right="2.5%" :isLocked="false"/> 
    <container-indicator top="15.5%" right="2.5%" :isContained="true" />
    <guild-board-indicator top="5.5%" right="7.5%" :isGuildUp="true"/>
    
    <!-- bottom left status -->
    <lock-indicator bottom="5.5%" left="2.5%" :isLocked="true"/> 
    <container-indicator bottom="15.5%" left="2.5%" :isContained="true" />
    <guild-board-indicator bottom="5.5%" left="7%" :isGuildUp="true"/>

    <!-- bottom left center status -->
    <lock-indicator bottom="5.5%" left="35%" :isLocked="true"/> 
    <container-indicator bottom="5.5%" left="40%" :isContained="true" />

    <!-- bottom right center status -->
    <lock-indicator bottom="5.5%" right="35%" :isLocked="false"/> 
    <container-indicator bottom="5.5%" right="40%" :isContained="true" />

    <!-- bottom right status -->
    <lock-indicator bottom="5.5%" right="2.5%" :isLocked="false"/> 
    <container-indicator bottom="15.5%" right="2.5%" :isContained="true" />
    <guild-board-indicator bottom="5.5%" right="7.5%" :isGuildUp="true"/>
  </div>
</template>

<script>
import BaseImageLayer from './components/BaseImageLayer.vue'
import LockIndicator from './components/Indicators/LockIndicator'
import ContainerIndicator from './components/Indicators/ContainerIndicator'
import GuildBoardIndicator from './components/Indicators/GuildBoardIndicator'

export default {
  components:{
    BaseImageLayer,
    LockIndicator,
    ContainerIndicator,
    GuildBoardIndicator
  },
  data(){
    return {}
  }
}
</script>




