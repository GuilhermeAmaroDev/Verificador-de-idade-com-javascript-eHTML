function verificar () {
 var data = new Date ()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.getElementById('res') // ou document.querySelector('div#res')
 if (fano.value.lenght == 0 || Number(fano.value) > ano) {
     window.alert('[ERRO]Verifique os dados e tente novamente!')
 } else { 
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var gênero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if (fsex[0].checked) {
        gênero = 'homem'
        if (idade >=0 && idade <10) {
            img.setAttribute('src' , 'menino-crianca.png' )
            document.body.style.background = '#73b3cf'
        } else if (idade <21) { 
            img.setAttribute ('src' , 'homem-jovem.png')
            document.body.style.background = '#c77486'
        } else if (idade <50) { 
            img.setAttribute ('src' , 'homemadulto.png')
            document.body.style.background = '#485057'
        } else {
            img.setAttribute ('src' , 'homem-velho.png')
            document.body.style.background = '#78787a'
        }
     } else if (fsex[1].checked) {
        gênero = 'mulher'
     if (idade >=0 && idade <15) {
         // criança
        img.setAttribute('src' , 'menina-crianca.png')
        document.body.style.background = '#ffbc93'
     } else if (idade <21) {
         // jovem
         img.setAttribute('src' , 'mulherjovem.png')
         document.body.style.background = '#715f5e'
     } else if (idade <50) {
         //adulto
         img.setAttribute ('src' , 'mulher-meia-idade.png')
         document.body.style.background = '#c8544b'
     } else  {
         //idoso
         img.setAttribute ('src' ,'mulher-idosa.png')
         document.body.style.background = '#ff953a'
          }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
     res.appendChild(img) //para aparecer a imagem
    }
}