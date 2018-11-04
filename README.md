# Aplicação Ionic

Criado aplicação Ionic/Angular que consome dados de um Web Service RESTful com Node.js e Express.js criado neste 
[repositório](https://github.com/anasantos11/webservice-nodejs). 

**FUNCIONALIDADES DA APLICAÇÃO IONIC**

|Funcionalidades|
|---------------|
|Exibe todos os clientes cadastrados na base de dados.|
|Permite fazer buscas na lista de clientes pelo primeiro nome, segundo nome ou website do cliente.|
|Permite visualizar os dados completos do cliente, ao selecionar um registro na lista de clientes cadastrados.|
|Permite visualizar todos os pedidos registrados do cliente, ao selecionar um registro na lista de clientes cadastrados.|

**EXECUÇÃO**

Para executar o projeto em sua máquina primeiro, deverá instalar o Node.js. Em seguida, instalar as ferramentas de linha de comando do
Ionic. 

O projeto foi construído utilizado a versão 3.20.1 do Ionic, para instalá-la basta executar o comando abaixo em seu prompat de 
comando;

	- npm install -g ionic@3.20.1

Após as instalações citadas anteriormente, no prompt de comando, navegue até a pasta raiz do diretório do projeto para executar os 
comandos que serão citados abaixo:

Instale as dependências do projeto:

	- npm install

Execute o aplicativo Ionic: 

	- ionic serve

Pronto, a aplicação será iniciada na porta 8100 e você poderá visualizar a página em seu navegador em http://localhost:8100/.
