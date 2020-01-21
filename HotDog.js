let dictionary = ["hot", "dot", "dog", "lot", "log"];
let resultArr = [];

index = (inputUsr) =>{
    let inputanuser = inputUsr.replace(/\s\s+/g, ' ');
    let inputArr = inputanuser.split(' ');
    
    loop1:
    for(let x=0; x<inputArr.length; x++){
        loop2:
        for(let i = 0; i < dictionary.length; i++){
            let patternReg = `[${dictionary[i]}]`;
            const regex = RegExp(patternReg,"g");
            let mathesVal = [];
            mathesVal = inputArr[x].match(regex);
            let dictmini = [];
            dictmini = dictionary[i].split('');

            if (mathesVal !== null) {
                if (mathesVal.length > 0) {

                    if (dictmini.length - mathesVal.length <= 1) {
                        loop3:
                        for(let z = i; z < dictionary.length; z++){
                            let dictmini2 = [];
                            dictmini2 = dictionary[z].split('');
                            let inputspare = []; 
                            inputspare = inputArr[x].split('');
                            const resultValidation = dictmini2.every((elem, index, array) => { 
                                return elem == inputspare[index];
                            })
                            if (resultValidation) {
                                resultArr.push(z);
                                break loop2;
                            }
                        }
                        dictionary.splice(i,0,inputArr[x]);
                        resultArr.push(i);
                        break loop2;     
                    }
                    
                }
            }
        }
    }
    if(resultArr.length >= inputArr.length){
        let sortingindexres = resultArr.sort(
            (a,b) =>{
                return a-b;
            }
        );
        return dictionary.slice(sortingindexres[0],sortingindexres[sortingindexres.length-1]+1);
    }else{
        return '<no way>'
    }
}



console.log(index('hit dog'));