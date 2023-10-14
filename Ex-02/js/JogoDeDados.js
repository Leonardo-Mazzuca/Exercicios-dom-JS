const jogoDeDados = () => {
    colocaNomesNoHTML();
    colocarNumerosNosDados();
    colocarNomeVencedor();


}

const sortearNumerosDados = () => {

    const numerosSorteados = [];

    for(let i = 0; i < 10; i++ ){
        const numeroSorteado = Math.floor(Math.random()*6) + 1;
        numerosSorteados[i] = numeroSorteado;
    }

    return numerosSorteados;
}

const colocarNumerosNosDados = () => {
    const dadosContainer = document.querySelectorAll('.dados-lancados');

    const numerosJogador1 = sortearNumerosDados();
    const numerosJogador2 = sortearNumerosDados();

    let totalDadosJog1 = 0
    let totalDadosJog2 = 0

    const totalDeDadosDosJogadores = [];


    for(const numero of numerosJogador1){


        const dadoElement = document.createElement('div');
        dadoElement.classList.add('dado-numero');
        dadoElement.textContent = Number(numero)
        dadosContainer[0].appendChild(dadoElement);
        totalDadosJog1+=numero;
        
    }

    for(const numero of numerosJogador2){


        const dadoElement = document.createElement('div');
        dadoElement.classList.add('dado-numero');
        dadoElement.textContent = Number(numero)
        dadosContainer[1].appendChild(dadoElement);
        totalDadosJog2+=numero;
       
    }

    totalDeDadosDosJogadores.push(totalDadosJog1)
    totalDeDadosDosJogadores.push(totalDadosJog2)
    return totalDeDadosDosJogadores;

}

const colocarTotalSomaNoHTML = () => {
    const totalDeDadosDosJogadores = colocarNumerosNosDados();
    const [totalJog1, totalJog2] = totalDeDadosDosJogadores;

    const totalJogador1HTML = document.getElementById('total-jogador-1');
    totalJogador1HTML.textContent = ` Total: ${totalJog1}`;

    const totalJogador2HTML = document.getElementById('total-jogador-2');
    totalJogador2HTML.textContent = ` Total: ${totalJog2}`;

    const vencedor = determinarVencedor(totalJog1,totalJog2);
    return vencedor;


}

const determinarVencedor = (totalJog1, totalJog2) => {
    if(totalJog1 > totalJog2){
        const jog1 = document.querySelector('#jogador-1 .jogador-nome').textContent;
        return jog1;
    } else if (totalJog2 > totalJog1){
        const jog2 = document.querySelector('#jogador-2 .jogador-nome').textContent;
        return jog2;
    }
}

const colocarNomeVencedor = () => {
    const vencedor = colocarTotalSomaNoHTML();
    const vencedorContainer = document.querySelector('#nome-vencedor');
    vencedorContainer.textContent = vencedor;

}



const geraNomes = () => {
    const nomesAleatorios = [];
    const nomesDisponiveis = [
        'Luke Skywalker',
        'Princesa Leia',
        'Han Solo',
        'Darth Vader',
        'Yoda',
        'Obi-Wan Kenobi',
        'R2-D2',
        'C-3PO',
        'Chewbacca',
        'Boba Fett'
    ];

    while (nomesAleatorios.length < 2 && nomesDisponiveis.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * nomesDisponiveis.length);
        const nomeAleatorio = nomesDisponiveis.splice(indiceAleatorio, 1)[0];
        nomesAleatorios.push(nomeAleatorio);
    }

    return nomesAleatorios;
}

const colocaNomesNoHTML = () => {

    const nomesAleatorios = geraNomes();
    const jogadorNome = document.querySelectorAll('.jogador-nome');
    
    for(let i = 0; i < jogadorNome.length; i++){
        jogadorNome[i].textContent = nomesAleatorios[i];

    }

}

jogoDeDados();