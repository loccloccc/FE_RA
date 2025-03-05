let armstrong=""
for(i = 100; i < 999; i++){
    let hundred=Math.floor(i/100);
    let ten=Math.floor((i%100)/10);
    let unit=Math.floor(i%10);
    if((hundred**3+ten**3+unit**3)==i){
        armstrong+=i + ", "
    }
}
document.write(armstrong.slice(0,armstrong.length-2));
