// Função responsável por desenhar textos estilizados no canvas da página "Sobre"
function Sobre() {
    const canvas = document.getElementById('canvas_sobre'); // Seleciona o elemento <canvas> com ID "canvas_sobre"
    if (!canvas) {
        console.error('Canvas não encontrado!'); // Caso o elemento não exista, exibe erro no console
        return;
    }

    const ctx = canvas.getContext('2d'); // Obtém o contexto de renderização 2D do canvas

    // Limpa toda a área do canvas antes de redesenhar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Configura sombras para os textos desenhados
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)'; // Cor da sombra: preto com transparência
    ctx.shadowOffsetX = 4; // Deslocamento horizontal da sombra
    ctx.shadowOffsetY = 4; // Deslocamento vertical da sombra
    ctx.shadowBlur = 10;   // Suavização da sombra

    // Centraliza o texto no canvas
    ctx.textAlign = 'center';       // Alinhamento horizontal
    ctx.textBaseline = 'middle';    // Alinhamento vertical

    // Define estilo da fonte para o título principal
    ctx.font = 'bold 120px Arial';

    // Cria um gradiente linear horizontal para o título "Sobre"
    const grd = ctx.createLinearGradient(
        canvas.width / 2 - 200, 250, // Ponto inicial do gradiente
        canvas.width / 2 + 200, 250  // Ponto final do gradiente
    );
    grd.addColorStop(0, '#b10000'); // Cor inicial (vermelho escuro)
    grd.addColorStop(1, '#7c0000'); // Cor final (ainda mais escura)
    ctx.fillStyle = grd;            // Aplica o gradiente como cor de preenchimento
    ctx.fillText('Sobre', canvas.width / 2, 250); // Desenha o texto "Sobre" centralizado

    // Define estilo da fonte para o subtítulo
    ctx.font = 'bold 80px Arial';

    // (ERRO) Esta parte deveria usar um novo gradiente (grd2), mas ele está mal definido:
    const grd2 = ctx.createLinearGradient(
        canvas.width / 2, 150,
        canvas.width / 2, 150
    ); // Este gradiente tem o mesmo ponto inicial e final, portanto não terá efeito visual
    // Mas, abaixo, ainda estão usando o gradiente "grd" original por engano, não o "grd2"
    grd.addColorStop(0, '#b10000');
    grd.addColorStop(1, '#7c0000');
    ctx.fillStyle = grd;
    ctx.fillText('Mais que fitness. Feitness!', canvas.width / 2, 350); // Desenha o subtítulo
}

// Executa a função Sobre() assim que o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', Sobre);

// Redesenha o canvas automaticamente quando a janela for redimensionada
window.addEventListener('resize', function () {
    Sobre();
});
