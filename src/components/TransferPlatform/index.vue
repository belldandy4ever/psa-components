<template>
  <div style="position:relative;width:100%;overflow:hidden;padding:8px">
    <base-image-layer />
    <locker-indicator position="topLeft" status="lockUp"/>
    <locker-indicator position="topRight" status="lockUp"/>
    <locker-indicator position="bottomLeft" status="lockDn"/>
    <locker-indicator position="bottomRight" status="lockDn"/>
    <person-indicator :personCount="1" position="upper"/>
    <person-indicator :personCount="2" position="middle"/>
    <person-indicator :personCount="3" position="lower"/>
    <container-layer type="container20" position="topLeft"/>
    <container-layer type="container20" position="topRight"/>
    <container-layer type="container40" position="bottomCenter"/>
  </div>
</template>

<script>
import BaseImageLayer from './components/BaseImageLayer.vue'
import ContainerLayer from './components/ContainerLayer.vue'
import LockerIndicator from './components/LockerIndicator.vue'
import PersonIndicator from './components/PersonsIndicator.vue'
export default {
  components:{
    BaseImageLayer,
    ContainerLayer,
    LockerIndicator,
    PersonIndicator
  },
  data(){
    return {}
  }
}
</script>



