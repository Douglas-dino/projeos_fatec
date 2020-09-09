
function calcular() {
   var nota1 = document.getElementById("pa")
   var nota2 = document.getElementById("ta")
   var nota3 = document.getElementById("pb")
   var nota4 = document.getElementById("tb")
   var nota5 = document.getElementById("u")
   var nota6 = document.getElementById("m")
   var res = document.getElementById("res")
   var pc = document.getElementById("pc")
   var bm1 = (Number(nota1.value) * 0.25) + (Number(nota2.value) * 0.25)
   var bm2 = (Number(nota3.value) * 0.25) + (Number(nota4.value) * 0.25) 
   var b = (Number(nota5.value) + Number(nota6.value))
   var bm = (Number(pc.value) * 0.5)
   
   var media = bm1 + bm2 + b
   
  
    if (media >= 6 && media <= 10) {
            res.innerHTML = `Sua média foi ${media}, situação: <span>APROVADO</span>.`
           
        } else if (media >= 0 && media < 6)  {
                 alert("Sua media foi insuficiente, considerar nota do P3.")
                                
        } 
        
        else {
                 alert("ERRO!, a media maxima é 10")
        }
   if (bm1 >bm2) {
         var media = bm1 + bm + b   
 } else if (bm2 > bm1) {
        var media = bm + bm2 + b
 } if (media >=6 && media <= 10 ) {
          res.innerHTML = `Sua média foi ${media}, situação: <span>APROVADO</span>.`     
                
 } else if (media >= 0 && media <6) {
          res.innerHTML =`Sua media foi ${media}, situação: <span id="red">REPROVADO</span>.`
 }  if (media >= 6 && media <= 10) {
                res.innerHTML = `Sua média foi ${media}, situação: <span>APROVADO</span>.`   
         } else if (media >= 0 &&  media < 6) {
                res.innerHTML =`Sua media foi ${media}, situação: <span id="red">REPROVADO</span>.`  
         } 
               

                     
        
}
