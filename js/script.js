const botaoTema = document.getElementById("btn-tema");
const botaoGerar = document.getElementById("btn-gerar");
const inputNome = document.getElementById("nome-usuario");
const selectArea = document.getElementById("area-interesse");
const painelResultado = document.getElementById("painel-resultado");
const textoResultado = document.getElementById("texto-resultado");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");
});

function processarOrientacao() {
    const nome = inputNome.value.trim();
    const area = selectArea.value;

    if (!nome) {
        painelResultado.className = "resultado erro";
        textoResultado.textContent = "Por favor, informe seu nome para receber a orientação.";
        return;
    }

    if (!area) {
        painelResultado.className = "resultado erro";
        textoResultado.textContent = `Olá, ${nome}! Selecione uma área de interesse para continuar.`;
        return;
    }

    let mensagem = "";

    switch (area) {
        case "html":
            mensagem = `Olá, ${nome}! Foque no domínio de tags semânticas, acessibilidade (ARIA), formulários estruturados e boas práticas de SEO para estruturar páginas sólidas.`;
            break;
        case "css":
            mensagem = `Olá, ${nome}! Continue praticando cores, espaçamentos, Flexbox, Grid e responsividade. Explore variáveis CSS e animações para elevar a experiência visual.`;
            break;
        case "javascript":
            mensagem = `Olá, ${nome}! Aprofunde seus estudos em manipulação de DOM, requisições com Fetch API, métodos de array (map, filter, reduce) e lógica assíncrona.`;
            break;
        default:
            mensagem = `Olá, ${nome}! Mantenha uma rotina constante de prática para evoluir no ecossistema Web.`;
    }

    painelResultado.className = "resultado sucesso";
    textoResultado.textContent = mensagem;
}

botaoGerar.addEventListener("click", processarOrientacao);