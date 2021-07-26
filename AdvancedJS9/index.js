function daysRepresented(array) {
    let daysOnTrip = 0;
    for(let i = 0;i < array.length; i++) { 
        daysOnTrip += array[i][1] - array[i][0] + 1;     
    } return daysOnTrip; 
}