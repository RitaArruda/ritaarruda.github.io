let livros = [
    {
        titulo: "Lady Killers",
        imagem: "tru/lady.jpg",
        resumo: "Quando pensamos em assassinos em série, pensamos em homens. Mais precisamente, em homens matando mulheres inocentes, vítimas de um apetite atroz por sangue e uma vontade irrefreável de carnificina. As mulheres podem ser tão letais quanto os homens e deixar um rastro de corpos por onde passam ― então o que acontece quando as pessoas são confrontadas com uma assassina em série?",
        linkCompra: "https://www.darksidebooks.com.br/lady-killers--assassinas-em-serie---drk-x/p",
        imagemClasse: "lady",
        imagemDois: "cinco.jpeg",
        quantEstrelas: 5
    },
    {
        titulo: "BTK Profile: Máscara da Maldade",
        imagem: "tru/BTK.jpg",
        resumo: "Por três décadas, um monstro aterrorizou os moradores de Wichita. Um assassino em série que amarrava, torturava e matava, iludiu a polícia por anos enquanto se vangloriava de seus crimes para a mídia. A nação ficou chocada quando os crimes de BTK ― a sigla para bind, torture, kill, sua assinatura criminosa ― foram enfim associados a Dennis Rader, um vizinho amigável e respeitado presidente da congregação de uma igreja local.",
        linkCompra: "https://www.darksidebooks.com.br/btk-profile-o-retrato-da-maldade-drk-x/p",
        imagemClasse: "btk",
        imagemDois: "quatro.jpeg",
        quantEstrelas: 4
    },

    {
        titulo: "Mindhunter Profile: Serial Killers",
        imagem: "tru/mind.png",
        resumo: "Como surgiu o método de investigação de serial killers que é usado hoje? Quem foram os responsáveis por desenvolver as ferramentas que permitem aos investigadores aprenderem e lidarem cada vez melhor com a prevenção ao crime e a resolução de assassinatos brutais? Uma dessas pessoas é Robert K. Ressler. Com Tom Shachtman, ele narra, em Mindhunter Profile: Serial Killers, seu período no FBI e revela o desenvolvimento do método de traçar perfis psicológicos dos assassinos seriais.",
        linkCompra: "https://www.darksidebooks.com.br/mindhunter-profile-serial-killers--brinde-exclusivo/p",
        imagemClasse: "mind",
        imagemDois: "quatro.jpeg",
        quantEstrelas: 4
    },
    {
        titulo: "Killer Clown Profile: Retrato de um Assassino",
        imagem: "tru/palhaço.png",
        resumo: "John Wayne Gacy. Cidadão modelo. Empresário de sucesso. Voluntário do hospital. Um dos assassinos em série mais sádicos de todos os tempos. Poucas pessoas podiam ver o monstro cruel sob a maquiagem colorida de palhaço que Gacy usava para entreter as crianças. Poucas pessoas podiam imaginar o que estava enterrado em sua casa de horrores.",
        linkCompra: "https://www.darksidebooks.com.br/killer-clown-profile--a-mascara-do-monstro-drk-x/p",
        imagemClasse: "palh",
        imagemDois: "três.jpeg",
        quantEstrelas: 3
    }
];

function exibirLivros() {
    const listaLivrosDiv = document.getElementById("listaLivros");
    listaLivrosDiv.innerHTML = ""; 
    listaLivrosDiv.style.marginTop = "-150px";

    livros.forEach(function(livro) {
        const livroDiv = document.createElement("div");
        livroDiv.classList.add("card");
        livroDiv.style.marginLeft = "20px";

        const fanDiv = document.createElement("div");
        fanDiv.classList.add("fan");

        const imagemLivro = document.createElement("img");
        imagemLivro.src = livro.imagem;
        imagemLivro.alt = livro.titulo;
        imagemLivro.alt = ` - Capa do livro ${livro.titulo}`;
        imagemLivro.classList.add(livro.imagemClasse);

        const imagemDoisLivro = document.createElement("img");
        imagemDoisLivro.src = livro.imagemDois;
        imagemDoisLivro.alt = `${livro.titulo} - o livro possui ${livro.quantEstrelas} estrelas`;

        const tpDiv = document.createElement("div");
        tpDiv.classList.add("tp");

        const tituloLivro = document.createElement("h2");
        tituloLivro.textContent = livro.titulo;

        const resumoLivro = document.createElement("p");
        resumoLivro.textContent = livro.resumo;

        const comprarButtonLink = document.createElement("a");
        comprarButtonLink.href = livro.linkCompra;
        comprarButtonLink.setAttribute("target", "_blank");

        const comprarButton = document.createElement("button");
        comprarButton.textContent = "Comprar";
        comprarButton.style.marginTop = "10px";
        comprarButton.classList.add("envia");

        comprarButtonLink.appendChild(comprarButton); 
        tpDiv.appendChild(tituloLivro);
        tpDiv.appendChild(resumoLivro);
        tpDiv.appendChild(comprarButtonLink); 

        fanDiv.appendChild(imagemLivro);
        fanDiv.appendChild(imagemDoisLivro);
        livroDiv.appendChild(fanDiv);
        livroDiv.appendChild(tpDiv);

        listaLivrosDiv.appendChild(livroDiv);
    });
}

exibirLivros();


