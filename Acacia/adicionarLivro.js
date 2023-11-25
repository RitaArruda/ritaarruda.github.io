let livros = [
    {
        titulo: "Aristóteles e Dante Descobrem os Segredos do Universo",
        imagem: "rom/aridante.webp",
        resumo: "Em um verão tedioso, os jovens Aristóteles e Dante são unidos pelo acaso e, embora sejam completamente diferentes um do outro, iniciam uma amizade do tipo que muda a vida das pessoas e dura para sempre. E é através dessa amizade que Ari e Dante vão descobrir mais sobre si mesmos. Dante é articulado e confiante. Ari tem dificuldade com palavras e duvida de si. Dante é apaixonado por poesia e arte. Ari se perde em pensamentos sobre seu irmão mais velho, que está na prisão",
        linkCompra: "https://www.amazon.com.br/Arist%C3%B3teles-Dante-descobrem-segredos-universo/dp/8565765350e",
        imagemClasse: "imagem-aridante",
        imagemDois: "quatro.jpeg",
        quantEstrelas: 4
    },
    {
        titulo: "Orgulho e Preconceito",
        imagem: "rom/orgulho.jpg",
        resumo: "Quando Elizabeth Bennet conhece Fitzwilliam Darcy o cobiçado Mr. Darcy, ela o julga arrogante, rude e presunçoso. Após descobrir o envolvimento do detestável cavalheiro nos eventos que separaram sua querida irmã, Jane, e o jovem Bingley, Elizabeth está determinada a odiá-lo ainda mais. Mas uma surpreendente reviravolta poderá provar que as primeiras impressões nem sempre são incontestáveis. Escrito por Jane Austen, uma renomada autora britânica do século XIX e é uma das obras mais amadas da literatura inglesa.",
        linkCompra: "https://www.amazon.com.br/Orgulho-preconceito-edi%C3%A7%C3%A3o-especial-Cardoso/dp/6558471272/ref=asc_df_6558471272/?tag=googleshopp00-20&linkCode=df0&hvadid=647622699489&hvpos=&hvnetw=g&hvrand=4451148790771162212&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001651&hvtargid=pla-2201844514046&psc=1",
        imagemClasse: "imagem-org",
        imagemDois: "quatro.jpeg",
        quantEstrelas: 4
    },

    {
        titulo: "Os Sete Maridos Evelyn Hugo",
        imagem: "rom/evelyn.webp",
        resumo: "Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez. Prestes a completar oitenta anos e reclusa em seu apartamento, a famigerada atriz decide contar a própria história com uma condição: que Monique Grant, jornalista iniciante e até então desconhecida, seja a entrevistadora. A jovem repórter começa a se dar conta de que nada é por acaso e que suas trajetórias podem estar conectadas.",
        linkCompra: "https://www.amazon.com.br/Os-sete-maridos-Evelyn-Hugo/dp/8584391509/ref=asc_df_8584391509/?tag=googleshopp00-20&linkCode=df0&hvadid=379795242161&hvpos=&hvnetw=g&hvrand=3728249245293362251&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001651&hvtargid=pla-849763651838&psc=1" ,
        imagemClasse: "imagem-evelyn",
        imagemDois: "cinco.jpeg",
        quantEstrelas: 5
    },
    {
        titulo: "O Morro dos Ventos Uivantes",
        imagem: "rom/ventos.jpg",
        resumo: "O Morro dos Ventos Uivantes é um romance clássico de Emily Brontë. A história se desenrola nos charnecos de Yorkshire e gira em torno dos complicados relacionamentos entre as famílias Earnshaw e Linton. O enredo central envolve a paixão e vingança entre Heathcliff e Catherine. A obra é considerada um clássico da literatura inglesa e é conhecida por sua narrativa intensa e emocional, explorando temas como paixão, vingança e o impacto do passado nas relações humanas.",
        linkCompra: "https://www.amazon.com.br/Morro-dos-Ventos-Uivantes/dp/8594542186/ref=pd_rhf_d_dp_s_pd_crcd_sccl_2_7/137-6366833-0330853?pd_rd_w=XfjkJ&content-id=amzn1.sym.1b2190ca-db28-46be-85f8-55611bc8c041&pf_rd_p=1b2190ca-db28-46be-85f8-55611bc8c041&pf_rd_r=4X2EGMHN9S38EMFWG7AJ&pd_rd_wg=4NSxH&pd_rd_r=1f4ce5e1-9a7d-4641-93f1-99a1142d7f99&pd_rd_i=8594542186&psc=1",
        imagemClasse: "imagem-morros",
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
        livroDiv.style.marginLeft = "60px";

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


