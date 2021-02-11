
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
const expMonth = document.querySelector("#exp-month");
const expMonthOptions = expMonth.querySelectorAll("option");

const expYear = document.querySelector("#exp-year");
const expYearOptions = expYear.querySelectorAll("option");

const cardNumber = document.querySelector("#cc-num");
const zipNumber = document.querySelector("#zip");
const css = document.querySelector("#cvv");

const legendActivity = document.querySelector("#activities legend");

function isNameValid () {
    return  /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(inputName.value);
}

function isValidEmailAdress () {
    let emailRegexp = /^[^@]+@[^@.]+\.[a-z]+$/i;
    return emailRegexp.test(email.value);

}

function isValidcardNumber () {

   let cardNumberRegexp = /^\d{13,16}.{1,4}$/g;
   return cardNumberRegexp.test(cardNumber.value);
}

function isValidzipNumber () {
    let zipCodeRegexp = /(^\d{5}$)|(^\d{5}-\d{4}$)/; 
    return zipCodeRegexp.test(zipNumber.value); 
}
function isValidCss () {
    let cvvRegexp = /^[0-9]{3,4}$/;
    return cvvRegexp.test(css.value); 
}






// // format func

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
        const showTip = text !== null && !valid;
        const toolTip = e.target.nextElementSibling;
        showOrHideTip(showTip, toolTip);
    };
}




inputName.addEventListener("input", createListener(isNameValid));
email.addEventListener("input", createListener(isValidEmailAdress));
cardNumber.addEventListener("input", createListener(isValidcardNumber));
cardNumber.addEventListener("blur", event => {
event.target.value = formatCardNumber(event.target.value);
});

zipNumber.addEventListener("input", createListener(isValidzipNumber));
css.addEventListener("input", createListener(isValidCss));

labelName = inputName.parentElement;


p = document.querySelector("#form-hint");
span = document.createElement("span");
span.style.color = "Red";
p.appendChild(span);

form.addEventListener("submit", event => {
    span.innerHTML = "";
    labelName.classList.remove(".not-valid", ".valid");
    if (!isNameValid()) {
        event.preventDefault();
        labelName.classList.add(".not-valid");
        console.log(labelName);
        // inputName.style.borderColor = "Red";
        span.innerHTML += `<br> --- Name`;
    } else {
        labelName.classList.add(".valid");
        console.log(labelName);
        // inputName.style.borderColor = "rgba(36, 28, 21, 0.2)";
    }

    if (!isValidEmailAdress()) {
        event.preventDefault();
        // email.style.borderColor = "Red";
        span.innerHTML += `<br> --- Email Address`;
    } else {
        // email.style.borderColor = "rgba(36, 28, 21, 0.2)";
    }

    if (cost === 0) {
        event.preventDefault();
        fieldsetActivities.classList.add(".not-valid");
        // legendActivity.style.color = "red";
        // activitySelected.style.display = "inherit";
        span.innerHTML += `<br> --- Activity`;
    } else {
        fieldsetActivities.classList.remove(".not-valid");
        // activitySelected.style.display = "none";
        // legendActivity.style.color = "black";
    }
    if (selectPaymentOptions[1].selected === true) {
        if (!isValidcardNumber()) {
            event.preventDefault();
            // cardNumber.style.borderColor = "red";
            span.innerHTML += `<br> --- Card Number`;
        } else {
            // cardNumber.style.borderColor = "rgba(36, 28, 21, 0.2)";
        }
    
        if (!isValidzipNumber()) {
            event.preventDefault();
            // zipNumber.style.borderColor = "red";
            span.innerHTML += `<br> --- Zip Code`;
        } else {
            // zipNumber.style.borderColor = "rgba(36, 28, 21, 0.2)";
        }

        if (!isValidCss()) {
            event.preventDefault();
            // css.style.borderColor = "red";
            span.innerHTML += `<br> --- CSS`;
        } else {
            // css.style.borderColor = "rgba(36, 28, 21, 0.2)";
        }
    }
    

});


/// step 9

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
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


