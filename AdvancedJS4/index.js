function example(arr,n) {
    let result = [];
    for(let i = 0,tmp = 0;i < arr.length - 1;i++,tmp = i) {
        for(let j = i + 1;j < arr.length;j++) {
            if (n == arr[tmp] + arr[j]) {
                return result = [tmp,j];
            }
        }
    }
    return result;
}