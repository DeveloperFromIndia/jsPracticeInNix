function mispelled(firstStr,secondStr) {
    let strLength = firstStr.length,match = 0;
    for(let i = 0,j = 0;i < strLength;i++) {
        if(firstStr[i] === secondStr[j]) {
            match++;
            j++;
        }
        if(firstStr[j] === secondStr[i]) {
            match++;
            j++;
        }
        firstStr[i] === secondStr[i] ? match++ : null; 
    }
    return strLength - match <= 1 ? true : false;
}