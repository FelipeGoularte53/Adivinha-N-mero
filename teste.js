let numeroSecreto=parseInt(Math.random()*100);
let tentativas = 0;
let maxtentativas = 30;
let tentativaLVLeasy = 40;
let tentativaLVLmedium = 30;
let tentativaLVLhard = 10;


document.getElementById('jogo').innerHTML='Tentativas  ' +tentativas;
document.getElementById('maximo').innerHTML='Tentativas restantes ' +maxtentativas;

function geranumero()
{
 numeroSecreto=parseInt(Math.random()*100);
 document.getElementById('x').value="";
 document.getElementById('x').focus();
 tentativas = 0;
 document.getElementById('jogo').innerHTML='Tentativas  ' +tentativas;
 document.getElementById('maximo').innerHTML='Tentativas restantes ' +maxtentativas;
}

function testejogo()
{
 let chute = document.getElementById('x').value;
 if (numeroSecreto < chute )
 {
    alert('Você digitou um número maior!');
    tentativas++;
    maxtentativas--;
    document.getElementById('jogo').innerHTML="você jogou";
    document.getElementById('jogo').innerHTML='Tentativas  ' +tentativas;
    document.getElementById('maximo').innerHTML='Tentativas restantes ' +maxtentativas;

if (chute > 100)
   alert('Número invalido')
 }
 else if (numeroSecreto > chute)
 {
    alert('Você digitou um número menor!');
    tentativas++;
    maxtentativas--;
    document.getElementById('jogo').innerHTML="você jogou";
    document.getElementById('jogo').innerHTML='Tentativas  ' +tentativas;
    document.getElementById('maximo').innerHTML='Tentativas restantes ' +maxtentativas;
 }
 else if (numeroSecreto == chute)
 {
    alert('Você acertou!\nJogue denovo\nUm novo número secreto foi gerado');
    numeroSecreto=parseInt(Math.random()*100);
    document.getElementById('x').value="";
    tentativas = 0;
    maxtentativas = 30;
    document.getElementById('maximo').innerHTML="Tentativas restantes "+maxtentativas;
    document.getElementById('jogo').innerHTML="Tentativas "+tentativas;
    
 }
 document.getElementById('x').focus();


if (maxtentativas <= 0)
{
   alert ('Você perdeu! Seu número secreto era: '+ numeroSecreto);
   geranumero();
}
}
function facil()
{
maxtentativas=tentativaLVLeasy;
tentativas= 0;
document.getElementById('jogo').innerHTML="Tentativas "+tentativas;
document.getElementById('maximo').innerHTML='Tentativas restantes ' +maxtentativas;
}

function normal()
{
maxtentativas=tentativaLVLmedium;
tentativas= 0;
document.getElementById('jogo').innerHTML="Tentativas "+tentativas;
document.getElementById('maximo').innerHTML='Tentativas restantes ' +maxtentativas;
}

function dificil()
{
maxtentativas=tentativaLVLhard;
tentativas= 0;
document.getElementById('jogo').innerHTML="Tentativas "+tentativas;
document.getElementById('maximo').innerHTML='Tentativas restantes ' +maxtentativas;
}
