function solution(str,n) {
    return n <= str.length ? `${str.slice(0,n)}...` : str;
}