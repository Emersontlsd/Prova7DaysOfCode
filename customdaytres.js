const area = prompt("Digite o nome da área que quer seguir: Front-End || Back-End");
let linguagem = "";
if (area === "Front-End") {
    linguagem = prompt("Você quer aprender REACT ou VUE? ");
}
else if (area === "Back-End") {
    linguagem = prompt("Você quer aprender C# ou JAVA ?");
}
else {
    alert("Área inserida inválida!")
}

const EspecialidadeOuFullStack = prompt("Digite 1 para continuar se especializando na área selecioanda ou 2 para continuar desenvolvendo e se tornar FullStack");
if (EspecialidadeOuFullStack == 1) {
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (EspecialidadeOuFullStack == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu uma opção válida");
}

let msg = prompt("Tem mais alguma área que gostaria de aprender ? Digite 'OK'para contirnuar.");
while (msg === "OK"){
    let novaarea = prompt("Qual seria ?");
    alert(`${novaarea} é realmente uma área muito legal!`)
    msg = prompt("Tem mais alguma área que gostaria de aprender ? Digite 'OK'para contirnuar.");
}
if (msg != "OK"){
    alert("Boa sorte com seus estudos!")
}

