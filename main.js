("use strict");

document.getElementById("btnGato").addEventListener("click", async () => {
  const imagem = document.getElementById("imgGato");
  const url = "https://api.thecatapi.com/v1/images/search";

  try {
    const response = await fetch(url);
    const data = await response.json();
    imagem.src = data[0].url;
    imagem.style.display = "block";
  } catch (error) {
    alert("Erro ao buscar a imagem do gatinho 😿");
    console.error(error);
  }
});
