// Faça um programa que mostre as tabuadas dos números de 1 a 10
// Usando laços de repetição exibindo como tabela.

for (var i = 1; i <= 10; i++) {
    console.log("Tabuada do " + i + ":");

    for (var j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }

    console.log("");
}