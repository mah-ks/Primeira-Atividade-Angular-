Uso de Rotas Dinâmicas no Angular

Implementação de um sistema de navegação baseado em rotas.
Utilização de rota dinâmica para receber valores variáveis pela URL.
Exemplo aplicado:

Rota: /users/:id
:id representa um valor que muda conforme o usuário selecionado (ex.: /users/1, /users/3).


Permite que a aplicação exiba detalhes específicos de cada usuário com base no identificador presente na URL.


Captura de Parâmetros com paramMap

Uso do paramMap para acessar parâmetros da rota.
Comando utilizado:
TypeScriptthis.route.snapshot.paramMap.get('id')Show more lines

Permite capturar o valor dinâmico do id diretamente da URL.
Esse valor é usado para buscar e exibir os dados do usuário correspondente.
Garante a navegação correta entre a lista de usuários e a tela de detalhes.

 Comunicação Assíncrona com Observable

Implementação de Observable no serviço responsável por consumir a API de usuários.
Necessário devido ao comportamento assíncrono das requisições HTTP.
Uso de subscribe() para:

Aguardar o retorno da API.
Exibir os dados somente quando estiverem disponíveis.
Tratar erros e estados de carregamento.


Demonstração prática de como Angular lida com dados assíncronos.


O projeto demonstra de forma integrada:

Rotas dinâmicas
Captura de parâmetros
Comunicação assíncrona com API usando Observable


Resultando em uma navegação eficiente e dinâmica dentro da aplicação Angular.
