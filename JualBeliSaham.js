let inputHarga = [5, 6, 15, 3, 10, 22, 15];
let outputProfit = 0;
let tempProfit = 0
index = () => {
    console.log("Inputan harga saham per hari", inputHarga );
    inputHarga.map((item) => {
      inputHarga.map((item2) => {
          if (item2 - item > 0) {
             tempProfit = item2 - item;
             if(tempProfit > outputProfit){
                 outputProfit = tempProfit
             } 
          }
      })      
    })
    console.log("Profit tertinggi",outputProfit );
}

index();