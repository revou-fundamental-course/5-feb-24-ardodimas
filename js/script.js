function konversi () {
    var inputCelcius = document.getElementById("inputCelcius").value;
    var suhuCelcius = parseFloat(inputCelcius);

    if (!isNaN(suhuCelcius)) {
        var suhuFahrenheit = (suhuCelcius * 9/5) + 32;
        document.getElementById("result").value = suhuFahrenheit.toFixed(2);

        var caraKalkulasi = "Fahrenheit = (" + suhuCelcius + "°C * 9/5) + 32 = " + suhuFahrenheit + "°F ";
        document.getElementById("caraKalkulasi").value = caraKalkulasi;

    }
    else {
        document.getElementById("result").innerHTML = "Masukkan suhu dalam angka";
    }
}

function reset() {
    document.getElementById("inputCelcius").value = "";
    document.getElementById("result").value = "";
    document.getElementById("caraKalkulasi").value = "";
}

function reverse() {
    var inputFahrenheit = document.getElementById("result").value;
    var suhuFahrenheit = parseFloat(inputFahrenheit);

    if (!isNaN(suhuFahrenheit)) {
        var suhuCelcius = (suhuFahrenheit - 32) * 5/9;
        document.getElementById("inputCelcius").value = suhuCelcius.toFixed(2);
        
        var caraKalkulasi = "Celcius = ("+ suhuFahrenheit +" - 32) * 5/9 = "+ suhuCelcius.toFixed(2) +"°C";
        document.getElementById("caraKalkulasi").value = caraKalkulasi;

        document.getElementById("result").value = suhuFahrenheit.toFixed(2);
    } else {
        document.getElementById("inputCelcius").value = "";
        document.getElementById("caraKalkulasi").value = "";
    }
}