function check_password(pass) {
    if(pass.length < 20 && pass.length >= 8 && 
        pass.match(/[a-z]/g) != null && 
        pass.match(/[A-Z]/g) != null && 
        pass.match(/[!@#\$%\^&\*\?]/g) != null && 
        pass.match(/[0-9]/g) != null) {
        return "valid";
    } 
    else { return "not valid"; }
}