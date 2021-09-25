function main() {
    var depth = parseInt(readLine(), 10);
    var dist=0;
    var dia=7;
    var noche=2;
    var d=1;
       while ((dist+dia)<depth){
            dist=dist+(dia-noche);
            d=d+1; 
               
       }
       console.log(d);       
}