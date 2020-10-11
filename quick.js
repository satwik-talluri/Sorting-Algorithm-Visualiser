var a =document.getElementById("quick");
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

function fun7(arr,index,bar){
    bar[index].style['border-left']="5px solid orange";
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

var adder=0;
var del=Math.floor((20000/Math.floor(speed)));



function partition (b,arr, l, h,bar) 
{ 
	var pivot,i,j,temp;
	pivot = b[h]; 
	i = l - 1;

	for (j = l; j <= h - 1; j++) 
	{ 
		if (b[j] < pivot) 
		{ 
			i++;
			temp=b[i];
			b[i]=b[j];
			b[j]=temp;
			adder+=del/5-50;
                setTimeout(fun1,adder,arr,i,j,bar);
			adder+=del/5-50;
                setTimeout(fun,adder,arr,i,j,bar); 
		} 
	} 
	temp=b[i+1];
	b[i+1]=b[h];
	b[h]=temp;
	adder+=del/5-50;
                setTimeout(fun,adder,arr,i+1,h,bar);
    adder+=del/5-50;
                setTimeout(fun7,adder,arr,i+1,bar); 
	return (i + 1); 
} 

function quickSort(b, arr,l, h,bar) 
{ 
    var p;
	if (l < h) 
	{ 
		p = partition(b,arr, l, h,bar);  
		quickSort(b,arr, l, p-1,bar); 
		quickSort(b,arr, p+1, h,bar); 
	} 
} 

quickSort(b,arr,0,bar.length-1,bar)
for(i=0;i<bar.length;i++)
{
    adder+=del/5-50;
                setTimeout(fun7,adder,arr,i,bar);
}
}