var bar=document.getElementById("bar-container");
var div=document.createElement("div");
div.className+="container-fluid";
bar.appendChild(div);
var bars=document.createElement("div");
bars.className+=("row justify-content-center");
div.appendChild(bars);
bars.id="bars";

var num_original=document.getElementById("size").value;

var num_size=document.getElementById("size").value;
var speed=document.getElementById("speed").value;
var s=document.getElementById("size");
var ss=document.getElementById("speed");
var ns=document.getElementById("size");
s.addEventListener("input",update);
ss.addEventListener("input",update1);
var generate_array=document.getElementById("generate");
generate_array.addEventListener("click",generate); 



function update1(){
    speed=document.getElementById("speed").value;
}
function update(){
    num_size=document.getElementById("size").value;
    speed=document.getElementById("speed").value;
    generate1();
}


function generate(){

    bars.innerHTML="";
    document.getElementById("size").value=num_original;
    for(let i=0;i<30;i++){

        var y=document.createElement("div");
        var height=Math.floor(300*Math.random());
        y.style=`border-left: 5px solid blue;height:${height}px; margin: 2px;margin-top:50px`
        bars.appendChild(y);
    }


}

function generate1(){
    bars.innerHTML="";
 
    for(let i=0;i<num_size;i++){
        var height=Math.floor(300*Math.random())+20;
        var y=document.createElement("div");
        y.style=`border-left: 5px solid blue;height:${height}px; margin: 2px;margin-top:50px`;
        bars.appendChild(y); 
     }
}
