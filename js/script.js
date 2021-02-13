
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// DOM elements //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputCardNumber = document.querySelector("#cc-num");
const inputZipNumber = document.querySelector("#zip");
const inputCss = document.querySelector("#cvv");

const selectorOptionOther = document.querySelector("#other-job-role");
const selectJob = document.querySelector("#title");
const jobOptions = document.querySelectorAll("#title option")

const selectDesign = document.querySelector("#design");
const designOptions = document.querySelectorAll("#design option")
const selectColor = document.querySelector("#shirt-colors")
const shirtOptions = document.querySelectorAll("#color option")

const fieldsetActivities = document.querySelector("#activities");
const updateCost = document.querySelector("#activities-cost");
const activitySelected = document.querySelector("#activities-hint");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const selectPayment = document.querySelector("#payment");
const selectPaymentOptions = document.querySelectorAll("#payment option");
const creditcardDiv = document.querySelector("#credit-card");
const paypalDiv = document.querySelector("#paypal");
const bitcoinDiv = document.querySelector("#bitcoin");

const form = document.querySelector("form");
const expMonth = document.querySelector("#exp-month");


/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// global var ////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
let cost = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// labels ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
let labelName = inputName.parentElement;
let labelEmail = inputEmail.parentElement;
let labelCardNumber = inputCardNumber.parentElement;
let labelZipCode = inputZipNumber.parentElement;
let labelCss = inputCss.parentElement;

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// create element ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
p = document.querySelector("#form-hint");
span = document.createElement("span");
span.style.color = "Red";
p.appendChild(span);

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// intial status /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
selectColor.style.visibility = "hidden";
selectorOptionOther.setAttribute("type", "hidden");
inputName.focus();
selectPaymentOptions[1].selected = true;
paypalDiv.style.display = "none";
bitcoinDiv.style.display = "none";

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// functions /////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function updatePrice() {
    let checkbox = event.target;
    if (checkbox.checked === true) {
        cost += parseInt(checkbox.getAttribute("data-cost"));
        updateCost.textContent = `Total: \$${cost}`;
        
    } else if (checkbox.checked === false) {
        cost -= parseInt(checkbox.getAttribute("data-cost"));
        updateCost.textContent = `Total: \$${cost}`;
     
    }
    validatePrice();
}

function validatePrice()  {
    fieldsetActivities.classList.remove("not-valid");
    fieldsetActivities.classList.remove("valid");
    if (cost === 0) {
        activitySelected.style.display = "inherit";
        fieldsetActivities.classList.add("not-valid");

    } else {
        activitySelected.style.display = "none";
        fieldsetActivities.classList.add("valid");
    }
}

function showOther() {
    let selection = event.target.value;
    let optionOther = jobOptions[jobOptions.length - 1].value;
    if (selection === optionOther) {
        selectorOptionOther.setAttribute("type", "text");
    } else {
        selectorOptionOther.value = "";
        selectorOptionOther.setAttribute("type", "hidden");
    }

}

function showColorOptions(shirtType) {
    shirtOptions[0].selected = true;
    shirtOptions[0].textContent = "Please select a color";
    for (let i = 1; i < shirtOptions.length; i += 1) { 
        let shirtTypeOptions = shirtOptions[i].getAttribute("data-theme");
        if (shirtTypeOptions === shirtType.value) {
            shirtOptions[i].style.display = "";
        } else {
            shirtOptions[i].style.display = "none";
        }
    } 
}

function showColor() {
    if (designOptions[1].selected === true) {
        let shirtType = event.target
        selectColor.style.visibility = "visible";
        showColorOptions(shirtType);
        
    } else if (designOptions[2].selected === true) {
        let shirtType = event.target
        selectColor.style.visibility = "visible";
        showColorOptions(shirtType);
    }
}

function paymentOptions() {
    if (selectPaymentOptions[1].selected === true) {
        creditcardDiv.style.display = "";
        paypalDiv.style.display = "none";
        bitcoinDiv.style.display = "none";
    } else if (selectPaymentOptions[2].selected === true) {
        creditcardDiv.style.display = "none";
        paypalDiv.style.display = "";
        bitcoinDiv.style.display = "none";
    } else if (selectPaymentOptions[3].selected === true) {
        creditcardDiv.style.display = "none";
        paypalDiv.style.display = "none";
        bitcoinDiv.style.display = "";
    }
}

function resetError() {
    span.innerHTML = "";
    labelName.classList.remove("not-valid", "valid");
    labelEmail.classList.remove("not-valid", "valid");
    fieldsetActivities.classList.remove("not-valid", "valid");
    labelCardNumber.classList.remove("not-valid", "valid");
    labelZipCode.classList.remove("not-valid", "valid");
    labelCss.classList.remove("not-valid", "valid");
}

function showError(label, error, input) {
    event.preventDefault();
    label.classList.add("not-valid");
    if (input === undefined) {
        span.innerHTML += `<br> ${error}`;
        return
    }
    span.innerHTML += `<br> ${error}`;
    showOrHideTip(true, input.nextElementSibling, label);

}

function addingPrompError(element) {
    element.classList.add("not-valid");
}
function addingPrompValidation(element) {
    element.classList.add("valid");
}

///////////////////////////////////////// helper functions ///////////////////////////////////////// 

function createListener (validator, element) {
    return e => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== null && !valid;
        const toolTip = e.target.nextElementSibling;
        showOrHideTip(showTip, toolTip, element);
    };
}

