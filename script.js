document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();

  const campos = [
    "nome", "cpf", "rg", "data_nascimento", "sexo", "telefone", "email", "endereco", "numero", "bairro", "cidade", "estado", "cep", "profissao", "contato_alternativo",
    "nome_pet", "especie", "raca", "sexo_pet", "data_nasc_pet", "cor", "porte", "peso", "pelagem", "alimentacao", "frequencia", "veterinario", "ultima_visita", "historico", "comportamento"
  ];

  for (let id of campos) {
    const campo = document.getElementById(id);
    if (!campo.value.trim()) {
      alert("O campo \"" + campo.previousElementSibling.textContent + "\" é obrigatório.");
      campo.focus();
      return;
    }
  }

  alert("Tudo certo!");
});