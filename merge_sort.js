var a =document.getElementById("merge");
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
    // for(let i=0;i<bar.length;i++){
    //     console.log(b[i]);
    // }


    function fun(arr,L,k,i,bar){
        arr[k]=L[i]+"px";
        bar[k].style.height=arr[k];
        bar[k].style['border-left']="5px solid orange";
    }

    function fun1(arr,R,k,j,bar){
        arr[k]=R[j]+"px";
        bar[k].style.height=arr[k];
        bar[k].style['border-left']="5px solid orange";
    }

    function fun2(arr,L,k,i,bar){
        arr[k]=L[i]+"px";
        bar[k].style.height=arr[k];
        bar[k].style['border-left']="5px solid orange";
    }

    function fun3(arr,R,k,j,bar){
        arr[k]=R[j]+"px";
        bar[k].style.height=arr[k];
        bar[k].style['border-left']="5px solid orange";
    }

function fun4(arr,L,k,i,bar){
    bar[k].style['border-left']="5px solid green";
}

function fun5(arr,R,k,j,bar){
    bar[k].style['border-left']="5px solid green";
}

function fun6(arr,L,k,i,bar){
    bar[k].style['border-left']="5px solid green";
}

function fun7(arr,R,k,j,bar){
    bar[k].style['border-left']="5px solid green";
}



var add=0;
var del=Math.floor((20000/Math.floor(speed)));


    function merge(b,arr, l, m, r,bar) 
{ 
    var i, j, k; 
    var n1 = m - l + 1; 
    var n2 = r - m; 
  
    L=[];
    R=[];
    for(let x=0;x<n1;x++) L.push(-1);
    for(let x=0;x<n2;x++) R.push(-1);
     

    for (i = 0; i < n1; i++) 
        L[i] = b[l + i];

    for (j = 0; j < n2; j++) 
        R[j] = b[m + 1 + j]; 
    i = 0;  
    j = 0;  
    k = l; 
    while (i < n1 && j < n2) { 
        if (L[i] <= R[j]) { 
            b[k] = L[i];
            add += del / 5 - 50;
            setTimeout(fun4,add,arr,L,k,i,bar);
            add += del / 5 - 50;
            setTimeout(fun,add,arr,L,k,i,bar); 
            i++; 
        } 
        else { 
            b[k] = R[j];
            add += del / 5 - 50;
            setTimeout(fun5,add,arr,R,k,j,bar);
            add += del / 5 - 50;
            setTimeout(fun1,add,arr,R,k,j,bar); 
            j++; 
        } 
        k++; 
    } 

    while (i < n1) { 
        b[k] = L[i];
        add += del / 5 - 50;
        setTimeout(fun6,add,arr,L,k,i,bar);
        add += del / 5 - 50;
        setTimeout(fun2,add,arr,L,k,i,bar); 
        i++; 
        k++; 
    } 
    while (j < n2) { 
        b[k] = R[j];
        add += del / 5 - 50;
        setTimeout(fun7,add,arr,R,k,j,bar);
        add += del / 5 - 50;
        setTimeout(fun3,add,arr,R,k,j,bar); 
        j++; 
        k++; 
    } 
} 

function mergeSort(b, arr,l, r,bar) 
{ 
    if (l < r) { 

        var m = parseInt(l + (r - l) / 2); 

        mergeSort(b,arr, l, m,bar); 
        mergeSort(b,arr, m + 1, r,bar);  
        merge(b,arr, l, m, r,bar); 
    } 
} 

mergeSort(b,arr,0,bar.length-1,bar)


}