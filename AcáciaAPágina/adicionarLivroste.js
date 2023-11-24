let livros = [
    {
        titulo: "O Exorcista",
        imagem: "te/exorcista.jpg",
        estrelas: 4,
        resumo: "Inspirado no caso real do exorcismo de um adolescente, o escritor William Peter Blatty publicou em 1971 a perturbadora história de Chris MacNeil, uma atriz que sofre com inesperadas mudanças no comportamento da filha, Regan. Quando os esforços da ciência para descobrir o que há de errado falham e uma personalidade demoníaca parece vir à tona, Chris busca a ajuda da Igreja para tentar livrar a filha de um caso de possessão. Cabe a Damien Karras, um padre da Universidade de Georgetown, salvar a alma de Regan.",
        linkCompra: "https://a.co/d/2CPUZLn",
        imagemClasse: "exo"
    },
    {
        titulo: "Fragmentos do Horror",
        imagem: "te/fragmentosdohorror.jpg",
        estrelas: 4,
        resumo: "Se você tem coragem (e estômago), não pode perder Fragmentos do Horror, uma coleção de histórias curtas, perfeitas para quem quer experimentar o que Junji Ito é capaz de produzir. Cada quadrinho pode ser fatal, cuidado! Entre as histórias da coletânea, temos uma mansão velha de madeira que gira sobre seus habitantes. Uma turma de dissecação com um assunto nada comum. Um funeral em que os mortos definitivamente não são postos para descansar. Essas histórias apresentam o aguardado retorno de Junji Ito.",
        linkCompra: "https://www.darksidebooks.com.br/fragmentos-do-horror/p",
        imagemClasse: "frag"
    },

    {
        titulo: "O Que Aconteceu Com Annie",
        imagem: "te/annie.webp",
        estrelas: 5,
        resumo: "'Quando minha irmã tinha oito anos, ela sumiu. Na época, achei que não poderia haver coisa pior. E então ela voltou.' A irmã mais nova de Joe Thorne desapareceu. Vinte e cinco anos depois, um e-mail anônimo o leva mais uma vez ao passado: 'Eu sei o que aconteceu com sua irmã. Está acontecendo de novo. Atolado em dívidas e longe de onde cresceu, Joe precisa escapar das pessoas perigosas que estão atrás dele, mas também vê a oportunidade de resolver o que arrasta consigo há décadas.",
        linkCompra: "https://www.editoraboanova.com.br/MLB-2048871484-livro-o-que-aconteceu-com-annie-capa-dura-_JM?gclid=Cj0KCQjwsp6pBhCfARIsAD3GZubuDeuDfbYdnltkvWvN6gHjYwYJjMvCGxEU8Ze9ZHc6ioRlI0UkhEwaAmSiEALw_wcB",
        imagemClasse: "an"
    },
    {
        titulo: "O Médico e o Monstro e Outros Experimentos",
        imagem: "te/medicoeomonstro.jpg",
        estrelas: 4,
        resumo: "Publicado originalmente em 1886, é um clássico da literatura de terror e ficção científica. O livro explora os temas da dualidade humana e das consequências das escolhas morais. Dr. Jekyll é um cientista que, através de uma fórmula química, consegue separar seus aspectos bons e maus, dando origem a Mr. Hyde, sua personalidade malévola e sem escrúpulos. O escocês Robert Louis Stevenson soube retratar, como poucos, este aspecto das personalidades múltiplas em sua novela gótica.",
        linkCompra: "https://www.darksidebooks.com.br/o-medico-e-o-monstro-e-outros-experimentos-drk-x/p",
        imagemClasse: "med"
    }
];

function criarEstrelas(elemento, quantidadeEstrelas) {
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');

    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        if (i < quantidadeEstrelas) {
            star.style.color = '#BA68C8';
            star.textContent = '★';
        } else {
            star.textContent = '☆';
        }
        starContainer.appendChild(star);
    }

    elemento.appendChild(starContainer);
}

function exibirLivros() {
    const listaLivrosDiv = document.getElementById("listaLivros");
    listaLivrosDiv.innerHTML = ""; // Limpa o conteúdo atual da lista
    listaLivrosDiv.style.marginTop = "-150px";

    livros.forEach(function(livro) {
        const livroDiv = document.createElement("div");
        livroDiv.classList.add("card");
        livroDiv.style.marginLeft = "60px";

        const fanDiv = document.createElement("div");
        fanDiv.classList.add("fan");

        const imagemLivro = document.createElement("img");
        imagemLivro.src = livro.imagem;
        imagemLivro.alt = livro.titulo;
        imagemLivro.classList.add(livro.imagemClasse);
        

        const tpDiv = document.createElement("div");
        tpDiv.classList.add("tp");

        const tituloLivro = document.createElement("h2");
        tituloLivro.textContent = livro.titulo;

        const estrelasLivro = document.createElement("div");
        estrelasLivro.classList.add("star-rating");
        estrelasLivro.style.marginLeft = "-290px";
        estrelasLivro.style.marginTop = "120px";
        criarEstrelas(estrelasLivro, livro.estrelas);

        const resumoLivro = document.createElement("p");
        resumoLivro.textContent = livro.resumo;
        resumoLivro.style.marginTop = "-160px";

        const comprarButtonLink = document.createElement("a");
        comprarButtonLink.href = livro.linkCompra; // Link para comprar o livro
        comprarButtonLink.setAttribute("target", "_blank"); // Abrir o link em uma nova aba

        const comprarButton = document.createElement("button");
        comprarButton.textContent = "Comprar";
        comprarButton.style.marginTop = "10px";
        comprarButton.classList.add("envia");

        comprarButtonLink.appendChild(comprarButton); // Coloca o botão dentro do link
        tpDiv.appendChild(tituloLivro);
        tpDiv.appendChild(estrelasLivro);
        tpDiv.appendChild(resumoLivro);
        tpDiv.appendChild(comprarButtonLink); // Adiciona o link com o botão de compra

        fanDiv.appendChild(imagemLivro);
        livroDiv.appendChild(fanDiv);
        livroDiv.appendChild(tpDiv);

        listaLivrosDiv.appendChild(livroDiv);
    });
}

exibirLivros();
