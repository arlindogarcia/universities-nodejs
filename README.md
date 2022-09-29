## Rodando a aplicação
Faça um clone deste repositório e instale no seu ambiente de desenvolvimento
```
https://github.com/arlindogarcia/bis2bis-universities.git
```

Após clonar o conteúdo, acesse o diretório e execute o comando para a instalação das dependências
```
yarn
```

Renomeie o arquivo `.env.example` para `.env`, no ubuntu utilize o comando mv

Executar a aplicação em ambiente de desenvolvimento: `yarn dev`.

Executar a aplicação em ambiente de produção: `yarn build`.

Para executar a aplicação no ambiente de produção, execute:
```
node dist/shared/http/server.js
```

O servidor estará disponível no endereço: `http://endereco_ip:3333`. Porta 3333.

## Rotas da aplicação

Todas as rotas retornam dados e são enviados dados no body em formato JSON

## Rota de listagem - Método GET
```
_base_url/universities

```
Query String `?country=&page=&limit=`
  - page = especificar qual página quer o retorno dos dados, padrão 1
  - limit = especificar quantos registros a api deve retornar por página, padrao 20

## Rota de visualização - Método GET
```
_base_url/universities/id

```
Request param: id
  - id = Id do registro que precisa na busca

## Rota de criação - Método POST
```
_base_url/universities

```
Request Body (JSON)
  - alpha_two_code = String, Tamanho máximo 2, obrigatório
  - web_pages = Array de string, mínimo 1 item, origatório
  - name = String, obrigatório
  - country = String, obrigatório
  - domains = Array de string, mínimo 1 item, obrigatório
  - state_province = String, não obrigatório

Example:
```
{
  "alpha_two_code": "PR",
  "web_pages": [
    "http://teste.com.br",
  ],
  "name": "University Norte do Brasil",
  "country": "Brasil",
  "domains": [
    "teste.com.br"
  ],
  "state_province": "PR"
}
```

## Rota de atualização - Método PUT
```
_base_url/universities/id

```
Request param: id
  - id = Id do registro que irá ser atualizado

Request Body (JSON)
  - web_pages = Array de string, mínimo 1 item, origatório
  - name = String, obrigatório
  - domains = Array de string, mínimo 1 item, obrigatório

Example:
```
{
  "web_pages": [
    "http://teste.com.br",
  ],
  "name": "University Norte do Brasil",
  "domains": [
    "teste.com.br"
  ],
}
```

## Rota de visualização - Método DELETE
```
_base_url/universities/id

```
Request param: id
  - id = Id do registro que irá ser deletado