function showOrHideTip (show, element, value) {
    value.classList.remove("not-valid", "valid");
    if (show) {
        element.style.display = "inherit";
        addingPrompError(value);

    } else {
        element.style.display = "none";
        addingPrompValidation(value);
    }
}

function isNameValid () {
    return  /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(inputName.value);
}

function isValidEmailAdress () {
    let emailRegexp = /^[^@]+@[^@.]+\.[a-z]+$/i;
    return emailRegexp.test(inputEmail.value);

}


function isValidcardNumber () {
   let cardNumberRegexp = /^\d{13,16}$/g;
   return cardNumberRegexp.test(inputCardNumber.value);
}

function isValidzipNumber () {
    let zipCodeRegexp = /(^\d{5}$)|(^\d{5}-\d{4}$)/; 
    return zipCodeRegexp.test(inputZipNumber.value); 
}
function isValidCss () {
    let cvvRegexp = /^[0-9]{3,4}$/;
    return cvvRegexp.test(inputCss.value); 
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// event handlers ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

selectJob.addEventListener("change", event => {
    showOther();
});

selectDesign.addEventListener("change", event => {
    showColor();
});

fieldsetActivities.addEventListener("change", event => {
    updatePrice();
});

selectPayment.addEventListener("change", event => {
    paymentOptions();
    
});

///////////////////////////////////////// validation events ///////////////////////////////////////// 


inputName.addEventListener("input", createListener(isNameValid, labelName));

inputEmail.addEventListener("input", createListener(isValidEmailAdress, labelEmail));

inputCardNumber.addEventListener("input", createListener(isValidcardNumber, labelCardNumber));


inputZipNumber.addEventListener("input", createListener(isValidzipNumber,labelZipCode));

inputCss.addEventListener("input", createListener(isValidCss, labelCss));

form.addEventListener("submit", event => {
    resetError();
    let check = 0
    if (!isNameValid()) {
        let str = inputName.value;
        let rex = /\d/;
        if (rex.test(str)) {
            showError(labelName, "---Name field can only contain letters", inputName);
            inputName.nextElementSibling.textContent = "Name field can only contain letters";
        }
        showError(labelName, "---Name cannot be left blank", inputName);
    } else {
        addingPrompValidation(labelName);
        check += 1;
    }

    if (!isValidEmailAdress()) {
        let str = inputEmail.value;
        let rex = /\w/;
        console.log(!rex.test(str));
        if (!rex.test(str)) {
            showError(labelEmail, "---Email cannot be blank (example: \"example@gmail.com\")", inputEmail);
            inputEmail.nextElementSibling.textContent = "Email field must not be left blank";
        }
        else {
            showError(labelEmail, "---Email must contain a \"@\"", inputEmail);
            inputEmail.nextElementSibling.textContent = "Email field must contain a \"@\"";
        } 
        
    } else {
        check += 1;
        addingPrompValidation(labelEmail);
    }

    if (cost === 0) {
        showError(fieldsetActivities, "---At lest one activity must be selected", undefined);
    } else {
        check += 1;
        addingPrompValidation(fieldsetActivities);
    }
    if (selectPaymentOptions[1].selected === true) {
        if (!isValidcardNumber()) {
            showError(labelCardNumber, "---Card Number cannot be blank (example: \"1234567812345678\")", inputCardNumber);
        } else {
            check += 1;
            addingPrompValidation(labelCardNumber);
        }
    
        if (!isValidzipNumber()) {
            showError(labelZipCode, "---Zip Code cannot be blank (example: \"42071\")", inputZipNumber);
        } else {
            check += 1;
            addingPrompValidation(labelZipCode);
        }

        if (!isValidCss()) {
            showError(labelCss, "---CSS cannot be blank (example: \"111\")",inputCss);
        } else {
            check += 1;
            addingPrompValidation(labelCss);
        }

        if (check === 6) {
            window.alert("The form was succesfully submited!");
        }
    }
    


});


///////////////////////////////////////// Accessibility event ///////////////////////////////////////// 


for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener("focus", (event) => {
        let checkbox = event.target;
        let parent = checkbox.parentElement;
        parent.classList.add("focus");
    
      });
      
      checkboxes[i].addEventListener("blur", (event) => {
        let checkbox = event.target;
        let parent = checkbox.parentElement;
        parent.classList.remove("focus");
    });

}


///////////////////////////////////////// conflicting dates in checkbox ///////////////////////////////////////// 
fieldsetActivities.addEventListener("change", event => {
    let checkbox = event.target;
    if (checkbox.checked) {
        let checkboxSelectedDay = checkbox.getAttribute("data-day-and-time");
        if (!checkboxSelectedDay) {
            return
        }
        for (let i = 0; i < checkboxes.length; i += 1) {
            let otherDays = checkboxes[i].getAttribute("data-day-and-time");
            if (checkboxSelectedDay.match(otherDays)) {
                checkboxes[i].disabled = true;
                checkbox.disabled = false;
                let parentOther = checkboxes[i].parentElement;
                parentOther.classList.add("disabled");
                let parentSelected = checkbox.parentElement;
                parentSelected.classList.remove("disabled");
            } 
    
        }
        
    } else {

        for (let i = 0; i < checkboxes.length; i += 1) {
            let parent = checkboxes[i].parentElement;
            parent.classList.remove("disabled");
            checkboxes[i].disabled = false;
        }

    }
});
