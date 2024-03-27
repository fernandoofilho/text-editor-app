
var pageCount = 0;
var pages = [];
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


function adicionarPrimeiraPag(index) {
    var newPage = document.createElement('div');
    newPage.classList.add('paper-page');
    pageCount++;
    newIndex = index+1
    newPage.id = 'page-' + newIndex;
    pages.push(newPage.id);
    console.log(pages);
    document.getElementById('pages').appendChild(newPage);
    
    // add menu icons
    // icons area
    var iconArea = document.createElement('div');
    iconArea.classList.add('icon-area');

    newPage.appendChild(iconArea);
    // Adiciona os botões e ícones

    // addPage *********************************** //
    var addPageIco = document.createElement('img');
    addPageIco.src = 'icons/adicionar-pagina.svg'; 
    addPageIco.classList.add('addPage-menu');
    
    addPageIco.onclick = function() {
        var pageIndex = Number(this.parentNode.id.replace("page-", "")) + 1;
        console.log("Parent node: "+this.parentNode.id);
        console.log(pageIndex);
        adicionarPrimeiraPag(pageIndex);
    };

    iconArea.appendChild(addPageIco);

    // delete Page *********************************** //
    var deletePage = document.createElement('img');
    deletePage.src = 'icons/excluir.svg';
    deletePage.classList.add('deletePage-menu')
    deletePage.id = "delete-"+newPage.id;
    deletePage.onclick = function() {
        console.log(this.parentNode.id);

        var pageId = this.parentNode.id.replace('delete-', '');
        removeDiv(pageId);
    };
    iconArea.appendChild(deletePage);


    // remove -> initial-button-add-page <- button  
    removeDiv("initial-button-add-page")

}
function removeDiv(elementId) {
    var div = document.getElementById(elementId);
    if (div) {
        div.classList.add("remove");
        setTimeout(function() {
            div.remove();
        }, 200);
    } else {
        console.error('Elemento com ID ' + elementId + ' não encontrado.');
    }
}

function expandView(elementId) {
    var newSize = 1280;
    var otherSize = 748;

    // Seleciona a div alvo
    var targetDiv = document.getElementById(elementId);
    // Verifica se o elemento foi encontrado antes de tentar acessar seu estilo
    if (targetDiv) {
        // Aumenta o tamanho da div alvo
        targetDiv.style.width = newSize + 'px';
    } else {
        console.error('Elemento com ID ' + elementId + ' não encontrado.');
        return; // Encerra a função se o elemento não for encontrado
    }

    // Seleciona todas as divs com a mesma classe
    var allDivs = document.getElementsByClassName(targetDiv.className);
    // Itera sobre as divs encontradas
    for (var i = 0; i < allDivs.length; i++) {
        // Verifica se a div é diferente da div alvo
        if (allDivs[i].id !== elementId) {
            // Diminui o tamanho das outras divs
            allDivs[i].style.width = otherSize + 'px';
        }
    }
}

function reorderPages(index, operation) {
    var offset = (operation === 'add') ? 1 : -1; 
    for (var i = index + 1; i < pageCount; i++) {
        var page = document.getElementById('page-' + i);
        var pageDeleteButton = document.getElementById('delete-page-' + i);

        if (page && pageDeleteButton) {
            page.id = 'page-' + (i + offset);
            pageDeleteButton.id = 'delete-page-' + (i + offset);
        }
    }
}
