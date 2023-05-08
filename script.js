// Função para verificar os campos do formulário de contato.
function checkInput() {
  // Seleciona os elementos do formulário pelo ID.
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const assuntoInput = document.getElementById('assunto');
  const mensagemInput = document.getElementById('mensagem');

  // Remove espaços em branco e obtém o valor dos campos do formulário.
  const nomeValue = nomeInput.value.trim();
  const emailValue = emailInput.value.trim();
  const assuntoValue = assuntoInput.value.trim();
  const mensagemValue = mensagemInput.value.trim();

  // Variável para verificar se há algum erro nos campos.
  let hasError = false;

  // Verifica se o campo do nome está vazio.
  if (nomeValue === '') {
    alert('Por favor, digite seu nome completo.');
    hasError = true;
  }

  // Verifica se o campo de e-mail está vazio.
  if (emailValue === '') {
    alert('Por favor, digite um endereço de e-mail.');
    hasError = true;
  }

  // Verifica se o campo de assunto está vazio.
  if (assuntoValue === '') {
    alert('Por favor, digite o assunto.');
    hasError = true;
  }

  // Verifica se o campo de mensagem está vazio.
  if (mensagemValue === '') {
    alert('Por favor, digite sua mensagem.');
    hasError = true;
  }

  // Se não houver erro, exibe uma mensagem de confirmação e limpa os campos do formulário.
  if (!hasError) {
    alert(`Entraremos em contato através do endereço ${emailValue}`);
    nomeInput.value = '';
    emailInput.value = '';
    assuntoInput.value = '';
    mensagemInput.value = '';
  }
}

// Função para mostrar o menu no modo mobile.
function menuShow() {
  // Seleciona o menu mobile pela classe.
  let menuMobile = document.querySelector('.mobile-menu');

  // Verifica se o menu mobile está aberto ou fechado.
  if (menuMobile.classList.contains('open')) {
    // Fecha o menu e altera o ícone para o de menu.
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "./Imgs&Icons/img-menu/menu_white_36dp.svg";
  } else {
    // Abre o menu e altera o ícone para o de fechar.
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "./Imgs&Icons/img-menu/close_white_36dp.svg";
  }
}
