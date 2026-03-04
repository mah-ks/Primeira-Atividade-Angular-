Sistema de Navegação com Rotas Dinâmicas no Angular
Este projeto demonstra o uso de rotas dinâmicas, captura de parâmetros de URL e comunicação assíncrona com API utilizando Observable no Angular.

 1. Rotas Dinâmicas no Angular
As rotas dinâmicas permitem receber valores variáveis diretamente pela URL para exibir conteúdos específicos.
Exemplo da rota utilizada:
TypeScript/users/:id``Show more lines

:id representa um valor dinâmico.
Exemplos reais:

/users/1
/users/3

 Isso permite que cada usuário tenha uma página de detalhes acessada pelo seu identificador.

 2. Captura de Parâmetros com paramMap
O Angular utiliza o paramMap para acessar parâmetros definidos na rota.
Exemplo:
TypeScriptthis.route.snapshot.paramMap.get('id');Show more lines
✔ Recupera o id direto da URL
✔ Permite buscar e exibir o usuário correspondente
✔ Garante navegação fluida entre lista e detalhes

 3. Comunicação Assíncrona com API (Observable)
O serviço responsável pela API utiliza Observable, essencial para requisições HTTP assíncronas.
Funcionamento:

Aguarda a resposta da API
Exibe os dados somente quando disponíveis
Permite tratar erros e carregamento

Exemplo com subscribe():
TypeScriptthis.userService.getUser(id).subscribe(data => {  this.user = data;});Show more lines


