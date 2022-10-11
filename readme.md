#### INSTALL

npm i tailwindcss postcss autoprefixer -D
npm i @apollo/client graphql

#### CMS - Content Management System

- React consome API do CMS

#### GraphQL

Comunicação com API GraphQL ta quebrada (<Home />)
https://app.rocketseat.com.br/plus/lesson/ignite-lab-react-js-or-aula-4-inscricao-via-graph-ql (faltam 20min)

- GraphQL: protocolo de comunicação
  - Recebe informações de varias fontes
  - Back-End for Front-End
  - Diminui gasto (cliente/servidor) por filtar as requisições (vai trazer só o que eu pedir das milhões de infos da API da Marvel rs)
  - Query: buscar dado
  - Mutation: criar alterar excluir
  - GraphCMS - Ferramenta de dados
- APOLLO: conjunto de ferramentas para trabalhar com GraphQL (/lib/apollo.ts => Arquivo de configuração/Comunicação GraphCMS)
  - Apollo server: Criar APIs
  - Apollo client: Conecta o front-end com a API
