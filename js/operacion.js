function calcular() {
    let monto=Number(document.getElementById("monto").value);
   let b200=Math.floor(monto/200);
   let b100=Math.floor((monto%200)/100) ;
   let b50=Math.floor(((monto%200)%100)/50);
   let b20=Math.floor((((monto%200)%100)%50)/20);
   let b10=Math.floor(((((monto%200)%100)%50)%20)/10);
   document.getElementById("b200").value=b200;
   document.getElementById("b100").value=b100;
   document.getElementById("b50").value=b50;
   document.getElementById("b20").value=b20;
   document.getElementById("b10").value=b10;
}