function formValidation() {
    clearerrors();
    if (!userError()) {
        return false;
    }
    else {
        return true;
    }
 }
 
 function clearerrors() {
    document.querySelector("#userError").innerHTML = "";
 }

 function userError() {
    
    clearerrors();

    var userElem = document.querySelector("#username");
    var userInput = userElem.value.trim();
    userInput = userInput.toUpperCase();

    if (userInput.length == 0) {
        var userErrorMsg = document.createElement("p");
        var userErrorContent = document.createTextNode("* Please enter a username");
        userErrorMsg.appendChild(userErrorContent);
        document.querySelector("#userError").appendChild(userErrorMsg);
        userElem.focus();
        return false;
    }
    if (userInput[0] < "A" || userInput[0] > "Z" || userInput.length < 6) {
        var userErrorMsg = document.createElement("p");
        var userErrorContent = document.createTextNode("* Username should be at least 6 characters long and start with a letter");
        userErrorMsg.appendChild(userErrorContent);
        document.querySelector("#userError").appendChild(userErrorMsg);
        userElem.focus();
        return false;
    }
    else {
        return true;
    }
 }