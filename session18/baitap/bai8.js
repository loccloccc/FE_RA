let num1 = Math.abs(Number(prompt("nhập cạnh thứ nhất :"))); 
let num2 = Math.abs(Number(prompt("nhập cạnh thứ hai :")));
let num3 = Math.abs(Number(prompt("nhập cạnh thứ ba :")));
if(num1 + num2 > num3 || num1 + num3 > num2 || num3 + num2 > num1 ){
    if(num1 == num2 == num3){
        document.write("đây là tam giác đều");
        beak;
    }else if (num1 == num2 || num1 == num3 || num3 == num2 ) {
        document.write("đây là tam giác cân ");
        beak;
    }else if ((num1 + num2)*(num1 + num2) > num3*num3 || (num1 + num3)*(num1 + num3) > num2*num2 || (num3 + num2)*(num3 + num2) > num1*num1 ) {
        document.write("đây là tam giác vuông ");
        beak;
    }
    document.write("đây là tam giác");
}else{
    document.write("đây không là tam giác");
}