

const btn = document.querySelector("#send");
/* Cria botao enviar selecionando o que quer enviar*/
btn.addEventListener("click", function(e) {
    e.preventDefault();/* bloqueia o envio*/

    const name = document.querySelector("#nome");   /* chama o elemento desejado*/
    const value = name.value;                       /* muda para elemento valido*/
    function checknome(value){
        if (value != " " ){
            console.log(value)/* faz o elemento aparecer no console*/
        }    else {
            alert ('Você precisa escrever seu nome')
        }                 
    }
checknome(value);


    const Email =document.querySelector("#email");
    const valuemail = Email.value;
    function InputANDcheck(valuemail){
    if (valuemail.includes('@') && valuemail.includes('.com')){
        console.log(valuemail)
    }    else {
        alert ('Você precisa de um e-mail válido')
    }
}
InputANDcheck(valuemail) /*função valida e-mail*/;


    const Texto= document.querySelector("#texto");
    const valuetexto = Texto.value
    console.log(valuetexto);
    function checktexto(valuetexto){
        if (valuetexto != "" ){
            alert (' Obrigado por nos escrever.')
        }    else {
            alert ('Você precisa escrever seu nome')
        }
}
checknome(valuetexto);

}
);

 
