function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/babyboy-image1.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/teenboy-image1.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/man-image1.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/oldman-image1.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/babygirl-image1.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/teengirl-image1.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/woman-image1.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/oldwoman-image1.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. <br>`
        res.appendChild(img)
    }
}