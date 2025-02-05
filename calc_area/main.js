function calcArea(base, altura) {
    return (base * altura) / 2;
}

function meuForm() {
    const form = document.querySelector('#formulario');
    const result = document.querySelector('#resultado');
    const alerta = document.querySelector('#alerta')

    form.addEventListener('submit', function envioForm(e) {
        e.preventDefault()
        const ibase = parseFloat(form.querySelector('#ibase').value);
        const ialtura = parseFloat(form.querySelector('#ialtura').value);

        alerta.innerHTML = "";
        alerta.style.color= "red" ;
        
        if((isNaN(ibase) || ibase<= 0) && (isNaN(ialtura) || ialtura <=0)){
            alerta.innerHTML = `Base e altura inválidas`
            return;
        }

        if(isNaN(ibase) || ibase<= 0)  {
            alerta.innerHTML = `Base invalida`
            return;
        }
        if(isNaN(ialtura) || ialtura <=0){
            alerta.innerHTML = `Altura invalida`
            return;
        }



        const area = calcArea(ibase , ialtura);

        alerta.innerHTML = "";
        result.innerHTML = ` A área do triangulo é: </br>${area.toFixed(2)} metros quadrados`

        

    });
};
meuForm();




