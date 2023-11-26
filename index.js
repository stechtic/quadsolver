var message = document.getElementById("message");
function calculate() {
    var aValue = a.value;
    var bValue = b.value;
    var cValue = c.value;

    aValue = handleDivision(aValue);
    bValue = handleDivision(bValue);
    cValue = handleDivision(cValue);

    var aInt = parseInt(aValue);
    var bInt = parseInt(bValue);
    var cInt = parseInt(cValue);

    var discriminant = (bInt * bInt) - (4 * aInt * cInt);
    var sqrtDiscriminant = Math.sqrt(Math.abs(discriminant));

    var root1, root2;

    if (discriminant > 0) {
        root1 = ((-bInt + sqrtDiscriminant) / (2 * aInt)).toFixed(2);
        root2 = ((-bInt - sqrtDiscriminant) / (2 * aInt)).toFixed(2);
    } else {
        var realPart = (-bInt / (2 * aInt)).toFixed(2);
        var imaginaryPart = (sqrtDiscriminant / (2 * aInt)).toFixed(2);

        root1 = realPart + " + " + imaginaryPart + "i";
        root2 = realPart + " - " + imaginaryPart + "i";
    }
    x1.textContent = root1;
    x2.textContent = root2;
    if (discriminant === 0) {
        message.textContent = "Roots are real and equal: ";
    } else {
        message.textContent = "Roots are real and unequal: ";
    }
}

function handleDivision(value) {
    for (let i = 0; i < value.length; i++) {
        let temp = value.charAt(i);
        if (temp === '/') {
            let sub1 = value.substring(0, i);
            let sub2 = value.substring(i + 1, value.length);
            value = (parseInt(sub1) / parseInt(sub2)).toString();
        }
    }
    return value;
}
