var readline = require('readline');


var menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

menuOptions();

var funcionarios = []

function menuOptions() {

    menu.question("Digite o nome do funcionário \n", function (nome) {
        menu.question("Digite o salario do funcionário \n", function (numero) {
            funcionarios.push({ "NOME": nome, "SALARIO": numero })
            console.log(funcionarios)
            menu.question("Deseja adicionar outro funcionário? (S/N) \n", function (resp) {
                var confirmation = resp;
                if (confirmation == "s") {
                    menuOptions();
                } menu.close();
            })

        })

    })
    
}

