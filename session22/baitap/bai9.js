let arr = [2,4,3,6,5,8,6,2,4,9];
let a =[];
for( let i = 0 ; i < arr.length ; i++){
    if(a.indexOf(arr[i]) === -1){
        a.push(arr[i]);
    }
}
console.log(a.sort());

