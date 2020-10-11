var a = document.getElementById("insertion");
a.addEventListener("click", func);

function func() {
    arr = []
    arr_sizes = []
    bar = document.getElementById("bars").querySelectorAll("div");
    for (let i = 0; i < bar.length; i++) {
        arr.push((bar[i].style['height'].slice(0, bar[i].style['height'].length - 2)));

    }

    b = [];
    for (let i = 0; i < bar.length; i++) {
        b.push(parseInt(arr[i]));
        arr[i] += "px";
    }
    // for(leti=0;i<bar.length;i++){
    //     console.log(b[i]);
    // }

    // for(let i=0;i<bar.length;i++){
    //     console.log(arr[i]);
    // }

    function fun1(arr, j, bar) {
        bar[j].style['border-left'] = "5px solid green";
        bar[j + 1].style['border-left'] = "5px solid red";
    }

    function fun(arr, j, bar) {
        arr[j + 1] = arr[j];
        bar[j + 1].style.height = arr[j + 1];
        bar[j].style['border-left'] = "5px solid orange";
        bar[j + 1].style['border-left'] = "5px solid orange";
    }

    function fun4(arr, j, key, bar) {
        arr[j + 1] = key;
        bar[j + 1].style.height = arr[j + 1];
        bar[j + 1].style['border-left'] = "5px solid orange";
    }

    function fun3(arr, j, bar) {
        bar[j].style['border-left'] = "5px solid orange";
    }

    var j, key, key2;
    var add = 0;
    var del = Math.floor((20000 / Math.floor(speed)));
    add += del / 5 - 50;
    setTimeout(fun3, add, arr, 0, bar);
    for (let i = 1; i < bar.length; i++) {
        j = i - 1;
        key = b[i];
        key2 = arr[i];
        while (j >= 0 && b[j] > key) {
            b[j + 1] = b[j];
            add += del / 5 - 50;
            setTimeout(fun1, add, arr, j, bar);
            add += del / 5 - 50;
            setTimeout(fun, add, arr, j, bar);
            j = j - 1;
        }
        b[j + 1] = key;
        add += del / 5 - 50;
        setTimeout(fun4, add, arr, j, key2, bar);
        // add+=del/5-50;
        // setTimeout(fun, add, arr, j, bar);
    }
    // add+=del/5-50;
    // setTimeout(fun10, add, arr, 0);


}