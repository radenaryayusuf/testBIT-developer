let dictionary = ['pro','gram','merit','program','it','programmer'];
let minidict = dictionary
let inputUsr = 'programit';
let tempInput = '';
let output = [];
let arrayItem = []
let bannedList = []
index = () => {
    tempInput = inputUsr
    dictionary.map((a,index) => {
        // console.log(tempInput)
        minidict = dictionary
        minidict = minidict.slice(index,dictionary.length)
        // console.log(minidict + 'DICT')
        if(a !== null && tempInput !== ""){
            minidict.map(b => {
                if(a !== null && tempInput !== "" && tempInput.match(b) !== null){
                    tempInput = tempInput.replace(tempInput.match(b)[0],"")
                    arrayItem.push(b)
                    
                }
            })
            if(tempInput == ""){
                output.push(arrayItem)
            }
            arrayItem = []
        }else{
            tempInput = inputUsr
        }
        
    })
    console.log(output)
}

index();