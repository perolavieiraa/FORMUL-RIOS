document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (nome === "") {
      alert("Insira um nome válido");
    } else if (!regex.test(nome)) {
      alert("Insira um nome válido");
    } else {
      alert("Tudo certo!");
    }
  });
  