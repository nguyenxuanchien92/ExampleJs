let x = 0;
let array = Array();

function add_element_to_array() {
    let txt = document.getElementById("txtValue");
    let num = +txt.value;
    array.push(num);
    txt.value = "";
}

function display_array() {

    let result = "";
    let num;

    for (const argumentsKey in array) {
        num = array[argumentsKey];
        result += num + "<br>"
    }
    document.getElementById("result").innerHTML = result
}