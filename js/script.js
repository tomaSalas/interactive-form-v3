
// step 1
const inputName = document.querySelector("#name");
const nameHint = document.querySelector("#name-hint");
inputName.focus();

//step 2
const selectorOptionOther = document.querySelector("#other-job-role");
selectorOptionOther.setAttribute("type", "hidden");

const selectJob = document.querySelector("#title");
const jobOptions = document.querySelectorAll("#title option")

selectJob.addEventListener("change", event => {
        console.log(event.target.value);
        console.log(jobOptions[6]);
        if (event.target.value === jobOptions[6].value) {
            selectorOptionOther.setAttribute("type", "text");
        } else {
            selectorOptionOther.setAttribute("type", "hidden");
        }
});

//step 5 

const selectDesign = document.querySelector("#design");
const designOptions = document.querySelectorAll("#design option")
const selectColor = document.querySelector("#shirt-colors")
const shirtOptions = document.querySelectorAll("#color option")
selectColor.style.visibility = "hidden";






selectDesign.addEventListener("change", event => {
    if (designOptions[1].selected === true) {
        let shirtType = event.target
        selectColor.style.visibility = "visible";
        for (let i = 1; i < shirtOptions.length; i += 1) { 
            let shirtTypeOptions = shirtOptions[i].getAttribute("data-theme");
            if ( shirtTypeOptions === shirtType.value  ) {
                shirtOptions[i].style.display = "";
            } else {
                shirtOptions[i].style.display = "none";
            }
    
        } 
    } 

    if (designOptions[2].selected === true) {
        let shirtType = event.target
        selectColor.style.visibility = "visible";
        for (let i = 1; i < shirtOptions.length; i += 1) { 
            let shirtTypeOptions = shirtOptions[i].getAttribute("data-theme");
            if ( shirtTypeOptions === shirtType.value  ) {
                shirtOptions[i].style.display = "";
            } else {
                shirtOptions[i].style.display = "none";
            }
    
        } 
    } 
});


// step 6

const fieldsetActivities = document.querySelector("#activities");
const updateCost = document.querySelector("#activities-cost");
const activitySelected = document.querySelector("#activities-hint");


let cost = 0;

fieldsetActivities.addEventListener("change", event => {
    let chechbox = event.target;
    if (chechbox.checked === true) {
        cost += parseInt(chechbox.getAttribute("data-cost"));
        updateCost.textContent = `Total: \$${cost}`;
        
    }
    if (chechbox.checked === false) {
        cost -= parseInt(chechbox.getAttribute("data-cost"));
        updateCost.textContent = `Total: \$${cost}`;
    }

    if (cost === 0) {
        activitySelected.style.display = "inherit"
    } else {
        activitySelected.style.display = "none";
    }
});

//step7

const selectPayment = document.querySelector("#payment");
const selectPaymentOptions = document.querySelectorAll("#payment option");
const creditcardDiv = document.querySelector("#credit-card");
const paypalDiv = document.querySelector("#paypal");
const bitcoinDiv = document.querySelector("#bitcoin");

selectPaymentOptions[1].selected = true;

paypalDiv.style.display = "none";
bitcoinDiv.style.display = "none";


selectPayment.addEventListener("change", event => {

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
});

//step 8 

const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailHint = email.querySelector("#email-hint")
console.log(emailHint);
const expMonth = document.querySelector("#exp-month");
const expMonthOptions = expMonth.querySelectorAll("option");

const expYear = document.querySelector("#exp-year");
const expYearOptions = expYear.querySelectorAll("option");

const cardNumber = document.querySelector("#cc-num");
const zipNumber = document.querySelector("#zip");
const css = document.querySelector("#cvv");

function isValidEmailAdress (email) {
    let emailRegexp = /^[^@]+@[^@.]+\.[a-z]+$/i;
    console.log(emailRegexp.test(email));
    return emailRegexp.test(email);

}

function isValidcardNumber (cardNumber) {

   let cardNumberRegexp = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

   return cardNumberRegexp.test(cardNumber);
}
function isMothSelected (option) {
    console.log("hello");

}
function isValidzipNumber (zipCode) {
    let zipCodeRegexp = /(^\d{5}$)|(^\d{5}-\d{4}$)/; 
    console.log(zipCodeRegexp.test(zipCode));
    return zipCodeRegexp.test(zipCode); 
}
function isValidCss (css) {
    let cvvRegexp = /^[0-9]{3,4}$/;
    console.log(cvvRegexp.test(css));
    return cvvRegexp.test(css); 
}

function isNameValid (inputName) {
    return  !inputName || /^\s*$/.test(inputName);

}



// format func

function formatCardNumber (value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || '';
    var parts = [];
    for (i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value
    }

}




function showOrHideTip (show, element) {

    if (show) {
        element.style.display = "inherit";
    } else {
        element.style.display = "none";
    }
}



function createListener (validator) {
    return e => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const toolTip = e.target.nextElementSibling;
        showOrHideTip(showTip, toolTip);
    };
}




inputName.addEventListener("input", createListener(isNameValid));
cardNumber.addEventListener("input", createListener(isValidcardNumber));
cardNumber.addEventListener("blur", event => {
event.target.value = formatCardNumber(event.target.value);
});
email.addEventListener("input", createListener(isValidEmailAdress));
zipNumber.addEventListener("input", createListener(isValidzipNumber));
css.addEventListener("input", createListener(isValidCss));



p = document.querySelector("#form-hint");

form.addEventListener("submit", event => {
    event.preventDefault();

    
    console.log(!createListener(isValidEmailAdress));
    p.innerHTML = "- required field";
    if (createListener(isValidEmailAdress)) {
        event.preventDefault();
        console.log("email is wrong")
        p.innerHTML += `<br> Email Address`
    }


    console.log("button is working");
    


});
