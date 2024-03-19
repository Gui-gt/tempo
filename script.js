function carregar(){
    var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
hora = 10
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >=0 && hora < 12){
    img.src = 'Sem-Título-3.png'
    document.body.style.backgroundColor = '#e4ae6c'
}else if(hora >= 12 && hora < 18){
    
    img.src = 'Sem-Título-2.png'
    document.body.style.backgroundColor = '#9f8068'
}else{
    img.src = 'noite.png.png'
    document.body.style.backgroundColor = '#54575b'
}
}