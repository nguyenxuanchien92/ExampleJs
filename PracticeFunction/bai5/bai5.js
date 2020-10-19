let arrayName = new Array("Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus");
let arrayStar = new Array("Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo");

let result = document.getElementById("result");


let collectionArray = new Array(arrayName, arrayStar);

function checkStr(str) {
    for (let i = 0; i < collectionArray.length; i++) {
        for (let j = 0; j < collectionArray[i].length; j++) {
            switch (str) {
                case "Polaris" || "Dubhe":
                    return "Ursa Minor";
                case "Aldebaran":
                    return "Taurus";
                case "Deneb":
                    return "Cygnus";
                case  "Vega":
                    return "Lyra";
                case "Altair":
                    return "Ursa Minor";
                case "Regulus":
                    return "Leo";
                default:
                    return "We did not your word";
            }
        }
    }
}

let text = prompt("Enter your word:")
let value = checkStr(text);
result.innerText = `${text}--${value}`;


