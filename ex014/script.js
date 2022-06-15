function carregar(){
    var hora = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src='fotomanha.png.png'
        document.body.style.backgroundColor = '#EEDAB5'
    }else if(hora >= 12 && hora <18){
        img.src= 'fototarde.png.png'
        document.body.style.backgroundColor = '#F28749'
    }else{
        img.src = 'fotonoite.png.png'
        document.body.style.backgroundColor = '#484F55'
    }
    
}



