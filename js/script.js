function konversi () {
    var inputCelcius = document.getElementById("inputCelcius").value;
    var suhuCelcius = parseFloat(inputCelcius);

    if (!isNaN(suhuCelcius)) {
        var suhuFahrenheit = (suhuCelcius * 9/5) + 32;
        document.getElementById("result").value = suhuFahrenheit.toFixed(2);

        var caraKalkulasi = "Fahrenheit = (" + suhuCelcius + "°C * 9/5) + 32 = " + suhuFahrenheit + "°F ";
        document.getElementById("caraKalkulasi").value = caraKalkulasi;
    }else {
        document.getElementById("result").innerHTML = "Masukkan suhu dalam angka";
    }
}

function reset() {
    document.getElementById("inputCelcius").value = "";
    document.getElementById("result").value = "";
    document.getElementById("caraKalkulasi").value = "";
}