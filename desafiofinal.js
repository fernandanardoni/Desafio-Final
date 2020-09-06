var readline = require('readline');


var menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mainMenu();

function mainMenu() {
    menu.question("1 - Cadastrar funcionário \n2 - Imprimir cheque \nS - Sair\n", function (option) {
        var opcao = option
        switch (opcao) {
            case "1":
                menuOptions();
                break;
            case "2":
                printPayCheck();
                break;
            case "exit":
                menu.close();

        }
    })
}



var funcionarios = [];
var nome = " ";
var payment = 0;
var inss = 0;
var irrf = 0;
var finalPayment = 0;



var firstCase = payment <= 1045.00;
var secondCase = (payment > 1045.01) && (payment < 2089.60);
var thirdCase = (payment > 2089.61) && (payment < 3134.40);
var forthCase = (payment > 3134.41) && (payment < 6101.06);
var fifthCase = payment > 6101.06;

function firstTax() {
    inss = payment * (7.5 / 100);
    finalPayment = (payment - inss);
    return funcionarios.push({ NOME: nome, BRUTO: payment.toFixed(2), LIQUIDO: finalPayment.toFixed(2) })
}

function secondTax() {
    inss = payment * (9 / 100);
    finalPayment = (payment - inss);
    return funcionarios.push({ NOME: nome, BRUTO: payment.toFixed(2), LIQUIDO: finalPayment.toFixed(2) })
}


function thirdTax() {
    inss = payment * (12 / 100);
    finalPayment = (payment - inss);
    return funcionarios.push({ NOME: nome, BRUTO: payment.toFixed(2), LIQUIDO: finalPayment.toFixed(2) })
}

function forthTax() {
    inss = payment * (14 / 100);
    finalPayment = (payment - inss);
    return funcionarios.push({ NOME: nome, BRUTO: payment.toFixed(2), LIQUIDO: finalPayment.toFixed(2) })
}

function fifthTax() {
    inss = 713.10;
    finalPayment = (payment - inss);
    return funcionarios.push({ NOME: nome, BRUTO: payment.toFixed(2), LIQUIDO: finalPayment.toFixed(2) })
}



function menuOptions() {

    menu.question("Digite o nome do funcionário \n", function (name) {
        nome = name

        menu.question("Digite o salario do funcionário \n", function (salario) {
            payment = parseFloat(salario)
            if (firstCase) {
                firstTax();
            } else if (secondCase) {
                secondTax();
            } else if (thirdCase) {
                thirdTax();
            } else if (forthCase) {
                forthTax();
            } else if (fifthCase) {
                fifthTax
            }

            console.log(funcionarios)

            menu.question("Deseja adicionar outro funcionário? (S/N) \n", function (resp) {
                var confirmation = resp
                switch (confirmation) {
                    case "s":
                        menuOptions();
                        break;
                    case "n":
                        mainMenu();
                        break;
                }

            })

        })

    })

}




function printPayCheck() {
    menu.question("Digite o código do funcionário: \n", function (index) {
        var codigo = parseFloat(index)

        console.log(funcionarios[codigo])

    })
} 
