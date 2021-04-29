# Guia da aplicação

Essa aplicação foi construída utilizando JavaScript rodando na plataforma Node.JS.

## Infraestrutura

![alt text](./architecture/serverless.png "Serverless Architecture")

> A aplicação foi construída no modelo Serverless na plataforma Amazon Web Services (AWS).
> Essa decisão foi tomada para evitar custos, facilitar a entrega e dar maior visibilidade para as etapas do desafio.

Temos a divisão da aplicação entre 2 rotas no API Gateway, 3 Lambdas e 1 fila.

### Lambdas
- [isASimianHandler](https://github.com/dougbatista/simions_test/tree/main/isASimianHandler): Cuida de todas as regras relacionadas de validação das matrizes. Também envia os resultados obtidos por fila para o lambda que cuidará da inserção.
- [dnaStoreHandler](https://github.com/dougbatista/simions_test/tree/main/dnaStoreHandler): Responsável por receber os dados via fila do lambda isASimianHandler e realizar a inserção na base de dados.
- [dnaStatsHandler](https://github.com/dougbatista/simions_test/tree/main/dnaStatsHandler): Responsável por obter os dados inseridos pelo [dnaStatsHandler](./dnaStatsHandler) e gerar as estátisticas dos DNAS.










