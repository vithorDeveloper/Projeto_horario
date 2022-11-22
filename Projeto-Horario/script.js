function carregar(){
    var txt = document.querySelector("#txtdiv")
    var foto = document.querySelector("img")
    var fundo = document.querySelector("body")
    var saud = document.querySelector("p#sauda")

    var time = new Date()
    var hora = time.getHours()
    txt.innerText = `agora são ${hora} horas`

    if(hora >= 5 && hora <= 12){
        foto.src = 'manha.jpg'
        fundo.style.background = "#CDDAE2"
        saud.innerText = "Bom Dia !!!"
    }
    else if(hora > 12 && hora <= 18){
        foto.src = 'tarde.jpg'
        fundo.style.background = "#DE7D46"
        saud.innerText = 'Boa Tarde !!!'
    }
    else {
        foto.src = 'noite.jpg'
        fundo.style.background = "#3F2F4A"
        saud.innerText = 'Boa Noite !!!'
    }
}
