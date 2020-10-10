var a =document.getElementById("HEAP");
a.addEventListener("click",func);


function func(){
    arr=[]
    arr_sizes=[]
    bar=document.getElementById("bars").querySelectorAll("div");
    for(let i=0;i<bar.length;i++){
        arr.push((bar[i].style['height'].slice(0,bar[i].style['height'].length-2)));

    }

    b=[];
    for(let i=0;i<bar.length;i++){
        b.push(parseInt(arr[i]));
        arr[i]+="px";
    }



   function fun1(arr,left,index,bar){
    bar[left].style['border-left']="5px solid green";
    bar[index].style['border-left']="5px solid red";
}

function fun(arr,left,index,bar){
    var temp=arr[left];
    arr[left]=arr[index];
    arr[index]=temp;
    bar[left].style.height=arr[left];
    bar[index].style.height=arr[index];
    bar[left].style['border-left']="5px solid blue";
    bar[index].style['border-left']="5px solid blue";
}    
    
function fun3(arr,j,bar){
    bar[j].style['border-left']="5px solid orange";
}



var adder=0;
var del=Math.floor((20000/Math.floor(speed)));

function heapify(b,arr,n,i,bar)
{
    
    var largest = i; 
    var l = 2*i + 1; 
    var r = 2*i + 2; 
    var temp;
    if (l < n && b[l] > b[largest]) 
        largest = l; 
    if (r < n && b[r] > b[largest])
    largest=r;  
    if (largest != i) 
    { 
        temp=b[largest];
        b[largest]=b[i];
        b[i]=temp;
                adder+=del/5-50;
                setTimeout(fun1,adder,arr,i,largest,bar);
                adder+=del/5-50;
                setTimeout(fun,adder,arr,i,largest,bar);
        heapify(b,arr,n,largest,bar); 
    }
}

function heapsort(b, arr, n,bar)
{
    var i,temp;
    for ( i = n / 2 - 1; i >= 0; i--) 
    {
        heapify(b,arr,n,i,bar);
    }

    for (i=n-1; i>=0; i--) 
    { 
        temp=b[0];
        b[0]=b[i];
        b[i]=temp;
            adder+=del/5-50;
            setTimeout(fun1,adder,arr,0,i,bar);
                adder+=del/5-50;
                setTimeout(fun,adder,arr,0,i,bar);
                adder+=del/5-50;
                setTimeout(fun3,adder,arr,i,bar);
        heapify(b,arr,i,0,bar); 
    }
}


heapsort(b,arr,bar.length,bar)


}
