var bar=document.getElementById("bar-container");
var div=document.createElement("div");
div.className+="container-fluid";
bar.appendChild(div);
var bars=document.createElement("div");
bars.className+=("row justify-content-center");
div.appendChild(bars);
bars.id="bars";


var generate_array=document.getElementById("generate");
generate_array.addEventListener("click",generate); 


function generate(){

    bars.innerHTML="";
    for(let i=0;i<100;i++){

        var y=document.createElement("div");
        var height=Math.floor(300*Math.random());
        y.style=`border-left: 5px solid blue;height:${height}px; margin: 2px;margin-top:50px`
        bars.appendChild(y);
    }


}