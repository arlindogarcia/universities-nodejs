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

O servidor estará disponível no endereço: `http://localhost:3333`.
