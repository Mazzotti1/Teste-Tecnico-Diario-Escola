const clientes = [
  {
      'id': 1,
      'nome': 'Luis Santos Silveira',
      'idade': 18
  },
  {
      'id': 2,
      'nome': 'Ricardo Lopes Alves',
      'idade': 30
  },
  {
      'id': 3,
      'nome': 'Gustavo Silva Junior',
      'idade': 26
  }
];

var numero = '5(1)9-876-543-21';

const nomesDiv = document.getElementById('nomes');

clientes.forEach((cliente) => {
  const nomeButton = document.createElement('button');

  const partesNome = cliente.nome.split(' ');
  const primeiroNome = partesNome[0];
  const ultimoSobrenome = partesNome[partesNome.length - 1];

  nomeButton.textContent = `${ultimoSobrenome}, ${primeiroNome}`;

  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');
  dropdown.style.display = 'none';

  const idade = document.createElement('p');
  idade.textContent = `Idade: ${cliente.idade}`;
  idade.classList.add('idade');

  nomeButton.addEventListener('click', () => {
      if (dropdown.style.display === 'none' || dropdown.style.display === '') {
          dropdown.style.display = 'block';
      } else {
          dropdown.style.display = 'none';
      }
  });

  dropdown.appendChild(idade);
  nomeButton.appendChild(dropdown);
  nomesDiv.appendChild(nomeButton);
});


const numeroDiv = document.getElementById('numero');
const digitos = numero.match(/\d/g).join('');
const numeroFormatado = `(${digitos.slice(0, 2)})_${digitos[2]}_${digitos.slice(3, 7)}-${digitos.slice(7)}`;
const numeroContato = document.createElement('p');
numeroContato.textContent = `Número de Contato: ${numeroFormatado}`;
numeroDiv.appendChild(numeroContato);
