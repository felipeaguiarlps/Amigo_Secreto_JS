//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let nomes = [];


function adicionarAmigo() {

    let nome = document.getElementById("amigo").value.trim();
    if(nome !== ""){
        nomes.push(nome);
        document.getElementById("amigo").value = "";
    } else {
        alert("ERRO! Por favor, insira um nome válido");
    }
   
    atualizarLista();
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < nomes.length; i++){
        let li = document.createElement("li");
        li.textContent = nomes[i];
        lista.append(li);
    }

}




function sortearAmigo(){
    
}