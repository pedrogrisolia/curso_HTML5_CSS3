/*var nome = "Pedro Grisolia";
var idade = "20";
var idade2 = "10";
var frase = "Japão é o melhor time do mundo"
//alert(nome+" tem "+ idade + " anos ")
//alert(idade+idade2)
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));

var lista = ["maçã","pera","laranja"];
lista.push("uva");
console.log(lista.join(" - "));
console.log(lista);
alert(lista[1]);
lista.pop();
console.log(lista.length)

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);

var frutas=[{nome:"maçã",cor:"vermelha"},{nome:"uva",cor:"roxa"}];
console.log(frutas);


idade = prompt("Qual sua idade?");
if(idade >=18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};

var count = 0;
while(count < 5){
    console.log(count);
    count++;
}

var d = new Date();
alert(d.getMonth()+1);
*/

function soma(n1,n2) {
    return n1+n2;
}

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}

function validaIdade(idade){
    if(idade>=18){
        return true;
    } return false;

}

function botao() {
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar</b>";
    
}

function redirecionar() {
    //window.open("https://www.duckduckgo.com/");
    window.location.href="https://www.duckduckgo.com/";
}

/*var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
alert(soma(5,10));
alert(setReplace("Vai Japão","Japão","Brasil"));*/
