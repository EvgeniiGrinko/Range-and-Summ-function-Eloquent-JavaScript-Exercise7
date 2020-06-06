let arraylist = function(start,end,step=1){
    let array = [];
    if(step<0||start>end){
        for(let i = start;i>end;i+=step){
            array.push(i);
        }
    } 
     
    else if(start<end||step>0){for(let i = start;i<=end;i+=step){
        array.push(i);
    }
    
}
else if(step == 0){ return undefined
        
}

    console.log(array);
    return array
}
let o = arraylist(2,35,11);
let a = function(array){
    let summ = 0;
    for(let i of array){
        summ+=i;
    }
    console.log(summ);
    return summ;
}
a(o);