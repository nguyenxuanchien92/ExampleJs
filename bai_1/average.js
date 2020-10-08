let math;
let physical;
let chemistry;
let btAverage;

btAverage = document.getElementById("btAverage");

function average() {
    math = +document.getElementById("inputMath").value;
    physical = +document.getElementById("inputPhysical").value;
    chemistry = +document.getElementById("inputChemistry").value;
    let average = (math + physical + chemistry)/3;
    alert("Average:"+average);
}

btAverage.addEventListener("click", average);




