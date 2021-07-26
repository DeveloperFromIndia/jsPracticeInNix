function findVowelsRegExp(str) {
    let res = str.match(/[аиеёоуыэюя]/g);
    return res === null ? 0 : res.length;
}
function findVowelsIf(str) {
    let count = 0;
    for(let i = 0;i < str.length;i++) {
        if (str[i] === 'а' || str[i] === 'и' || str[i] === 'е' || str[i] === 'ё' || str[i] === 'о' || str[i] === 'у' || str[i] === 'ы' || str[i] === 'э' || str[i] === 'ю' || str[i] === 'я' || str[i] === 'А' || str[i] === 'И' || str[i] === 'Е' || str[i] === 'Ё' || str[i] === 'О' || str[i] === 'У' || str[i] === 'Ы' || str[i] === 'Э' || str[i] === 'Ю' || str[i] === 'Я') {
            count++;
        }
    }
    return count;
}
function findVowelsSwitch(str) {
    let count = 0;
    for(let i = 0;i < str.length;i++) {
        switch(str[i]) {
            case 'А':
                count++;
                break;
            case 'а':
                count++;
                break;
            case 'И':
                count++;
                break;
            case 'и':
                count++;
                break;
            case 'Е':
                count++;
                break;
            case 'е':
                count++;
                break;
            case 'Ё':
                count++;
                break;
            case 'ё':
                count++;
                break;
            case 'О':
                count++;
                break;
            case 'о':
                count++;
                break;
            case 'У':
                count++;
                break;
            case 'у':
                count++;
                break;
            case 'Ы':
                count++;
                break;
            case 'ы':
                count++;
                break;
            case 'Э':
                count++;
                break;
            case 'э':
                count++;
                break;
            case 'Ю':
                count++;
                break;
            case 'ю':
                count++;
                break;
            case 'Я':
                count++;
                break;
            case 'я':
                count++;
                break;
        }
    }
    return count;
}