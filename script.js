
function calcularFrete() {
    let outputElement = document.getElementById("resultado");
    let origem = document.getElementById("origem");
    let origemJson = consultarCep(origem.value);
    console.log(origemJson)
    if(origemJson.erro=='true'){
        outputElement.textContent = "Cep Inválido" 
        return 
    }
    let destino = document.getElementById("destino");
    let destinoJson = consultarCep(destino.value);
    console.log(destinoJson)
    if(destinoJson.erro=='true'){
        outputElement.textContent = "Cep Inválido" 
        return 
    }
    let valor = getValor(destinoJson.uf);
    let resultado = "De " + origemJson.logradouro + " para " + destinoJson.logradouro + " o valor é: " + valor +"$";
    outputElement.textContent = resultado;
   

}

function getValor(uf) {
    if(uf=="AC"){

        return 25.50;

    }
    if(uf=="AL"){
        return 23.99;
    }
    if(uf=="AP"){
        return 21.49;
    }
    if(uf=="AM"){ 
        return 19.78;

    }
    if(uf=="BA"){
        return 18.99;

    }
    if(uf=="CE"){
        return 17.59;

    }
    if(uf=="DF"){
        return 16.12;

    }
    if(uf=="ES"){
        return 15.98;

    }
    if(uf=="GO"){
        return 14.79;

    }
    if(uf=="MA"){
        return 15.49;

    }
    if(uf=="MT"){
        return 14.67;

    }
    if(uf=="MS"){
        return 13.94;

    }
    if(uf=="MG"){
        return 12.75;

    }
    if(uf=="PA"){
        return 11.36;

    }
    if(uf=="PB"){
        return 10.99;

    }
    if(uf=="PR"){
        return 9.74;

    }
    if(uf=="PE"){
        return 8.45;

    }
    if(uf=="PI"){
        return 7.78;

    }
    if(uf=="RJ"){
        return 6.32;

    }
    if(uf=="RN"){
        return 5.87;

    }
    if(uf=="RS"){
        return 4.99;

    }
    if(uf=="RO"){
        return 3.99;

    }
    if(uf=="RR"){
        return 2.76;

    }
    if(uf=="SC"){
        return 2.50;

    }
    if(uf=="SP"){
        return 2.23;

    }
    if(uf=="TO"){
        return 1.74;

    }
    

}


function consultarCep(cep) {
    const request = new XMLHttpRequest();
    request.open("GET", "http://viacep.com.br/ws/" + cep + "/json/", false);
    request.send(null);
    return JSON.parse(request.response);
  }




  

