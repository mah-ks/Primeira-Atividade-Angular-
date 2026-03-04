# Sistema de Navegação com Rotas Dinâmicas no Angular
Este projeto demonstra o uso de rotas dinâmicas, captura de parâmetros de URL e comunicação assíncrona com API utilizando Observable no Angular.

## O que é rota dinâmica?
Rota dinâmica é uma rota que recebe um valor variável pela URL.
No projeto foi utilizada a rota /users/:id, onde o :id muda de acordo com o usuário selecionado, como por exemplo /users/1 ou /users/3.
Isso permite que a aplicação mostre os dados específicos de cada usuário com base no número informado na URL.

## O que é paramMap?
O paramMap é um recurso do Angular que permite acessar os parâmetros da rota.
No projeto, ele foi utilizado para capturar o valor do id presente na URL, usando o comando:


```this.route.snapshot.paramMap.get('id')```

Esse valor é usado para buscar e exibir as informações do usuário correto na tela de detalhes.

## Onde foi usado Observable e por quê?
O Observable foi utilizado no UserService, responsável por consumir a API de usuários.
Ele foi usado porque as requisições HTTP são assíncronas, ou seja, os dados não são retornados imediatamente.
Com o uso de subscribe(), a aplicação consegue:

	• Esperar a resposta da API
	• Exibir os dados quando estiverem disponíveis
	• Tratar possíveis erros
  
Assim, o Observable garante que os dados sejam carregados corretamente antes de serem mostrados na tela.
