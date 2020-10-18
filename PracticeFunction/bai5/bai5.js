let arrayName = new Array("Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus");
let arrayStar = new Array("Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo");


let collectionArray = new Array(arrayName, arrayStar);

function checkStr(str) {
    for (let i = 0; i < collectionArray.length; i++) {
        for (let j = 0; j < collectionArray[i].length; j++) {
            if (str === collectionArray[i][j]) {
                console.log(`${str}--${collectionArray[++i][j]}`);
                break;
            }
        }
        break;
    }

}

checkStr("Deneb ");



