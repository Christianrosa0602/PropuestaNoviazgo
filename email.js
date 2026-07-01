emailjs.init("wGsKmdzsuW1F0A2Ri");

function enviarCorreo() {

    const params = {

        to_name: "Dafne",

        to_email: "dafnecache2005@gmail.com",

        message: carta

    };

    emailjs.send(
        "service_pj91wve",
        "template_zwa86h3",
        params
    )
    .then(() => {
        console.log("Revisa tu correo ❤️");
    })
    .catch((error) => {
        console.error("Error enviando correo:", error);
    });

}