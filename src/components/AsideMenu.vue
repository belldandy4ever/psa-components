<template>
  <v-card class="aside-container">
    <v-list >
      <v-list-item-group>
        <v-list-item v-for="(item, i) in items" :key="i" >
          <v-list-item-content>
            <v-list-item-title v-text="item.text" @click="onClick($event,item.value)"/>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: '桥吊EStop', value: 'BridgeEStop' },
      { text: '桥吊SafetyDoor', value: 'BridgeSafetyDoor' },
      { text: '桥吊ModuleBox', value: 'BridgeModuleBox' },
      { text: '桥吊Cameras', value: 'BridgeCameras' },
      { text: '桥吊SpotLight', value: 'BridgeSpotLight' },
      { text: '吊具图', value: 'LiftingTool' },
      { text: '中转平台', value: 'TransferPlatform' },
      { text: '安全门控制盒', value: 'SafetyDoorControlBox' },
      { text: '通讯图', value: 'Communication' },
    ],
  }),
  methods: {
    onClick(e, value) {
      this.$emit('change', value);
    },
  }
};
</script>

<style lang="less" scoped>
.aside-container{
  height: 100vh;
  width: 200px;
  overflow-y: auto;
}
</style>
