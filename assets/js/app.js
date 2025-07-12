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