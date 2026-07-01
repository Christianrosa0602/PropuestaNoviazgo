function nextPage(id){

    document.querySelector(".page.active").classList.remove("active");

    document.getElementById(id).classList.add("active");

}

function accept(){

    nextPage("success");
    enviarCorreo();

}

function thinking(){

    nextPage("thinking");

}