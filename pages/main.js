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
    if (operator == "+") {
        return a + b;
    }

    if (operator == "-") {
        return a - b;
    }

    if (operator == "*") {
        return a * b;
    }

    if (operator == "/") {
        return a / b;
    }
}