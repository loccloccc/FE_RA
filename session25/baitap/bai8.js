function isStrongPassword(password) {
    if (password.length >= 8) {
        let arrStr = password.split("");
        let keyCapital = 0;
        let keyLower = 0;
        let keyNumber = 0;

        for (let i = 0; i < arrStr.length; i++) {
            if ("A" <= arrStr[i] && arrStr[i] <= "Z") {
                keyCapital++;
            }
            else if ("a" <= arrStr[i] && arrStr[i] <= "z") {
                keyLower++;
            }
            else if ("0" <= arrStr[i] && arrStr[i] <= "9") {
                keyNumber++;
            }
        }
        if (keyCapital > 0 && keyLower > 0 && keyNumber > 0) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

console.log(isStrongPassword("Loc123456"));  