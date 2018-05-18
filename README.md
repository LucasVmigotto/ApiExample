# api-example

Um projeto que mostra exemplos de APIs construídas com maneiras, tecnologias e recursos diferentes. Atualmente contando com:

* [JavaScript](https://goo.gl/yUCHeG)
* [NodeJs](https://goo.gl/nZ9eqf)
* [TypeScript](https://goo.gl/U1TWdw)
* [Vue](https://goo.gl/rgKjAa)
* [GraphQL](https://goo.gl/zNKvVA)

APIs disponíveis até o momento:

* Branch [JavaScript + NodeJs](https://goo.gl/pxm1EU)
* Branch [TypeScript + NodeJs](https://goo.gl/5D9Bny)
* Branch [JavaScript + NodeJs + Vue](https://goo.gl/C8WJjo)
* Branch [JavaScript + NodeJs + GraphQL](https://goo.gl/aWqWQp)

## Desenvolvimento

1. Clone o repositório.

    ```bash
    git clone https://github.com/LucasVmigotto/api-example.git
    ```

2. Entre no diretório do projeto

    ```bash
    cd api-example
    ```

3. Escolha a branch com a API desejada.

    ```bash
    git checkout <nome da branch>
    ```

### JavaScript + NodeJs

1. Instale os _node modules_

    ```bash
    npm install
    ```

2. Suba o serviço.

    ```bash
    npm start
    ```

    > Irá subir o serviço em localhost:8000

### TypeScript + NodeJs

1. Instale os _node modules_

    ```bash
    npm install
    ```

2. Suba o serviço.

    ```bash
    npm start
    ```

    > Irá subir o serviço em localhost:8000

### JavaScript + NodeJs + Vue

1. Instale os _node modules_

    ```bash
    npm install
    ```

2. Suba o serviço

    ```bash
    npm start
    ```

    > Simultaneamente irá executar o NodeJs em localhost:8000 e o Vue em localhost:8080 (este último em modo de desenvolvimento)

### JavaScript + NodeJs + GraphQL

1. Instale os _node modules_

    ```bash
    npm install
    ```

2. Suba o serviço

    * Sem interface de teste

    ```bash
    npm start
    ```

    > A API estará disponível em localhost: 8000

    * Com interface de teste

    ```bash
    npm run start:dev
    ```

    > A API estará disponível com a interface em localhost:8000/user

#### Como realizar a consulta

Para utilizar a consulta com o GraphQL a forma de requisição é diferente do padrão REST. Neste caso todas as ações podem ser realizadas com o verbo _POST_, passando a _Query_ ou _Mutation_ no corpo da requisição. Podemos também usar o verbo _GET_, passando então diretamente na URL.

1. _POST_

    Requisição: localhost:8000/user

    > Query
    ```text
    query{
        list{
            id
            name
            ...
        }
    }
    ```

      > Mutation

    ```text
    mutation{
        create(name:"Jonh Doe", email:"example@mail.com",){
            id
            name
            ...
        }
    }
    ```

2. _GET_

    Estrutura inicial: localhost:8000/user?query= ***&#60;requisição&#62;***

    Exemplo de uma requisição para **query**:
    query{%20list{%20name%20email%20}}

    Exemplo de uma requisição para **mutation**:
    mutation%7Bcreate(name%3A"John%20Doe"%2Cemail%3A"example%40mail.com")%7Bid%20name%7D%7D