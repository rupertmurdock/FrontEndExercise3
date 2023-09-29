const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.innerText;

        if (buttonText === "C") {
            display.value = "";
        } else if (buttonText === "=") {
            try {
                const expression = display.value.replace(/X/g, "*");
                display.value = eval(expression);
            } catch (error) {
                display.value = "Error";
            }
        } else {
            display.value += buttonText;
        }
    });
});