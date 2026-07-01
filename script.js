function nextPage(id){

    document.querySelector(".page.active").classList.remove("active");

    document.getElementById(id).classList.add("active");

}

function accept(){

    nextPage("loading");

    let porcentaje = 0;

    const barra = document.getElementById("progress-bar");
    const texto = document.getElementById("loading-text");
    const numero = document.getElementById("percentage");

    const intervalo = setInterval(()=>{

        porcentaje++;

        barra.style.width = porcentaje + "%";
        numero.innerText = porcentaje + "%";

        if(porcentaje === 10){

            texto.innerText = "🍂 Buscando una calabacita...";

        }

        if(porcentaje === 25){

            texto.innerText = "😊 Detectando una sonrisa hermosa...";

        }

        if(porcentaje === 40){

            texto.innerText = "😂 Calculando momentos felices...";

        }

        if(porcentaje === 55){

            texto.innerText = "💬 Revisando conversaciones...";

        }

        if(porcentaje === 70){

            texto.innerText = "❤️ Analizando sentimientos...";

        }

        if(porcentaje === 85){

            texto.innerText = "☀ Analizando tu resplandor...";

        }

        if(porcentaje === 95){

            texto.innerText = "✨ Preparando un futuro juntos...";

        }

        if(porcentaje >= 100){

            clearInterval(intervalo);

            numero.innerText = "100%";

            texto.innerHTML = `
                <strong>❤️ Compatibilidad encontrada ❤️</strong><br><br>
                Resultado del análisis:<br>
                Compatibilidad: <strong>100%</strong><br>
                Estado: ✔ Aprobado para comenzar una nueva historia.
            `;

            setTimeout(()=>{

                nextPage("success");
                enviarCorreo();

            },2500);

        }

    },45);

}

function thinking(){

    nextPage("thinking");

}