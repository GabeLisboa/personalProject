function responderQuiz(correto) {
  const resultado = document.getElementById('resultado');
  if (correto) {
    resultado.textContent = "Acertou, amor!! ❤️";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Errrrouuuu! 😜 ";
    resultado.style.color = "red";
  }
}
