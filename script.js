function calcularIMC(){

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    console.log(peso);
    console.log(altura);

    let alturaMetros = altura / 100;

    let imc = peso / (alturaMetros * alturaMetros);

    document.getElementById("resultado").textContent = `Seu IMC: ${imc.toFixed(2)}`

    if (imc < 18.5) {
        classificacao = "Magreza"} 
    else if (imc >= 18.5 && imc < 25) {
        classificacao = "Normal"}
    else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso"}
    else if (imc >= 30 && imc < 40) {
        classificacao = "Obesidade"}
    else {
        classificacao = "Obesidade grave"
    }
    document.getElementById("classificacao").textContent = 'Sua classificação é: ' + classificacao + ".";
}
