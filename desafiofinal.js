var readline = require('readline');


var menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mainMenu();

function mainMenu() {
    menu.question("1 - Cadastrar funcionário \n2 - Imprimir contracheque \nEXIT - Sair\n", function (option) {
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



var funcionarios = []

function menuOptions() {

    menu.question("Digite o nome do funcionário \n", function (nome) {
        menu.question("Digite o salario do funcionário \n", function (salario) {
            funcionarios.push({ "NOME": nome, "SALARIO": salario })
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



var codigo = 0

function printPayCheck() {
    menu.question("Digite o código do funcionário: \n", function (index) {
        codigo = parseFloat(index)
        console.log(funcionarios[codigo])
        calculoINSS();

        

    })
}


function calculoINSS() {
    
    if (funcionarios[codigo].salario <= 1045.00){
        console.log("salario mínimo")
    } else {
        mainMenu();
    }

 
    
}
