function resultado() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    const imc = peso / (altura * altura);

    let resultado;
    let classe_resultado;

    if (imc < 15.99) {
        resultado = "Magreza Grave";
        classe_resultado = 'magreza-grave';
    } else if (imc >= 16 && imc <= 16.99) {
        resultado = "Magreza Moderada";
        classe_resultado = 'magreza-moderada';
    } else if (imc >= 17 && imc <= 18.5) {
        resultado = "Magreza Leve";
        classe_resultado = 'magreza-leve';
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Saudável";
        classe_resultado = 'saudavel';
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "Sobrepeso";
        classe_resultado = 'sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        resultado = "Obesidade Grau 1";
        classe_resultado = 'obesidade1';
    } else if (imc >= 35 && imc <= 39.9) {
        resultado = "Obesidade Grau 2 (Severa)";
        classe_resultado = 'obesidade2';
    } else if (imc >= 40) {
        resultado = "Obesidade Grau 3 (Mórbida)";
        classe_resultado = 'obesidade3';
    }

    (document.getElementById("resultado1").innerHTML =
        "IMC: " + imc.toFixed(2) + "</br>");
    (document.getElementById("resultado2").innerHTML =
        resultado);
        document.getElementById("resultado2").className = classe_resultado;
}