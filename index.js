var setaDireita = window.document.getElementById("seta-direita")
var leo = window.document.getElementById("leo")
var sa = window.document.getElementById("sa")
var doida = window.document.getElementById("doida")
var setaEsquerda= window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
   leo.style = "display:none"
   doida.style = "display:flex" 
   setaDireita.style= "display:none"
   setaEsquerda.style= "display:flex"
}

function RolarParaEsquerda(){
   doida.style= "display:none"
   leo.style= "display:flex"
   setaDireita.style= "display:flex"
   setaEsquerda.style= "display:none"
}


