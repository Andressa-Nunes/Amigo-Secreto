let listaDeAmigos = [];
function adicionarAmigo() {
const adicionandoAmigosNaLista = document.getElementById("amigo").value;

if(adicionandoAmigosNaLista.trim() !== "") {
    listaDeAmigos.push(adicionandoAmigosNaLista);
    document.getElementById("amigo").value = "";

    atualizarListaNaTela();

} else {
    alert("Por favor, insira um nome"); }
}
adicionarAmigo();

function atualizarListaNaTela() {
    let listaElementos = document.getElementById("listaAmigos");
    listaElementos.innerHTML = "";
    for(let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaElementos.appendChild(li);
        
    }
}


function sortearAmigo () {
    if(listaDeAmigos.length > 0 ) {
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let resultado = listaDeAmigos.splice(indiceAleatorio, 1) [0];
    let fraseAmigoSorteado = "O amigo secreto sorteado é: "
    document.getElementById("resultado").innerText = fraseAmigoSorteado + resultado;
    document.getElementById ("listaAmigos").style.display = "none";
    }
}
sortearAmigo();
