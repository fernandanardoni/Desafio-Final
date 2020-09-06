var readline = require('readline');


var menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mainMenu();

function mainMenu() {
    menu.question("1 - Cadastrar funcionário \n2 - Calcular impostos \n 3 - Imprimir contracheque \nEXIT - Sair\n", function (option) {
        var opcao = option
        switch (opcao) {
            case "1":
                menuOptions();
                break;
            case "2":
                calculoINSS();
                break;
            case "3":
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
            funcionarios.push({ "NOME": nome, "SALARIO": parseFloat(salario)})
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


function calculoINSS() {
    menu.question("Digite o código do funcionário: \n", function (index){
        var codigo = parseInt(index)
        console.log(funcionarios[codigo])
        if (salario <= 1045.00){
            console.log("Salário Mínimo")
        } else {
            console.log("Maior")
        }
    
    }


function printPayCheck() {
    menu.question("Digite o código do funcionário: \n", function (index) {
        var codigo = parseFloat(index)
        
        console.log(funcionarios[codigo])

    })
}
