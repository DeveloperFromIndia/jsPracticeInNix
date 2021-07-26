function timeCorrect(time) {
    time = time.split(':');
    time[0] %= 24;
    while(time[0] > 24 || time[1] > 60 || time[2] > 60) {
        if(time[2] > 60) {
            time[1]++;
            time[2] -= 60;
        }
        if(time[1] > 60) {
            time[0]++;
            time[1] -= 60;
            time[0] %= 24;
        }
    }
    return time.join(':');
}