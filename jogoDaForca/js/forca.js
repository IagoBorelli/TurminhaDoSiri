let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavras = [];
let jogoAutomatico = true;

carregaListaAutomatica();

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    // console.log(palavraSecretaSorteada);
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }     
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }    
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
            piscarBotaoJogarNovamente(true);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
        piscarBotaoJogarNovamente(true);
    }
}

async function atraso(tempo){
    return new Promise(x => setTimeout(x, tempo))     
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    jogarNovamente = false;
    location.reload();
});

function listaAutomatica(){ // ativa o modo manual
    if (jogoAutomatico == true) {
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-play-circle'></i>"
        palavras = [];
        jogoAutomatico = false;

        document.getElementById("abreModalAddPalavra").style.display = "block";
        document.getElementById("status").innerHTML = "Modo Manual";
    }
    else if(jogoAutomatico == false){ // ativa o modo automático
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-pause-circle'></i>"
        jogoAutomatico = true;

        document.getElementById("abreModalAddPalavra").style.display = "none";
        document.getElementById("status").innerHTML = "Modo Automático";
        
    }
}

const modal = document.getElementById("modal-alerta");

function carregaListaAutomatica(){
    palavras = [
        palavra001 = {
            nome: "MARACUJA",
            categoria:"FRUTAS"
        },
        palavra002 = {
            nome: "ABACAXI",
            categoria:"FRUTAS"
        },
        palavra003 = {
            nome: "UVA",
            categoria:"FRUTAS"
        },
        palavra004 = {
            nome: "MELANCIA",
            categoria:"FRUTAS"
        },
        palavra005 = {
            nome: "AMORA",
            categoria:"FRUTAS"
        },
        palavra006 = {
            nome: "GRAVIOLA",
            categoria:"FRUTAS"
        },
        palavra007 = {
            nome: "BANANA",
            categoria:"FRUTAS"
        },
        palavra008 = {
            nome: "TANGERINA",
            categoria:"FRUTAS"
        },
        palavra009 = {
            nome: "GOIABA",
            categoria:"FRUTAS"
        },
        palavra010 = {
            nome: "LARANJA",
            categoria:"FRUTAS"
        },
        palavra011 = {
            nome: "VERMELHO",
            categoria:"CORES"
        },
        palavra012 = {
            nome: "AZUL",
            categoria:"CORES"
        },
        palavra013 = {
            nome: "AMARELO",
            categoria:"CORES"
        },
        palavra014 = {
            nome: "ROSA",
            categoria:"CORES"
        },
        palavra015 = {
            nome: "LARANJA",
            categoria:"CORES"
        },
        palavra016 = {
            nome: "VERDE",
            categoria:"CORES"
        },
        palavra017 = {
            nome: "ROXO",
            categoria:"CORES"
        },
        palavra018 = {
            nome: "MARROM",
            categoria:"CORES"
        },
        palavra019 = {
            nome: "CINZA",
            categoria:"CORES"
        },
        palavra020 = {
            nome: "PRETO",
            categoria:"CORES"
        },
        palavra021 = {
            nome: "BRASIL",
            categoria:"GEOGRAFIA"
        },
        palavra022 = {
            nome: "ESTADOS UNIDOS",
            categoria:"GEOGRAFIA"
        },
        palavra023 = {
            nome: "ESPANHA",
            categoria:"GEOGRAFIA"
        },
        palavra024 = {
            nome: "ITABAIANA",
            categoria:"GEOGRAFIA"
        },
        palavra025 = {
            nome: "CHILE",
            categoria:"GEOGRAFIA"
        },
        palavra026 = {
            nome: "PORTUGAL",
            categoria:"GEOGRAFIA"
        },
        palavra027 = {
            nome: "ARGENTINA",
            categoria:"GEOGRAFIA"
        },
        palavra028 = {
            nome: "SERGIPE",
            categoria:"GEOGRAFIA"
        },
        palavra029 = {
            nome: "NOSSA SENHORA DO SOCORRO",
            categoria:"GEOGRAFIA"
        },
        palavra030 = {
            nome: "RIO DE JANEIRO",
            categoria:"GEOGRAFIA"
        },
        palavra031 = {
            nome: "ELEFANTE",
            categoria:"ANIMAIS"
        },
        palavra032 = {
            nome: "GALINHA",
            categoria:"ANIMAIS"
        },
        palavra033 = {
            nome: "MACACO",
            categoria:"ANIMAIS"
        },
        palavra034 = {
            nome: "FORMIGA",
            categoria:"ANIMAIS"
        },
        palavra035 = {
            nome: "GIRAFA",
            categoria:"ANIMAIS"
        },
        palavra036 = {
            nome: "CACHORRO",
            categoria:"ANIMAIS"
        },
        palavra037 = {
            nome: "GATO",
            categoria:"ANIMAIS"
        },
        palavra038 = {
            nome: "BORBOLETA",
            categoria:"ANIMAIS"
        },
        palavra039 = {
            nome: "ZEBRA",
            categoria:"ANIMAIS"
        },
        palavra040 = {
            nome: "CORUJA",
            categoria:"ANIMAIS"
        },
        palavra041 = {
            nome: "CADEIRA",
            categoria:"OBJETOS"
        },
        palavra042 = {
            nome: "QUADRO",
            categoria:"OBJETOS"
        },
        palavra043 = {
            nome: "GELADEIRA",
            categoria:"OBJETOS"
        },
        palavra044 = {
            nome: "CANETA",
            categoria:"OBJETOS"
        },
        palavra045 = {
            nome: "ESTANTE",
            categoria:"OBJETOS"
        },
        palavra046 = {
            nome: "BRINQUEDO",
            categoria:"OBJETOS"
        },
        palavra047 = {
            nome: "ESTOJO",
            categoria:"OBJETOS"
        },
        palavra048 = {
            nome: "MESA",
            categoria:"OBJETOS"
        },
        palavra049 = {
            nome: "PRATILHEIRA",
            categoria:"OBJETOS"
        },
        palavra050 = {
            nome: "MOCHILA",
            categoria:"OBJETOS"
        }
    ];
}

function isNullOrWhiteSpace(input){
    return !input || !input.trim();
}

function sortear(){
    if(jogoAutomatico == true){
        location.reload();  
    }
    else{
        if(palavras.length > 0){
            listaDinamica=[];
            criarPalavraSecreta();
            montarPalavraNaTela();
            resetaTeclas();
            tentativas = 6;
            piscarBotaoJogarNovamente(false);
        }
    }
}

function resetaTeclas(){
    let teclas = document.querySelectorAll(".teclas > button")
    teclas.forEach((x) =>{
        x.style.background = "#FFFFFF";
        x.style.color = "#8B008B";
        x.disabled = false;
    });
}


async function piscarBotaoJogarNovamente(querJogar){
    if(querJogar){
        document.getElementById("jogarNovamente").style.display = "block";
    }
    else{
        document.getElementById("jogarNovamente").style.display = "none";
    }
}


