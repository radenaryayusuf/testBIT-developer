const index = () => {
    let inputAngka = 3124;
    let diff = "";
    let ascInt = "";
    let descInt = "";
       
    kapreKarCalc = (num) => {
      
      let numArray = (""+num).split("");
      
      let descArray = numArray.sort(function(a,b){
        return b - a;
      });
      
      var ascArray = numArray.slice().sort(function(a,b){
        return a - b;
      });
      
      descInt = parseInt(descArray.join(''));
      ascInt  = parseInt(ascArray.join(''));
      
      diff = descInt - ascInt;
      
      return diff;
    }
    
      
      var iteration = 1;
      
      kapreKarCalc(inputAngka);

      console.log(descInt + " - " + ascInt + " = " + diff);
    
    while (diff !== 6174) {
      kapreKarCalc(diff);
      
      iteration++;
      console.log(descInt + " - " + ascInt + " = " + diff);
    }
      console.log(`Dalam kasus ini, maka konstanta kaprekars dari ${inputAngka} adalah: ${iteration}`);  
     
};

index();