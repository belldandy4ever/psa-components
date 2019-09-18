<template>
  <v-app>
    <div class="app-container">
      <aside-menu @change="onMenuChange"/>
      <div class="app-body">
        <bridge-e-stop v-show="curComponent === 'BridgeEStop'" />
        <bridge-safety-door v-show="curComponent === 'BridgeSafetyDoor'"/>
        <bridge-module-box v-show="curComponent === 'BridgeModuleBox'"/>
        <bridge-cameras v-show="curComponent === 'BridgeCameras'"/>
        <bridge-spot-light v-show="curComponent === 'BridgeSpotLight'"/>
        <lifting-tool v-show="curComponent === 'LiftingTool'"/>
        <transfer-platform v-show="curComponent === 'TransferPlatform'"/>
        <safety-door-control-box v-show="curComponent === 'SafetyDoorControlBox'"/>
        <communication v-show="curComponent === 'Communication'" :points="points"/>
      </div>

    </div>

  </v-app>
</template>

<script>
import AsideMenu from './components/AsideMenu.vue';
import LiftingTool from './components/LiftingTool/index.vue';
import TransferPlatform from './components/TransferPlatform/index.vue';
import SafetyDoorControlBox from './components/SafetyDoorControlBox/index.vue';
import Communication from './components/Communication/index.vue';
import BridgeEStop from './components/BridgeCrane/EStop';
import BridgeSafetyDoor from './components/BridgeCrane/SafetyDoor';
import BridgeModuleBox from './components/BridgeCrane/ModuleBox';
import BridgeCameras from './components/BridgeCrane/Cameras';
import BridgeSpotLight from './components/BridgeCrane/SpotLight';

export default {
  name: 'App',
  components: {
    AsideMenu,
    BridgeEStop,
    BridgeCameras,
    BridgeSafetyDoor,
    BridgeModuleBox,
    BridgeSpotLight,
    LiftingTool,
    TransferPlatform,
    SafetyDoorControlBox,
    Communication
  },
  data: () => ({
    curComponent: 'Communication',
    points:{
      test:false
    }
  }),

  methods: {
    onMenuChange(value) {
      this.curComponent = value;
    },
  },

  mounted(){
    setInterval(()=>{

      this.points = {...this.points,test:!this.points.test}
    },2000)
  }
};
</script>

<style lang="less" scoped>
.app-container{
  height:100vh;
  width:100vw;
  overflow-y: auto;
  display: flex;
  .app-body{
    padding:20px;
  }
}
</style>
