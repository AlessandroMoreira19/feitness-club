function Home() {
    // Obtém o elemento canvas pelo ID 'canvas_home'
    const canvas = document.getElementById('canvas_home');
    // Verifica se o canvas existe, se não exibe erro e retorna para evitar falhas
    if (!canvas) {
        console.error('Canvas não encontrado!');
        return;
    }

    // Obtém o contexto 2D para desenhar no canvas
    const ctx = canvas.getContext('2d');

    // Limpa o conteúdo anterior do canvas para evitar sobreposição ao redesenhar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Configura sombra para os textos
    ctx.shadowColor = 'rgba(0, 0, 0, 1)'; // Cor da sombra (preto opaco)
    ctx.shadowOffsetX = 4; // Deslocamento horizontal da sombra
    ctx.shadowOffsetY = 4; // Deslocamento vertical da sombra
    ctx.shadowBlur = 10;   // Desfoque da sombra

    // Define alinhamento do texto horizontalmente e verticalmente
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle'; // Centraliza verticalmente melhor que o padrão

    // Define a fonte para o texto principal
    ctx.font = 'bold 120px Arial';

    // Cria um gradiente linear para o texto principal
    const grd = ctx.createLinearGradient(
        canvas.width / 2 - 200, 250,
        canvas.width / 2 + 200, 250
    );
    grd.addColorStop(0, '#b10000'); // Início do gradiente em vermelho escuro
    grd.addColorStop(1, '#7c0000'); // Fim do gradiente em tom mais escuro de vermelho

    // Aplica o gradiente como estilo de preenchimento
    ctx.fillStyle = grd;
    // Desenha o texto "Feitness Club" centralizado no canvas, na altura 250px
    ctx.fillText('Feitness Club', canvas.width / 2, 250);

    // Define fonte para o subtítulo, menor que o principal
    ctx.font = 'bold 80px Arial';

    // Cria outro gradiente (parece que o grd2 não está sendo usado corretamente, está reutilizando grd)
    const grd2 = ctx.createLinearGradient(
        canvas.width / 2, 150,
        canvas.width / 2, 150
    );
    // Reutiliza gradiente grd para o subtítulo (pode ser um erro, mas mantém como está)
    grd.addColorStop(0, '#b10000');
    grd.addColorStop(1, '#7c0000');
    ctx.fillStyle = grd;

    // Desenha o subtítulo "Mais que fitness. Feitness!" centralizado, na altura 350px
    ctx.fillText('Mais que fitness. Feitness!', canvas.width / 2, 350);
}

// Quando o conteúdo do DOM estiver totalmente carregado, chama a função Home para desenhar no canvas
document.addEventListener('DOMContentLoaded', Home);

// Recalcula/redesenha o canvas quando a janela for redimensionada, para manter a responsividade
window.addEventListener('resize', function () {
    Home();
});
