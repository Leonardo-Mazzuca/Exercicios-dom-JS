

const calculaGastoMensal = () => {
    const gastoMesHTML = document.querySelectorAll('.gasto');
    const gastoMes = descobreGastoMensal();
    const maiorPrecoIndex = descobreMaiorPreco(gastoMes);
    const menorPrecoIndex = descobreMenorPreco(gastoMes);


    for(let i = 0; i < gastoMesHTML.length; i++){
        gastoMesHTML[i].textContent = Number(gastoMes[i]);
    }

    gastoMesHTML[maiorPrecoIndex].classList.add('bg-danger');
    descobreModelos(gastoMes);

    


}

const descobreModelos = (gastoMes) => {

    const maiorPrecoIndex = descobreMaiorPreco(gastoMes);
    const menorPrecoIndex = descobreMenorPreco(gastoMes);
    const modelos = document.querySelectorAll('.modelo');

    
    const nomeMaiorPrecoModelo = modelos[maiorPrecoIndex].textContent;
    const nomeMenorPrecoModelo = modelos[menorPrecoIndex].textContent;

    const maiorGastoHTML = document.querySelector('.maiorGasto');
    const menorGastoHTML = document.querySelector('.menorGasto');

    maiorGastoHTML.textContent = nomeMaiorPrecoModelo;
    menorGastoHTML.textContent = nomeMenorPrecoModelo;



}

const descobreGastoMensal = () => {
    const tempoCarregamento = document.querySelectorAll('.tempo');
    const numerosCarregamentos = descobreNumCarregamento();

    const arrayTempo = [];
    const gastoMes = [];
    
    tempoCarregamento.forEach(item => {
        arrayTempo.push(Number(item.textContent));
    })
    
    for(let i = 0; i < arrayTempo.length; i++){
        gastoMes[i] = ((numerosCarregamentos[i] * arrayTempo[i]) * 1.304).toFixed(2);
    }

    return gastoMes;
}

const descobreNumCarregamento = () => {

    const autonomiaContainer = document.querySelectorAll('.autonomia');
    const kmRodadosContainer = document.querySelectorAll('.kilometragem');

    const arrayAutonomia = [];
    const arrayKmRodados = [];
    const numerosCarregamentos = [];

    autonomiaContainer.forEach(item => {
        arrayAutonomia.push(Number(item.textContent));

    });

    kmRodadosContainer.forEach(item => {
        arrayKmRodados.push(Number(item.textContent));
    });

    for(let i = 0; i < arrayAutonomia.length; i++){
        numerosCarregamentos[i] = arrayKmRodados[i] / arrayAutonomia[i];
    }

    return numerosCarregamentos;


}

const descobreMaiorPreco = (gastoMes) => {

    let maiorPrecoIndex = 0;

    for(let i = 0; i< gastoMes.length; i++){

        if(gastoMes[i] > maiorPrecoIndex){
            maiorPrecoIndex = i - 1;
        }


    }

    return maiorPrecoIndex;


}

const descobreMenorPreco = (gastoMes) => {

    
    let menorPrecoIndex = 0;

    for(let i = 0; i< gastoMes.length; i++){

        if(i === 0){
            menorPrecoIndex = gastoMes[i];
        }

        if(gastoMes[i] < menorPrecoIndex){
            menorPrecoIndex = i; 
        }


    }

    return menorPrecoIndex;


}

const gerarDadosBtn = document.querySelector('#gerarDados');
gerarDadosBtn.addEventListener('click', calculaGastoMensal);