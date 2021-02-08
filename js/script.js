
// step one
const inputName = document.querySelector("#name");
inputName.focus();

//step two
const selectorOptionOther = document.querySelector("#other-job-role");
selectorOptionOther.setAttribute("type", "hidden");

const selectJob = document.querySelector("#title");
const options = document.querySelectorAll("#title option")

selectJob.addEventListener("change", event => {
        console.log(event.target.value);
        console.log(options[6]);
        if (event.target.value === options[6].value) {
            selectorOptionOther.setAttribute("type", "text");
        } else {
            selectorOptionOther.setAttribute("type", "hidden");
        }
});

//step 5 

