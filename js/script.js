const select = document.getElementById("select");
const modelo = document.getElementById("inputModelo");
const cor = document.getElementById("inputCor");
const fabricante = document.getElementById("inputFabricante");
const cc = document.getElementById('inputCilindradas');
const pes = document.getElementById('inputPes');
const formulario = document.getElementById("form");


const divcarros = document.getElementById("divCarros");
const divmotos = document.getElementById("divMotos");
const divbarcos = document.getElementById("divBarcos");
const lista = document.getElementById("lista");
const canvas = document.getElementById("canvas");
const mostrarCarros = document.getElementById("canvas1");
const mostrarMotos = document.getElementById("canvas2");
const mostrarBarcos = document.getElementById("canvas3");


const carros = [];
const motos = [];
const barcos = [];

class Cadastro {

    constructor(modeloP, corP, fabricanteP, atributoP) {
        this.modelo = modeloP;
        this.cor = corP;
        this.fabricante = fabricanteP;
        this.atributo = atributoP;
    }

    card = function () {
        let card;
        if (select.value == "cr") {
            card = '<div id ="cardMode" class="card">' +
                '<p><i><strong>Modelo:&nbsp</strong></i> ' + this.modelo + '</p>' +
                '<p><i><strong>Cor:&nbsp</strong></i> ' + this.cor + '</p>' +
                '<p><i><strong>Fabricante:&nbsp</strong></i> ' + this.fabricante + '</p>' +
                '</div>';
        } else if (select.value == "mt") {
            card = '<div id ="cardMode" class="card">' +
                '<p><i><strong>Modelo:&nbsp</strong></i> ' + this.modelo + '</p>' +
                '<p><i><strong>Cor:&nbsp</strong></i> ' + this.cor + '</p>' +
                '<p><i><strong>Fabricante:&nbsp</strong></i> ' + this.fabricante + '</p>' +
                '<p><i><strong>Cilindradas:&nbsp</strong></i> ' + this.atributo + '</p>' +
                '</div>';
        } else {
            card = '<div id ="cardMode" class="card">' +
                '<p><i><strong>Modelo:&nbsp</strong></i> ' + this.modelo + '</p>' +
                '<p><i><strong>Cor:&nbsp</strong></i> ' + this.cor + '</p>' +
                '<p><i><strong>Fabricante:&nbsp</strong></i> ' + this.fabricante + '</p>' +
                '<p><i><strong>Pes:&nbsp</strong></i> ' + this.atributo + '</p>' +
                '</div>';
        }
        return card;
    }
}


function cadastrar() {
    let novoCadastro;
    if (select.value == "mt") {
        novoCadastro = new Cadastro(modelo.value, cor.value, fabricante.value, cc.value);
        console.log(cc.value)
    } else if (select.value == "bc") {
        novoCadastro = new Cadastro(modelo.value, cor.value, fabricante.value, pes.value);
        console.log(pes.value);
    } else {

        novoCadastro = new Cadastro(modelo.value, cor.value, fabricante.value);
    }



    switch (select.value) {
        case "cr":
            carros.push(novoCadastro);
            exibir(carros, mostrarCarros);
            break;
        case "mt":
            motos.push(novoCadastro);
            exibir(motos, mostrarMotos);
            break;
        case "bc":
            barcos.push(novoCadastro);
            exibir(barcos, mostrarBarcos);
            break;
    }

    alert("Cadastro efetuado com sucesso");
    modelo.value = "";
    cor.value = "";
    fabricante.value = "";
    cc.value = "";
    pes.value = "";
}

function exibir(param, mostrar) {
    let card = "";
    for (let i = 0; i < param.length; i++) {
        card += param[i].card();
    }
    mostrar.innerHTML = card;

}



escondeForm = function () {
    formulario.style.display = "none";

    divcarros.classList.remove('esconder');
    divmotos.classList.remove('esconder');
    divbarcos.classList.remove('esconder');
    lista.classList.remove('esconder');
    canvas.classList.add('gradiente');

    document.getElementById("btnExibirCadastros").style.display = "none";
    document.getElementById("btnVoltar").style.display = "block";
}

mostraForm = function () {
    formulario.style.display = "block";

    divcarros.classList.add('esconder');
    divmotos.classList.add('esconder');
    divbarcos.classList.add('esconder');
    lista.classList.add('esconder');
    canvas.classList.remove('gradiente');

    document.getElementById("btnVoltar").style.display = "none";
    document.getElementById("btnExibirCadastros").style.display = "block";

}



const formCC = document.getElementById("cilindradas");
const formPes = document.getElementById("pes");

alternar = function () {
    if (select.value == 'cr') {

        formCC.style.display = "none";
        formPes.style.display = "none";

    } else if (select.value == "mt") {

        formCC.style.display = "flex";
        formPes.style.display = "none";

    } else if (select.value == "bc") {

        formCC.style.display = "none";
        formPes.style.display = "flex";
    }
}

placeHolder = function () {
    if (select.value == "cr") {
        document.getElementsByName("inputModelo")[0].placeholder = "Opala";
        document.getElementsByName("inputCor")[0].placeholder = "Preto";
        document.getElementsByName("inputFabricante")[0].placeholder = "Chevrolet";
    } else if (select.value == "mt") {
        document.getElementsByName("inputModelo")[0].placeholder = "Fazer";
        document.getElementsByName("inputCor")[0].placeholder = "Vermelho";
        document.getElementsByName("inputFabricante")[0].placeholder = "Yamaha";
    } else {
        document.getElementsByName("inputModelo")[0].placeholder = "Veleiro";
        document.getElementsByName("inputCor")[0].placeholder = "Branco";
        document.getElementsByName("inputFabricante")[0].placeholder = "Brasil Veleiros";
    }
}
