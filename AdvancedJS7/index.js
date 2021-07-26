function solve(str,n) {    
    if (str.length < n) {
        return '';
    }
    for(let asci = 97;n > 0;asci++) { 
        for(let j = 0;j < str.length;j++) { 
            if(n == 0) {
                return str
            }
            if(str.charCodeAt(j) == asci){
                str = str.split('');
                str[j] = "";
                str = str.join('');
                n--;
            }
        }
    } 
}
