
function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=nome; expires= Tue, 01 Jan 2115 12:00:00 UTC 
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");
    if(username != ""){
        alert("Bem vindo novamente " + username);
    }else{
        username =  prompt("Digite seu nome:");
        if (username != "" && username != null){
            criarCookie("nomeUsuario", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
}
function minusculo(nomeUsuario){
    return nomeUsuario.toLowerCase();
}
function maiusculo(nomeUsuario){
    return nomeUsuario.toUpperCase();
}
function alternado(nomeUsuario){
    return nomeUsuario.split("").map((char, index) => index % 2 == 0 ?
char.toUpperCase() : char.toLowerCase()
).join("");
}

function alterada(nomeUsuario){
    return nomeUsuario.split("")
       .reverse
}

verificarCookie();

