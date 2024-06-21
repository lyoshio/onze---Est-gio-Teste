document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('entenda-caso');
  const saidaGerada = document.getElementById('saida-gerada');

  if (form && saidaGerada) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const dataPublicacao = document.getElementById('data-publicacao').value;
      const descricaoCaso = document.getElementById('descricao-caso').value;
      const contextoInformacao = document.getElementById(
        'contexto-informacao'
      ).value;
      const parteFonte = document.getElementById('parte-fonte').value;
      const porQueEntender = document.getElementById('por-que-entender').value;
      const linkVideo = document.getElementById('link-video').value;

      // Aqui você pode fazer uma requisição AJAX para enviar os dados para o servidor
      // Exemplo com fetch:
      fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dataPublicacao,
          descricaoCaso,
          contextoInformacao,
          parteFonte,
          porQueEntender,
          linkVideo,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Exibindo a saída gerada para o usuário
          const textoGerado = `
                    Data de publicação da notícia: ${dataPublicacao}\n\n
                    Descrição do caso: ${descricaoCaso}\n\n
                    Contexto e informação adicional: ${contextoInformacao}\n\n
                    Parte/Fonte: ${parteFonte}\n\n
                    Por que entender o caso importa? ${porQueEntender}\n\n
                    ${linkVideo ? `Link do vídeo: ${linkVideo}` : ''}
                `;
          saidaGerada.textContent = textoGerado;

          // Limpar o formulário após o envio
          form.reset();
        })
        .catch((error) => {
          console.error('Erro ao enviar dados:', error);
          alert('Erro ao enviar dados. Por favor, tente novamente.');
        });
    });
  } else {
    alert('Erro ao gerar a Saída, contate a equipe responsável.');
  }
});
