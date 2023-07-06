const title = document.title;

document.addEventListener("visibilitychange", function () {
    let isActive = !document.hidden;

    if (!isActive) {
        document.title = "Kembali dong :(";
    } else {
        document.title = title;
    }
});


function calculator(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
            break;

        case "-":
            return a - b;
            break;

        case "*":
            return a * b;
            break;

        case "/":
            return a / b;
            break;
    }
}