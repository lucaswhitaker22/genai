
const {createImage} = require('../../src/models/openai.js')

function getFormInput() {
    var prompt = document.getElementById("promptInput").value;
    var instances = document.getElementById("instancesInput").value;
    if (prompt == "" || instances == "") {
        alert("Please fill out all fields");
        return;
    }
    console.log(prompt);
    console.log(instances);
    createImage(prompt, instances);
}

