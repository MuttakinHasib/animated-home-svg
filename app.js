
/*** i add some javascript to get all information  of stroke size/length's ****/
const logo = document.querySelectorAll("#home path");
console.log(logo);
for (let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}