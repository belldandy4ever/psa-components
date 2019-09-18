<template>
    <v-card>
        <div style="position:relative;width:1500px;overflow:hidden;">
            <base-image-layer layerWidth="60%"/>

            <e-stop-markers-layer 
                layerWidth="60%"
                :active="activeMarkers"
                :focus="focusMarker"
                @mouseenter="handleInfoMouseenter"
            />

            <e-stop-infos-layer 
                right="10px" 
                top="20px"  
                layerWidth="590px" 
                layerHeight="99%" 
                :focus="focusMarker"
                :active="activeMarkers"
                @mouseenter="handleInfoMouseenter"
            />
        </div>
    </v-card>
</template>

<script>
import BaseImageLayer from '../components/BaseImageLayer.vue';
import EStopMarkersLayer from './Markers.vue';
import EStopInfosLayer from './infos.vue';
export default {
    components:{
        BaseImageLayer,
        EStopMarkersLayer,
        EStopInfosLayer
    },
    data(){
        return {
            focusMarker:'',
            activeMarkers:[]
        }
    },
    methods:{
        handleInfoMouseenter(info){
            this.focusMarker = info.dataIndex
        }
    }
}
</script>