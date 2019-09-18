class AnimateSvgEl {
    constructor(svgId){
        this.svgRef = SVG.get(svgId)
        this.svgChainObj = null
        this.__proto__.__proto__ = this.svgRef
        this.x = this.svgRef.x()
        this.y = this.svgRef.y()
        this.width = this.svgRef.width()
        this.height = this.svgRef.height()
        this.animateCenter = {
            center:{x:this.svgRef.cx(),y:this.svgRef.cy()},
            topLeft:{x:this.x,y:this.y},
            topCenter:{x:this.x + (this.width/2),y:this.y},
            topRight:{x:this.x + this.width,y:this.y},
            middleLeft:{x:this.x,y:this.y+(this.height/2)},
            middleRight:{x:this.x+this.width,y:this.y+(this.height/2)},
            bottomLeft:{x:this.x,y:this.y+this.height},
            bottomCenter:{x:this.x + (this.width/2),y:this.y + this.height},
            bottomRight:{x:this.x + this.width,y:this.y+this.height}
        }
        
        /**将svgRef中其余未重写的方法重写 */
       this._reDefineSvgRefMethodsIntoThis()
    }
        
    /**将svgRef中其余未重写的方法重写 */
    _reDefineSvgRefMethodsIntoThis(){
        console.log(this.svgRef)
        for(let methodName in this.svgRef.__proto__.__proto__.__proto__){
            if(['rotate','animate'].includes(methodName) ) continue;
            this[methodName] = (...args) => {
                if(!this.svgChainObj){
                    this.svgChainObj = this.svgRef[methodName](...args)
                }else{
                    this.svgChainObj = this.svgChainObj[methodName](...args)
                }
                return this
            }
        }
    }

    animate(...args){
        if(!this.svgChainObj){
            this.svgChainObj = this.svgRef.animate(...args)
        }else{
            this.svgChainObj = this.svgChainObj.animate(...args)
        }
        this.loop = this.svgChainObj.loop
        return this
    }



    /**
     * 使元素旋转
     * @param {number} deg 旋转角度
     * @param {*string} centerPosition 旋转中心 ['center','topLeft','topCenter','topRight','middleLeft','middleRight','bottomLeft','bottomCenter','bottomRight'] 
     */
    rotate(deg=0,centerPosition='center'){
        const x = this.animateCenter[centerPosition].x
        const y = this.animateCenter[centerPosition].y
        if(!this.svgChainObj){
            this.svgChainObj = this.svgRef.rotate(deg,x,y)
        }else{
            this.svgChainObj = this.svgChainObj.rotate(deg,x,y)
        }
        return this
    }
}



export default {
    getTransformCenters(svgRef){
        const x = svgRef.x()
        const y = svgRef.y()
        const width = svgRef.width()
        const height = svgRef.height()
        return {
            center:[svgRef.cx(),svgRef.cy()],
            topLeft:[x,y],
            topCenter:[x + (width/2),y],
            topRight:[x + width,y],
            middleLeft:[x,y+(height/2)],
            middleRight:[x+width,y+(height/2)],
            bottomLeft:[x,y+height],
            bottomCenter:[x + (width/2),y + height],
            bottomRight:[x + width,y+height]
        }
    }


}
