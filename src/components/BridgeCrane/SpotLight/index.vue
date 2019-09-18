<template>
    <v-card>
        <div style="position:relative;width:1500px;overflow:hidden;">
            <base-image-layer layerWidth="58%"/>
            <spot-light-markers-layer layerWidth="58%"/>
            <spot-light-infos-layer right="5px" top="3%"  layerWidth="500px" layerHeight="92%"/>
        </div>
    </v-card>
</template>

<script>
import BaseImageLayer from '../components/BaseImageLayer.vue';
import SpotLightMarkersLayer from './Markers.vue';
import SpotLightInfosLayer from './infos.vue';
export default {
    components:{
        BaseImageLayer,
        SpotLightMarkersLayer,
        SpotLightInfosLayer
    }
}
</script>