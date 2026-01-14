function convertTemp() {
    const temp = document.getElementById("tempInput").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (temp === "") {
        result.innerHTML = "❌ Please enter a number";
        return;
    }

    let converted = "";

    if (unit === "celsius") {
        converted = `
        Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F <br>
        Kelvin: ${(Number(temp) + 273.15).toFixed(2)} K`;
    } 
    else if (unit === "fahrenheit") {
        converted = `
        Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C <br>
        Kelvin: ${((temp - 32) * 5/9 + 273.15).toFixed(2)} K`;
    } 
    else if (unit === "kelvin") {
        converted = `
        Celsius: ${(temp - 273.15).toFixed(2)} °C <br>
        Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }

    result.innerHTML = converted;
}
