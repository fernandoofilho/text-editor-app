
var pageCount = 0;

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
    alert(nome);
}

function ajustarTamanho(elemento) {
    var comprimentoTexto = elemento.value.length; //text length
    var larguraMinima = 100; //larg min 
    var larguraMaxima = 400;  // larg max
    var larguraDesejada = comprimentoTexto * 10; //new larg

    larguraDesejada = Math.min(Math.max(larguraDesejada, larguraMinima), larguraMaxima);
    
    elemento.style.width = larguraDesejada + "px";
}


function adicionarPrimeiraPag() {
    var newPage = document.createElement('div');
    newPage.classList.add('paper-page');
    pageCount++;
    newPage.id = 'page' + pageCount;
    document.getElementById('pages').appendChild(newPage);

    // add menu icons

    // icons area
    var iconArea = document.createElement('div');
    iconArea.classList.add('icon-area');

    newPage.appendChild(iconArea);
    // Adiciona os botões e ícones
    // *********************************** //
    var addPageButton = document.createElement('button');
    addPageButton.classList.add('addPage-menu');
    addPageButton.onclick = adicionarPrimeiraPag;
    iconArea.appendChild(addPageButton);

    var addPageIco = document.createElement('img');
    addPageIco.src = 'icons/adicionar-pagina.svg'; 
    addPageIco.classList.add('addPage-menu');
    addPageButton.appendChild(addPageIco);

    // ********************************** //
    var expandPage = document.createElement('button');
    expandPage.classList.add('expandPage-menu');
    expandPage.onclick = expandView;
    iconArea.appendChild(expandPage);

    var expandPageIco = document.createElement('img');
    expandPageIco.src = 'icons/expandir.svg';
    expandPageIco.classList.add('expandPage-menu')

    expandPage.onclick = function() {
        expandView(this.parentNode.id, novoTamanhoDaDiv, novoTamanhoDasOutrasDivs);
    };
    // *********************************** //
    var deletePage = document.createElement('img');
    deletePage.src = 'icons/excluir.svg';
    deletePage.classList.add('deletePage-menu')

    iconArea.appendChild(deletePage);


    // remove -> initial-button-add-page <- button  
    removeDiv("initial-button-add-page")

}
function removeDiv(elementId) {
    var div = document.getElementById(elementId);
    div.classList.add("remove");
    setTimeout(function() {
        div.remove();
    }, 200);
}
function expandView(elementId, newSize = 1280, otherSize= 748) {
    // Seleciona a div alvo
    var targetDiv = document.getElementById(elementId);
    // Aumenta o tamanho da div alvo
    targetDiv.style.width = newSize + 'px';
    targetDiv.style.height = newSize + 'px';

    // Seleciona todas as divs com a mesma classe
    var allDivs = document.getElementsByClassName(targetDiv.className);
    // Itera sobre as divs encontradas
    for (var i = 0; i < allDivs.length; i++) {
        // Verifica se a div é diferente da div alvo
        if (allDivs[i].id !== elementId) {
            // Diminui o tamanho das outras divs
            allDivs[i].style.width = otherSize + 'px';
            allDivs[i].style.height = otherSize + 'px';
        }
    }
}
