function display(a, b) {
    if (a - b > 0) {
        console.log(`${a} lớn hơn ${b}`);
    } else if (a - b < 0) {
        console.log(`${a}+${b} = ${a+b}`);
    } else {
        console.log(`${a}=${b}`);
    }
}

display(4,5);