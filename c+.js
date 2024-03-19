function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var res = document.getElementById("res")
    var img = document.getElementById('img')
    var hora = 7
    if(hora >= 0 && hora < 12){
        res.innerHTML = `Bom dia, agora são ${hora} da manhã.`
        document.body.style.background = `pink`
        img.src = `Sem-Título-2.png`
    }else if(hora >= 12 && hora < 18){
        res.innerHTML = `Boa tarde, agora são ${hora} da tarde`
        document.body.style.background = `orange`
        img.src = `Sem-Título-3.png`
    } else{
        res.innerHTML = `Boa noite, agora são ${hora} da noite`
        document.body.style.background = `blue`
        img.src = `noite.png.png`
    }
}
