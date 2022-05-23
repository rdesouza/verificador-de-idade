function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] verifique o ano e tente de novo')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano  - Number(fano.value)
        
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebe-m.png')
                
            }else if(idade >11 && idade <=30){
                img.setAttribute('src', 'jovem-m.png')
            }else if(idade<= 50){
                img.setAttribute('src', 'adulto.png')
            }else
                img.setAttribute('src', 'idoso.png')
    

        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebe-f.png')
            }else if(idade >11 && idade <=30){
                img.setAttribute('src', 'jovem-f.png')
            }else if(idade<= 50){
                img.setAttribute('src', 'adulta.png')
            }else
                img.setAttribute('src', 'idosa.png')


        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}