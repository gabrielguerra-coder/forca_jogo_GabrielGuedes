let palavraSecreta = ['crocodilo', 'tartaruga', 'futebol', 'computador', 'maça', 'banana', 'leao','gorila', 'rinoceronte', 'caixa','cleiton','cadeira','bolsa', 'camelo', 'abacaxi' ];
let vidasRestantes = 5;
let letraOculta = [];

const sorteio = Math.floor(Math.random() * palavraSecreta.length);
const palavra = palavraSecreta[sorteio];

for (let i = 0; i < palavra.length; i++){
    letraOculta.push("_");
}
let forcaPalavra = document.querySelector("#palavra");
forcaPalavra.innerHTML = letraOculta.join(" ");


let telaVidas = document.querySelector("#vidas");
telaVidas.innerHTML = vidasRestantes;
let CampoDigitado = document.querySelector("#campo-Digitado");
let btnVerificar = document.querySelector("#btn-verificar");
let statusMensagem = document.querySelector("#status");

btnVerificar.addEventListener("click", testarPalavra);

function testarPalavra(){
    let digito = CampoDigitado.value; 
    CampoDigitado.value = "";
    CampoDigitado.focus();

    if (digito == ""){
        return;
    }

    let palavraCorreta = false;
    for (let i = 0; i < palavraSecreta.length; i++){
        if (palavra[i] == digito){
            letraOculta[i] = digito;
            palavraCorreta = true;
        }
    }

    
    if (palavraCorreta){
        forcaPalavra.innerHTML = letraOculta.join(" ");
    }else {
        vidasRestantes--;
        telaVidas.innerHTML = vidasRestantes;
        vidasRestantes.innerHTML += `${digito}`;
    }

    //Verificar a condição de vitória ou derrota
    if (vidasRestantes == 0){
        statusMensagem.innerHTML = `<p style="color: red;"><strong>ERROUU!❌</strong>O boneco morreu.</p>`
        btnVerificar.disabled = true;
        CampoDigitado.disabled = true;

    }else if (!letraOculta.includes("_")){
        statusMensagem.innerHTML = `<p style="color: green;"><strong>PARABÉNS PALAVRA CORRETA!✅</strong></p>`;
        btnVerificar.disabled = true;
        CampoDigitado.disabled = true;
    }
}