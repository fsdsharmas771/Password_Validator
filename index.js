{
    let inputPassword = document.getElementById('input-password');
    let numberCheckbox = document.getElementById('number');
    let upperCaseCheckbox = document.getElementById('upper-char');
    let lowerCaseCheckbox = document.getElementById('lower-char');
    let specialCharCheckbox = document.getElementById('special-char');
    let eightcherCheckbox = document.getElementById('8-char');



    inputPassword.addEventListener('keyup', (e) => {
        let userData = e.target.value;
        if (userData.length >= 8) {
            eightcherCheckbox.checked = true;
        } else {
            eightcherCheckbox.checked = false;
        }
        if (userData) {
            for (let i in userData) {
                if (userData.charCodeAt(i) >= 48 && userData.charCodeAt(i) <= 57) {
                    numberCheckbox.checked = true;
                    break;
                } else {
                    numberCheckbox.checked = false;
                }
            }
            for (let i in userData){
                if (userData.charCodeAt(i) >= 65 && userData.charCodeAt(i) <= 90) {
                    upperCaseCheckbox.checked = true;
                    break;
                } else {
                    upperCaseCheckbox.checked = false;
                }
            }
            for (let i in userData){
                if (userData.charCodeAt(i) >= 97 && userData.charCodeAt(i) <= 122) {
                    lowerCaseCheckbox.checked = true;
                    break;
                }else{
                    lowerCaseCheckbox.checked = false;
                }
            }
            for (let i in userData){
                if ((userData.charCodeAt(i) >= 32 && userData.charCodeAt(i) <= 47) || (userData.charCodeAt(i) >= 58 && userData.charCodeAt(i) <= 64) || (userData.charCodeAt(i) >= 91 && userData.charCodeAt(i) <= 96) || (userData.charCodeAt(i) >= 123 && userData.charCodeAt(i) <= 126)) {
                    specialCharCheckbox.checked = true;
                    break;
                }else{
                    specialCharCheckbox.checked = false;
                }
            }
        } else {
            numberCheckbox.checked = false;
            upperCaseCheckbox.checked = false;
            lowerCaseCheckbox.checked = false;
            specialCharCheckbox.checked = false;
        }
    });
}

