AFRAME .registerComponent("flying-balloon",{
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`balloon${i}`
            var posX=Math.random()*3000+(-1000);
            var posY=Math.random()*2+(-1);
            var posZ=Math.random()*3000+(-1000);
            var position={x:posX,y:posY,z:posZ}
            this.flyingBalloon(id,position)
        }
    },
    flyingBalloon:function(id,position){
        var terrainEl=document.querySelector("#terrain")
        var balloonEl=document.createElement("a-entity")
        balloonEl.setAttribute("id",id)
        balloonEl.setAttribute("position",position)
        balloonEl.setAttribute("gltf-model","./assets/models/ballon/scene.gltf")
        balloonEl.setAttribute("scale",{x:10,y:10,z:10})
        balloonEl.setAttribute("animation-mixer",{})
        balloonEl.setAttribute("static-body",{shape:"sphere",sphereRadius:8})
        balloonEl.setAttribute("game-play",{elementId:`#${id}`})
        terrainEl.appendChild(balloonEl)
    }
})