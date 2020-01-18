//pendeklarasian Rules Array
let RulesArr = [7,2,11,15];
let inArr = 22;

index = (input) =>{

        if(isNaN(input)){ 
            console.log('Input must be number please')
        }else{
            if (RulesArr.includes(input)){ 
                console.log('<no way>')
             }else{
                RulesArr.sort(
                    (a,b) =>{
                        return a-b;
                    }
                );
                let outNum = [];
                let arrIndex = [];

                for (var x = 0; x < RulesArr.length; x++){
                    if (arrIndex[RulesArr[x]] != null){
                        var index = arrIndex[RulesArr[x]];
                        outNum[0] = index;
                        outNum[1] = x;
                        break;
                    }
                    else{
                        arrIndex[input - RulesArr[x]] = x;
                    }
                }
                if (outNum == []) {
                    console.log('<no way>')
                } else {
                    console.log(outNum)
                }
            }
        }
}


index(inArr)