
// step one
const inputName = document.querySelector("#name");
inputName.focus();

//step two
const selectorOptionOther = document.querySelector("#other-job-role");
selectorOptionOther.setAttribute("type", "hidden");

const selectJob = document.querySelector("#title");
const jobOptions = document.querySelectorAll("#title option")

selectJob.addEventListener("change", event => {
        console.log(event.target.value);
        console.log(jobOptions[6]);
        if (event.target.value === options[6].value) {
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
    if (event.target.value === designOptions[1].value) {
        let shirtType = event.target
        selectColor.style.visibility = "visible";
        for (let i = 1; i < shirtOptions.length; i += 1) { 
            let shirtTypeOptions = shirtOptions[i].getAttribute("data-theme");
            if ( shirtTypeOptions === shirtType.value  ) {
                shirtOptions[i].style.display = "inline";
            } else {
                shirtOptions[i].style.display = "none";
            }
    
        } 
    } 

    if (event.target.value === designOptions[1].value) {
        let shirtType = event.target
        selectColor.style.visibility = "visible";
        for (let i = 1; i < shirtOptions.length; i += 1) { 
            let shirtTypeOptions = shirtOptions[i].getAttribute("data-theme");
            if ( shirtTypeOptions === shirtType.value  ) {
                shirtOptions[i].style.display = "inline";
            } else {
                shirtOptions[i].style.display = "none";
            }
    
        } 
    } 
});


// step 6
