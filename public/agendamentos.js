// Obtém o botão com o ID "togglePainel"
const botao = document.getElementById("togglePainel");

// Obtém o painel que será mostrado ou escondido
const painel = document.getElementById("painel");

// Adiciona um ouvinte de evento para cliques no botão
botao.addEventListener("click", () => {
    // Verifica se o painel está visível
    if (painel.style.display === "block") {
        // Se estiver visível, esconde o painel
        painel.style.display = "none";
        // Altera o texto do botão para indicar que pode mostrar o painel
        botao.textContent = "Mostrar Horários de Agendamento";
    } else {
        // Se estiver escondido, exibe o painel
        painel.style.display = "block";
        // Adiciona uma classe CSS para ativar animação (se estiver definida no CSS)
        painel.classList.add("animar");
        // Altera o texto do botão para indicar que pode ocultar o painel
        botao.textContent = "Ocultar Horários de Agendamento";
    }
});



function Agendamentos() {
    // Obtém o elemento <canvas> pelo ID
    const canvas = document.getElementById('canvas_agendamentos');

    // Verifica se o canvas foi encontrado
    if (!canvas) {
        console.error('Canvas não encontrado!');
        return; // Encerra a função caso o canvas não exista
    }

    // Obtém o contexto 2D do canvas, necessário para desenhar
    const ctx = canvas.getContext('2d');

    // Limpa o canvas antes de desenhar (caso a função seja chamada novamente)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Define a sombra que será aplicada aos textos desenhados
    ctx.shadowColor = 'rgba(0, 0, 0, 1)'; // Cor da sombra (preto opaco)
    ctx.shadowOffsetX = 4;                // Deslocamento horizontal da sombra
    ctx.shadowOffsetY = 4;                // Deslocamento vertical da sombra
    ctx.shadowBlur = 10;                  // Nível de desfoque da sombra

    // Define o alinhamento horizontal e vertical do texto
    ctx.textAlign = 'center';             // Centraliza o texto horizontalmente
    ctx.textBaseline = 'middle';          // Centraliza o texto verticalmente

    // Define a fonte do título principal
    ctx.font = 'bold 120px Arial';

    // Cria um gradiente linear horizontal para o texto principal
    const grd = ctx.createLinearGradient(
        canvas.width / 2 - 200, 250,      // Início do gradiente
        canvas.width / 2 + 200, 250       // Fim do gradiente
    );
    grd.addColorStop(0, '#b10000');       // Cor inicial (vermelho escuro)
    grd.addColorStop(1, '#7c0000');       // Cor final (vermelho mais escuro)

    // Aplica o gradiente como cor de preenchimento
    ctx.fillStyle = grd;

    // Desenha o texto principal no canvas
    ctx.fillText('Agendamentos', canvas.width / 2, 250);

    // Define a fonte do subtítulo
    ctx.font = 'bold 80px Arial';

    // Cria um novo gradiente linear vertical para o subtítulo
    const grd2 = ctx.createLinearGradient(
        canvas.width / 2, 150,           // Início do gradiente
        canvas.width / 2, 150            // Fim do gradiente (mesmo ponto, tecnicamente inválido)
    );
    grd.addColorStop(0, '#b10000');      // Cor inicial (mesma usada acima)
    grd.addColorStop(1, '#7c0000');      // Cor final

    // Aplica o gradiente como cor de preenchimento para o subtítulo
    ctx.fillStyle = grd;

    // Desenha o subtítulo no canvas
    ctx.fillText('Mais que fitness. Feitness!', canvas.width / 2, 350);
}

// Executa a função assim que o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', Agendamentos);

// Reexecuta a função caso a janela seja redimensionada
window.addEventListener('resize', function () {
    Agendamentos();
});




// Adiciona um ouvinte de evento ao formulário com o ID 'painel'
document.getElementById('painel').addEventListener('submit', async function (e) {
    e.preventDefault(); // Impede que o formulário seja enviado da maneira tradicional (recarregando a página)

    const form = e.target; // Obtém a referência do formulário que disparou o evento

    // Cria um objeto com os dados coletados do formulário
    const dados = {
        horario: form.horario.value, // Valor selecionado no campo "horario"
        usuario: form.usuario.value, // Valor digitado no campo "usuario"
        cpf: form.cpf.value,         // Valor digitado no campo "cpf"
    };

    try {
        // Envia os dados para o backend usando uma requisição HTTP POST
        const response = await fetch('/cadastrar_aulas', {
            method: 'POST', // Método HTTP usado
            headers: { 'Content-Type': 'application/json' }, // Cabeçalho indicando envio de JSON
            body: JSON.stringify(dados), // Converte o objeto para string JSON e envia no corpo da requisição
        });

        const mensagem = await response.text(); // Lê a resposta como texto
        alert(mensagem); // Exibe a resposta do servidor em um alerta
    } catch (error) {
        // Em caso de erro na requisição (ex: servidor fora do ar), exibe mensagem de erro
        alert("Erro ao enviar requisição: " + error.message);
    }
});