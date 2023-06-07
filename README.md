# Calculadora de Frete

Este é um código JavaScript para calcular o valor do frete com base nos CEPs de origem e destino. O código utiliza a API ViaCEP para obter informações de endereço com base nos CEPs informados e, em seguida, calcula o valor do frete com base no estado de destino.

## Funcionalidade

O código possui uma função principal `calcularFrete()` que é chamada quando o botão "Calcular frete" é clicado. A função realiza as seguintes etapas:

1. Obtém os elementos necessários do DOM, como o elemento de saída, o campo de origem e o campo de destino.

2. Chama a função `consultarCep()` para obter o JSON de resposta com base no CEP de origem. Se o CEP for inválido, exibe a mensagem "Cep Inválido" e retorna.

3. Executa as mesmas etapas para o CEP de destino, verificando se é válido ou não.

4. Se ambos os CEPs de origem e destino forem válidos, chama a função `getValor()` com o estado de destino para obter o valor do frete correspondente.

5. Constrói uma string de resultado utilizando as informações de endereço do JSON de origem e destino, juntamente com o valor do frete.

6. Define o conteúdo de texto do elemento de saída com a string de resultado.

O código também inclui a função `getValor()` que retorna o valor do frete com base no estado de destino. Os valores do frete são definidos em uma série de declarações `if` para cada estado.

## Requisitos

- O código requer uma conexão com a internet para acessar a API ViaCEP e obter informações de endereço com base nos CEPs.



- Verifique se há restrições de segurança do navegador em relação a solicitações de recursos de origem cruzada (CORS).

- Este código é apenas um exemplo e pode ser necessário adaptá-lo para atender às necessidades específicas do seu projeto.

---

Sinta-se à vontade para personalizar o README adicionando mais informações relevantes sobre o seu projeto, como requisitos adicionais, informações de instalação, exemplos de uso ou capturas de tela.

