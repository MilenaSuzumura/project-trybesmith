# Trybesmith

Trybesmith é um projeto focado em construir uma API Node Express utilizando o Typescript, desenvolvendo um CRUD (Create, Read, Update e Delete) de itens medievais. Utilizo alguns endpoints que irão ler e escrever em um banco de dados, utilizando o Sequelize.

<strong>OBS:</strong> ESSE PROJETO FOI DESENVOLVIDO NA TRYBE.

## Técnologias usadas
* Typescript;
* Node;
* Express;
* Sequelize;
* Json web tokens;
* DotEnv;
* Joi;
* Docker;
* MySQL;
* Jest;
* Nodemon;
* Eslint.

## Rotas, entradas e saídas

<details>
<summary>Endpoint GET /products</summary><br />
Utilizado para retornar as informações de todos os produtos que contém no banco de dados.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-products" src="/images-readme/get-products-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta--get-products" src="/images-readme/get-products-exemplo-saida.png">

</details>

<details>
<summary>Endpoint POST /products</summary><br />
Utilizado para cadastrar produtos no banco de dados. Para isso, o banco de dados exige que o usuário insira um nome e a quantidade de ouros do produto.

##### Informações necessárias:
* <strong>name:</strong> É o nome do produto. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>amount:</strong> É a quantidade de ouros do produto. Deve ser enviado como string e o mínimo de caracters é 2. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-products" src="/images-readme/post-products-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-products" src="/images-readme/post-products-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Ambas possuem retornos diferentes.

<strong>Exemplo caso não preencha os requisitos necessários:</strong>
```
{
  "message": "\"name\" is not allowed to be empty"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "\"name\" is required"
}
```

</details>

<details>
<summary>Endpoint POST /users</summary><br />
Utilizado para criar um novo usuário. Para isso, necessita de um username, classe, level e senha. Após, retornará um token caso todas as informações enviadas foram validadas corretamente.

##### Informações necessárias:
* <strong>username:</strong> É o nome de usuário. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>classe:</strong> É a classe do usuário. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>level:</strong> É o level do usuário. Deve ser enviado como number e mínimo ser acima de 1. É obrigatório. 
* <strong>password:</strong> É a senha do usuário. Deve ser enviado como string e deve conter no mínimo 8 caracter. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-users" src="/images-readme/post-users-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-users" src="/images-readme/post-users-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplo caso não preencha os requisitos necessários:</strong>
```
{
  "message": "\"classe\" is not allowed to be empty"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "\"username\" is required"
}
```

</details>

<details>
<summary>Endpoint POST /login</summary><br />
Utilizado para logar na conta. Para isso, necessita de um username e senha. Após, retornará um token caso todas as informações enviadas foram validadas corretamente.

##### Informações necessárias:
* <strong>username:</strong> É o nome de usuário. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>password:</strong> É a senha do usuário. Deve ser enviado como string e deve conter no mínimo 8 caracter. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-login" src="/images-readme/post-login-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-login" src="/images-readme/post-login-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplo caso não preencha os requisitos necessários:</strong>
```
{
  "message": "\"password\" is not allowed to be empty"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "\"username\" is required"
}
```

</details>

<!-- 

<details>
<summary>Endpoint GET /user/:id</summary><br />
Utilizado para retornar as informações do usuário com o id que está no url que contém no banco de dados, porém é necessário ter um token para isso.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-get-user-id" src="/images-readme/get-user-id-exemplo-de-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-get-user-id" src="/images-readme/get-user-id-exemplo-resposta.png">

<strong>Caso não exista usuário com aquele id no banco de dados, o retorno será:</strong>
```
{
  "message": "User does not exist"
}
```

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<details>
<summary>Endpoint POST /categories</summary><br />
Utilizado para criar uma nova categoria. Para isso, necessita de um nome e de um token valido. Caso as informações estejam corretas, retornara as informações da nova categoria.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-post-categories" src="/images-readme/post-categories-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-post-categories" src="/images-readme/post-categories-exemplo-saida.png">

#### Inserindo informações incorretas
Existem quatro cenários onde a saída acima pode não ser retornada: não conter o nome da categoria, a string name estar vazia, caso não tenha o token e um token invalido.

<strong>Exemplo caso não contenha o name:</strong>
```
{
  "message": "\"name\" is required"
}
```

<strong>Exemplo caso name seja uma string vazia:</strong>
```
{
  "message": "\"name\" is not allowed to be empty"
}
```

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<details>
<summary>Endpoint GET /categories</summary><br />
Utilizado para retornar as informações de todas as categorias que contém no banco de dados, porém é necessário ter um token para isso.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-get-categories" src="/images-readme/get-categories-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-get-categories" src="/images-readme/get-categories-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não tenha o token e um token invalido.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<details>
<summary>Endpoint POST /post</summary><br />
Utilizado para criar um novo post. Para isso, necessita de um nome, email, senha e uma imagem. Assim como o login, retornará um token caso todas as informações enviadas foram validadas corretamente.

##### Informações necessárias:
* <strong>title:</strong> É o título do post e deve ser enviado como string. É obrigatório.
* <strong>content:</strong> É o conteúdo do post e deve ser enviado como string. É obrigatório.
* <strong>categoryIds:</strong> É um array de números com as categorias ao qual o post pertence e precisa ter pelo menos 1 id de categoria. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-post-post" src="/images-readme/post-post-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-post-post" src="/images-readme/post-post-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplo caso não preencha os requisitos necessários:</strong>
```
{
  "message": "Some required fields are missing"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "\"content\" is required"
}
```

##### Além disso, pode ter os erros do token.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

</details>

<details>
<summary>Endpoint GET /post</summary><br />
Utilizado para retornar as informações de todas as postagens que contém no banco de dados, porém é necessário ter um token para isso.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-get-post" src="/images-readme/get-post-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-get-post" src="/images-readme/get-post-exemplo-saida.png">


#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não tenha o token e um token invalido.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<details>
<summary>Endpoint GET /post/:id</summary><br />
Utilizado para retornar as informações das postagens com o id que está no url que contém no banco de dados, porém é necessário ter um token para isso.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-get-post-id" src="/images-readme/get-post-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-get-post-id" src="/images-readme/get-post-id-exemplo-saida.png">


#### Inserindo informações incorretas
Existem três cenários onde a saída acima pode não ser retornada: caso não exista post com aquele id, não tenha o token e um token invalido.

<strong>Caso não exista post com aquele no banco de dados, o retorno será:</strong>
```
{
  "message": "Post does not exist"
}
```

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<strong>OBS:</strong> Existe o Endpoint GET /search, porém não funciona.

## Utilizando o docker
Para criar os containers, execute: `docker-compose up -d`

Para abrir o terminar do container, execute: `docker exec -it blogs_api bash`

## Instalando Dependências
  `npm install`

## Banco de dados
Para criar o banco de dados, execute: `npm run prestart`

Para popular o banco de dados: `npm run seed`

## Aplicação Node:
Para executar a aplicação e acessar as rotas, execute: `npm run debug`


## Executando Testes
Para rodar todos os testes:

  `npm test`

<!-- 
Para rodar um teste específico:

  `npm test nomeDoArquivo`

exemplo:
`npm test post`


<strong>OBS:</strong> Os testes irão rodar com os testes de cobertura
 -->
