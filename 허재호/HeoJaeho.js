const inputWidth = document.querySelector("#inputWidth");
const inputHeight = document.querySelector("#inputHeight");
const inputFontSize = document.querySelector("#inputFontSize");
const inputFontWeight = document.querySelectorAll(".inputFontWeight");
const inputColor = document.querySelector("#inputColor");
const inputBackgroundColor = document.querySelector("#inputBackgroundColor");
const inputJustifyContent = document.querySelectorAll(".inputJustifyContent");
const inputAlignItems = document.querySelectorAll(".inputAlignItems");
const inputString = document.querySelector("#inputString");

const updateBtn = document.querySelector("#updateBtn");
const printBox = document.querySelector("#printBox");
const printText = document.querySelector("#printText");

updateBtn.addEventListener("click", () => {

    let inputFontWeightValue;
    let inputJustifyContentValue;
    let inputAlignItemsValue;

    for(let i=0; i<inputFontWeight.length; i++ ){
        if(inputFontWeight[i].checked) {
            inputFontWeightValue = inputFontWeight[i].value;
        }
    }
    
    for(let i=0; i<inputJustifyContent.length; i++ ){
        if(inputJustifyContent[i].checked) {
            inputJustifyContentValue = inputJustifyContent[i].value;
        }
    }

    for(let i=0; i<inputAlignItems.length; i++ ){
        if(inputAlignItems[i].checked) {
            inputAlignItemsValue = inputAlignItems[i].value;
        }
    }

    printText.innerText = inputString.value;
    printText.style.fontSize = Number(inputFontSize.value) + "px";
    printText.style.fontWeight = Number(inputFontWeightValue);
    printText.style.color = inputColor.value;

    printBox.style.width = Number(inputWidth.value) + "px";
    printBox.style.height = Number(inputHeight.value) + "px";
    printBox.style.justifyContent = inputJustifyContentValue;
    printBox.style.alignItems = inputAlignItemsValue;
    printBox.style.backgroundColor = inputBackgroundColor.value;
});