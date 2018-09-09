
	  function formValidation() {
        if (!userError() || !pwdError() | !pwd2Error() || !provinceError() || !phoneError() || 
            !streetNoError() || !streetNameError() || !unitNoError() || !zipError()) {
            return false;
        }
        else {
            return true;
        }
     }
     
     function clearError() {
         var errorMsg = document.querySelector("#errorMsg");
         errorMsg.innerHTML = "";
     }

     function reset() {
         clearError();
         var myFocus = document.body;
         myFocus.focus();
     }
     function userError() {

        clearError();

        var userElem = document.querySelector("#username");
        var userInput = userElem.value.trim();
        userInput = userInput.toUpperCase();

        if (userInput.length == 0) {
            var userErrorMsg = document.createElement("p");
            var userErrorContent = document.createTextNode("* Please enter a username");
            userErrorMsg.appendChild(userErrorContent);
            document.querySelector("#errorMsg").appendChild(userErrorMsg);
            return false;
        }

        if (userInput[0] < "A" || userInput[0] > "Z" || userInput.length < 6) {
            var userErrorMsg = document.createElement("p");
            var userErrorContent = document.createTextNode("* Username should be at least 6 characters long and start with a letter");
            userErrorMsg.appendChild(userErrorContent);
            document.querySelector("#errorMsg").appendChild(userErrorMsg);
            userElem.focus();
            return false;
        }
        else {
            return true;
        }
     }

     function pwdError() {

        clearError();

        var pwdElem = document.querySelector("#password");
        var pwdInput = pwdElem.value;
        var numberChk = false;
        var upperChk = false;

        if (pwdInput.length == 0) {
            var pwdErrorMsg = document.createElement("p");
            var pwdErrorContent = document.createTextNode("* Please enter a password");
            pwdErrorMsg.appendChild(pwdErrorContent);
            document.querySelector("#errorMsg").appendChild(pwdErrorMsg);
            return false;
        }

        for (var i = 0; i < pwdInput.length; i++) {
            if (isNaN(pwdInput[i]) == false) {
                numberChk = true;
            }
            if (pwdInput[i] >= "A" && pwdInput[i] <= "Z") {
                upperChk = true;
            }
        }

        if (pwdInput.length < 8) {
            var pwdErrorMsg = document.createElement("p");
            var pwdErrorContent = document.createTextNode("* Password should be at least 8 characters long");
            pwdErrorMsg.appendChild(pwdErrorContent);
            document.querySelector("#errorMsg").appendChild(pwdErrorMsg);
            pwdElem.focus();
            return false;
        }

        if (numberChk == false || upperChk == false) {
            var pwdErrorMsg = document.createElement("p");
            var pwdErrorContent = document.createTextNode("* Password should contain at least one number (0-9) and one upper case letter (A-Z)");
            pwdErrorMsg.appendChild(pwdErrorContent);
            document.querySelector("#errorMsg").appendChild(pwdErrorMsg);
            pwdElem.focus();
            return false;
        }

     return true;
    } 

    function pwd2Error() {
        
        clearError();

        var pwd2Elem = document.querySelector("#password2");
        var pwd2Input = pwd2Elem.value;

        if (pwd2Input.length == 0) {
            var pwdErrorMsg2 = document.createElement("p");
            var pwdErrorContent2 = document.createTextNode("* Please re-enter your password");
            pwdErrorMsg2.appendChild(pwdErrorContent2);
            document.querySelector("#errorMsg").appendChild(pwdErrorMsg2);
            return false;
        }

        var pwdElem = document.querySelector("#password");
        var pwdInput = pwdElem.value;

        if (pwd2Input != pwdInput) {
            var pwdErrorMsg2 = document.createElement("p");
            var pwdErrorContent2 = document.createTextNode("* Passwords do not match");
            pwdErrorMsg2.appendChild(pwdErrorContent2);
            document.querySelector("#errorMsg").appendChild(pwdErrorMsg2);
            return false;
        }
        
        return true;
    }

    function fNameError() {

        clearError();

        var nameElem = document.querySelector("#fName");
        var nameInput = nameElem.value.trim();

        if (nameInput.length == 0) {
            var nameErrorMsg = document.createElement("p");
            var nameErrorContent = document.createTextNode("* Please enter in your name");
            nameErrorMsg.appendChild(nameErrorContent);
            document.querySelector("#errorMsg").appendChild(nameErrorMsg);
            return false;
        }

        return true;
    }

    function provinceError() {

        clearError();

        var prvElem = document.querySelector("#province");
        var prvInput = prvElem.value;
        if (prvInput == 0) {
            var prvErrorMsg = document.createElement("p");
            var prvErrorContent = document.createTextNode("* Please choose a province");
            prvErrorMsg.appendChild(prvErrorContent);
            document.querySelector("#errorMsg").appendChild(prvErrorMsg);
            return false;
        }
        else {
            return true;
        }
    }

    function phoneError() {

        clearError();

        var phoneElem = document.querySelector("#phone");
        var phoneInput = phoneElem.value.trim();
        var tempInput = phoneInput.replace(/-/g,"");

        for (var i = 0; i < tempInput.length; i++) {
            if (isNaN(tempInput[i]) == true) {
                var phoneErrorMsg = document.createElement("p");
                var phoneErrorContent = document.createTextNode("* Please enter phone with only numbers");
                phoneErrorMsg.appendChild(phoneErrorContent);
                document.querySelector("#errorMsg").appendChild(phoneErrorMsg);
                phoneElem.focus();
                return false;
            }
        }
        if (phoneInput.length != 12 || phoneInput[3] != "-" || phoneInput[7] != "-") {
            var phoneErrorMsg = document.createElement("p");
            var phoneErrorContent = document.createTextNode("* Please enter phone using format ###-###-####");
            phoneErrorMsg.appendChild(phoneErrorContent);
            document.querySelector("#errorMsg").appendChild(phoneErrorMsg);
            return false;
        }
        else {
            return true;
        }
    }

    function streetNoError() {

        clearError();

        var streetNoElem = document.querySelector("#streetNo");
        var streetNoInput = streetNoElem.value;

        if (streetNoInput.length == 0) {
            var streetNoErrorMsg = document.createElement("p");
            var streetNoErrorContent = document.createTextNode("* Please enter in your street number");
            streetNoErrorMsg.appendChild(streetNoErrorContent);
            document.querySelector("#errorMsg").appendChild(streetNoErrorMsg);
            return false;
        }
        
        for (var i = 0; i < streetNoInput.length; i++) {
            if (isNaN(streetNoInput[i]) == true) {
                var streetNoErrorMsg = document.createElement("p");
                var streetNoErrorContent = document.createTextNode("* Street number should be numbers");
                streetNoErrorMsg.appendChild(streetNoErrorContent);
                document.querySelector("#errorMsg").appendChild(streetNoErrorMsg);
                return false;
            }
        }
        
        return true;
    }

    function streetNameError() {   

        clearError();

        var streetNameElem = document.querySelector("#streetName");
        var streetNameInput = streetNameElem.value.trim();
        
        if (streetNameInput.length == 0) {
            var streetErrorMsg = document.createElement("p");
            var streetErrorContent = document.createTextNode("* Please enter in your street name");
            streetErrorMsg.appendChild(streetErrorContent);
            document.querySelector("#errorMsg").appendChild(streetErrorMsg);
            return false; 
        }

        return true;
    }

    function unitNoError() {

        clearError();

        var unitElem = document.querySelector("#unitNo");
        var unitInput = unitElem.value;

        for (var i = 0; i < unitInput.length; i++) {
            if (isNaN(unitInput[i]) == true) {
                var unitErrorMsg = document.createElement("p");
                var unitErrorContent = document.createTextNode("* Unit number should be numbers");
                unitErrorMsg.appendChild(unitErrorContent);
                document.querySelector("#errorMsg").appendChild(unitErrorMsg);
                return false;
            }
        }

        return true;
    }

    function zipError() {

        clearError();

        var zipElem = document.querySelector("#zip");
        var zipInput = zipElem.value.trim();
        zipInput = zipInput.toUpperCase();

        if (zipInput.length != 6) {
            var zipErrorMsg = document.createElement("p");
            var zipErrorContent = document.createTextNode("* Postal code should be 6 characters with no spaces");
            zipErrorMsg.appendChild(zipErrorContent);
            document.querySelector("#errorMsg").appendChild(zipErrorMsg);
            return false; 
        }

        var zipLetter = true;
        var zipNumber = true;

        for (var i = 0; i < zipInput.length; i++) {

            if (i%2 == 0 && (zipInput[i] < "A" || zipInput[i] > "Z")){
                zipLetter = false;
                
            }
            else if (i%2 == 1 && isNaN(zipInput[i]) == true){
                zipNumber = false;
            }
        }

        if (zipNumber == false || zipLetter == false) {
            var zipErrorMsg = document.createElement("p");
            var zipErrorContent = document.createTextNode("* Invalid postal code");
            zipErrorMsg.appendChild(zipErrorContent);
            document.querySelector("#errorMsg").appendChild(zipErrorMsg);
            zipElem.focus();
            return false;
        }
            return true;
    }

    function cityError() {

        clearError();
        
        var cityElem = document.querySelector("#city");
        var cityInput = cityElem.value.trim();
        cityInput = cityInput.toUpperCase();
        var spaceCheck = cityInput.replace(/\s/g, "");

        if (cityInput.length == 0) {
            var cityErrorMsg = document.createElement("p");
            var cityErrorContent = document.createTextNode("* Please enter a city");
            cityErrorMsg.appendChild(cityErrorContent);
            document.querySelector("#errorMsg").appendChild(cityErrorMsg);
            return false;
        }

        for (var i = 0; i < spaceCheck.length; i++) {
            if (spaceCheck[i] < "A" || spaceCheck[i] > "Z") {
                var cityErrorMsg = document.createElement("p");
                var cityErrorContent = document.createTextNode("* Cities should only contain letters");
                cityErrorMsg.appendChild(cityErrorContent);
                document.querySelector("#errorMsg").appendChild(cityErrorMsg);
                cityElem.focus();
                return false;
            }
        }

        return true;
    }

