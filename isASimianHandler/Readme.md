# Guia da aplicação - isSimianHandler

## Estrutura de pastas

├── isASimianHandler                       
    ├── app
        ├── controllers          # Entrada de dados para a camada de regra de negócio e saída para o cliente
    ├── src
        ├── core                   
            ├── config           # Configurações de ferramentas
            ├── models           # Modelo de dados
            ├── services         # Encapsula toda a regra de negócio
            ├── utils            # Regras de negócio em comum entre as partes da aplicação
    ├── test                     # Testes unitários
    ├── index.js                 # Entrada do handler da função lambda
    ├── README.md
    └── package.json             # Arquivo de dependência e informações gerais sobre o projeto

> Foi utilizado a arquitetura de 3 camadas.

## Instalação das dependências
```
$ npm instal
```
## Testes
- **Testes de unidade**
```
$ npm test
```
- **Cobertura de testes**:
```
$ npm run coverage
```
