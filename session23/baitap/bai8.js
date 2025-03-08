let arr = [1,2,3,5,8,13,21];
let check = 0 ; 
for(let i = 2 ; i < arr.length ; i++){
    if(arr[i] !== arr[i-1] + arr[i-2]){
        check++;
    }
}
(check === 0) ? console.log("đây là dãy f") : console.log("đây không là dãy f");

