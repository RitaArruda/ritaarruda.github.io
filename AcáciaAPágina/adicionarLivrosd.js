let livros = [
    {
        titulo: "Jogos Vorazes Triologia",
        imagem: "di/jogos.jpg",
        estrelas: 5,
        resumo: "Os três volumes da série Jogos Vorazes, pioneira na escrita distópica, a trilogia Jogos Vorazes se passa em um futuro pós-guerras e destruição, em um local chamado de Panem, dividido em treze Distritos controlados pela Capital, totalmente autoritária. Um dia, o Distrito 13 se rebela, mas acaba sendo destruído. Para punir os Distritos e evitar rebeliões, a Capital cria os Jogos Vorazes, um reality show anual em que cada distrito deve ceder, por sorteio, um menino e uma menina entre 12 e 18 anos para entrar numa arena para lutar. Apenas um sobrevive.",
        linkCompra: "https://www.amazon.com.br/BOX-ESPECIAL-TRILOGIA-JOGOS-VORAZES/dp/6555321423/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=U49DBT8S00QD&keywords=jogos+vorazes&qid=1697165762&sprefix=jogos+voraz%2Caps%2C464&sr=8-3&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        imagemClasse: "jogos"
    },
    {
        titulo: "Admirável mundo novo",
        imagem: "di/admiravel.jpg",
        estrelas: 4,
        resumo: "Em uma sociedade organizada segundo princípios estritamente científicos, Bernard Marx, um psicólogo, sente-se inadequado quando se compara aos outros seres de sua casta. Ao descobrir uma “reserva histórica” que preserva costumes de uma sociedade anterior muito semelhante a do leitor Bernard vai perceber as diferenças entre este mundo e o seu e a partir de um sentimento de inconformismo, ele desafiará o mundo. O romance distópico de Aldous Huxley é um clássico moderno para quem busca leituras sobre autoritarismo e outros temas cada dia mais urgentes.",
        linkCompra: "https://www.amazon.com.br/Admir%C3%A1vel-mundo-novo-Edi%C3%A7%C3%A3o-especial/dp/6558301660/ref=asc_df_6558301660/?tag=googleshopp00-20&linkCode=df0&hvadid=379733573200&hvpos=&hvnetw=g&hvrand=13103277210707724116&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001651&hvtargid=pla-1748492578765&psc=1",
        imagemClasse: "adm"
    },

    {
        titulo: "1984",
        imagem: "di/mil.jpg",
        estrelas: 5,
        resumo: "A trama se passa em um superestado totalitário chamado Oceânia, onde imperam a vigilância onipresente e regras de conduta extremamente rígidas. Nele acompanhamos a rotina severa e os pensamentos cada vez mais divergentes de Winston Smith, funcionário do Ministério da Verdade. Apesar do nome de seu local de trabalho, Winston é responsável por falsificar artigos jornalísticos do passado para que eles sempre se encaixem com o maleável discurso corrente do partido que comanda esse superestado, representado pela figura mítica do Grande Irmão.",
        linkCompra: "https://www.amazon.com.br/1984-George-Orwell/dp/6555981520/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1P0IR3I1FXWKB&keywords=1984&qid=1697166288&sprefix=19%2Caps%2C746&sr=8-5",
        imagemClasse: "mil"
    },
    {
        titulo: "Fahrenheit 451",
        imagem: "di/fahrenheit.jpg",
        estrelas: 4,
        resumo: "Guy Montag é um bombeiro. Sua profissão é atear fogo nos livros. Em um mundo onde as pessoas vivem em função das telas e a literatura está ameaçada de extinção, os livros são objetos proibidos, e seus portadores são considerados criminosos. Montag vive uma vida comum, cumpre o expediente e retorna ao final do dia para sua esposa e rotina do lar. Até que conhece Clarisse, uma jovem de comportamento suspeito, cheia de imaginação e boas histórias. Quando sua esposa entra em colapso mental e Clarisse desaparece, a vida de Montag não poderá mais ser a mesma.",
        linkCompra: "https://www.amazon.com.br/Fahrenheit-451-especial-Ray-Bradbury/dp/655830015X/ref=pd_lpo_sccl_2/137-6366833-0330853?pd_rd_w=LAA6H&content-id=amzn1.sym.c6d95a42-ae4e-4feb-90d6-a50e399f6fbf&pf_rd_p=c6d95a42-ae4e-4feb-90d6-a50e399f6fbf&pf_rd_r=EF5CXHPE7XVWSDB33CEX&pd_rd_wg=0Kmw3&pd_rd_r=544b42f7-e4db-4da3-b234-f5554c5ff529&pd_rd_i=655830015X&psc=1",
        imagemClasse: "fah"
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
