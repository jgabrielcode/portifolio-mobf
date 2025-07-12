const burguer = document.querySelector("#burguer")
const menu = document.querySelector("#menu")

window.addEventListener("resize",()=>{
    if (window.innerWidth >= 1020) {
                menu.style.display = 'block'
            } else {
                menu.style.display = 'none'
            }
})

burguer.addEventListener("click",()=>{
    if (menu.style.display == 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
})

 const nameContainer = document.getElementById("name-container");

        const nome = "Joao Gabriel";
        let index = 0;

        function typeWriter() {
            if (index < nome.length) {
                nameContainer.textContent += nome[index];
                index++;
                setTimeout(typeWriter, 200); // Ajuste o tempo entre as letras
            }
        }

        window.addEventListener("load", typeWriter);

const btDarkMode = document.querySelector("#darkMode")
const moon = btDarkMode.querySelector("#moon") 
const soon = btDarkMode.querySelector("#soon") 

function toggleIcon() {
  // Qual está visível?
    let currentIcon = null 
    if(moon.style.display !== 'none'){
        currentIcon = moon
    }else{
        currentIcon = soon
    }

  let nextIcon = currentIcon === moon ? soon : moon;

  // Passo 1: anima o ícone atual para sair pra direita + sumir
  currentIcon.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  currentIcon.style.opacity = '0';
  currentIcon.style.transform = 'translateX(20px)';

  setTimeout(() => {
    // Esconde o ícone atual
    currentIcon.style.display = 'none';

    // Prepara o próximo ícone para aparecer vindo da esquerda
    nextIcon.style.display = 'block';
    nextIcon.style.opacity = '0';
    nextIcon.style.transform = 'translateX(-20px)';
    nextIcon.style.transition = 'none'; // reset pra mudar as propriedades sem animação

    // Força o browser a registrar o estilo (reflow)
    nextIcon.offsetHeight; 

    // anima o próximo ícone para aparecer + mover pra posição normal
    nextIcon.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    nextIcon.style.opacity = '1';
    nextIcon.style.transform = 'translateX(0)';
  }, 300); // espera a transição do fade out terminar
}

// Exemplo: ligar ao clique no container ou em um botão
btDarkMode.addEventListener('click', toggleIcon);

btDarkMode.addEventListener('click',(e)=>{
    const el = e.target.id
    console.log(el)
    if(el == "moon"){
        document.body.classList.toggle('darkColor');
    }else{
        document.body.classList.toggle("darkColor");
    }
})