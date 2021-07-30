function solve(str) {
    let tmpArr = [[],[]];
    for(let i = 0;i < str.length;i++) {
        str[i] === str[i].toUpperCase() ? tmpArr[0][tmpArr[0].length] = str[i] : tmpArr[1][tmpArr[1].length] = str[i];
    }
    return tmpArr[0].length > tmpArr[1].length ? str.toUpperCase() : str.toLowerCase();
}
