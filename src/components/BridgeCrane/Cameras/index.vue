<template>
    <v-card>
        <div style="position:relative;width:1500px;overflow:hidden;">
            <base-image-layer layerWidth="58%"/>
            <cameras-markers-layer layerWidth="58%"/>
            <cameras-infos-layer right="5px" top="2%"  layerWidth="390px" layerHeight="94%"/>
        </div>
    </v-card>
</template>

<script>
import BaseImageLayer from '../components/BaseImageLayer.vue';
import CamerasMarkersLayer from './Markers.vue';
import CamerasInfosLayer from './Infos.vue';
export default {
    components:{
        BaseImageLayer,
        CamerasMarkersLayer,
        CamerasInfosLayer
    }
}
</script>