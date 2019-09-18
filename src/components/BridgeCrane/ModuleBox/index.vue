<template>
    <div>
        <v-card>
            <div style="position:relative;width:1500px;overflow:hidden;">

                <base-image-layer layerWidth="65%"/>

                <safety-door-markers-layer 
                    layerWidth="65%" 
                    :active="activeMarkers"
                    :focus="focusMarker"
                    @mouseenter="handleInfoMouseenter"
                />

                <safety-door-infos-layer 
                    right="66px" 
                    top="25%"  
                    layerWidth="680px" 
                    layerHeight="575px" 
                    :focus="focusMarker"
                    :active="activeMarkers"
                    @mouseenter="handleInfoMouseenter"
                />
            </div>
        </v-card>

    </div>
</template>

<script>
import BaseImageLayer from '../components/BaseImageLayer.vue';
import SafetyDoorMarkersLayer from './Markers.vue';
import SafetyDoorInfosLayer from './Infos.vue';

export default {
    components:{
        BaseImageLayer,
        SafetyDoorMarkersLayer,
        SafetyDoorInfosLayer
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