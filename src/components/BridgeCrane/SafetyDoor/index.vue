<template>
    <div>
        <v-card>
            <div style="position:relative;width:1500px;overflow:hidden;">

                <base-image-layer layerWidth="56%"/>

                <safety-door-markers-layer 
                    layerWidth="56%" 
                    :active="activeMarkers"
                    :focus="focusMarker"
                    @click="handleInfoClick"
                    @mouseenter="handleInfoMouseenter"
                />

                <safety-door-infos-layer 
                    right="5px" 
                    top="6%"  
                    layerWidth="705px" 
                    layerHeight="645px" 
                    :focus="focusMarker"
                    :active="activeMarkers"
                    @click="handleInfoClick"
                    @mouseenter="handleInfoMouseenter"
                />
            </div>
        </v-card>

        <v-dialog v-model="isShowControlBox" width="1100">
            <v-card>
                <v-card-title class="headline"> {{controlBoxDialogTitle}}</v-card-title>
                <v-card-text>
                    <safety-door-control-box style="margin:0 auto"/>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import BaseImageLayer from '../components/BaseImageLayer.vue';
import SafetyDoorMarkersLayer from './Markers.vue';
import SafetyDoorInfosLayer from './Infos.vue';
import SafetyDoorControlBox from '../../SafetyDoorControlBox'

export default {
    components:{
        BaseImageLayer,
        SafetyDoorMarkersLayer,
        SafetyDoorInfosLayer,
        SafetyDoorControlBox
    },
    data(){
        return {
            isShowControlBox:false,
            curInfo:{},
            focusMarker:'',
            activeMarkers:[]
        }
    },
    computed:{
        controlBoxDialogTitle(){
            return `${this.curInfo.dataIndex || ''} ${this.curInfo.name || ''} ${this.curInfo.desc || ''}`
        }
    },
    methods:{
        handleInfoClick(info){
            this.focusMarker = info.dataIndex
            this.curInfo = info
            this.isShowControlBox = true
        },
        handleInfoMouseenter(info){
            this.focusMarker = info.dataIndex
        }
    }
}
</script>