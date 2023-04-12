# API com NestJS, PostgreSQL e Docker com autenticação JWT.  


## :fleur_de_lis: Conceitos das ferramentas utilizadas:  

* Node é um runtime, que nada mais é do que um conjunto de códigos, API's, ou seja, são bibliotecas responsáveis pelo tempo de execução (é o que faz o seu programa rodar) que funciona como um interpretador de JavaScript fora do ambiente do navegador.  

* Nest.js é um conjunto de ferramentas que ajuda os desenvolvedores a criar aplicativos web em Node.js usando TypeScript. Ele oferece recursos avançados para tornar o desenvolvimento mais rápido e eficiente, e a manutenção mais fácil ao longo do tempo.  

* PostgreSQL é um banco de dados objeto-relacional (sem relação com linguagens de programação orientadas a objetos), em que cada coisa criada é tratada como um objeto, tais como bancos de dados, tabelas, views, triggers, etc.  

* Docker é uma forma de virtualizar aplicações no conceito de “containers”, trazendo da web ou de seu repositório interno uma imagem completa, incluindo todas as dependências necessárias para executar sua aplicação.  

* Docker Compose é uma ferramenta do Docker usada para executar aplicativos de vários containers. Com um comando, através do arquivo YAML é possível criar todos os serviços de configuração: services, volumes e a rede do aplicativo.  

* Prisma é uma ferramenta de mapeamento objeto-relacional que simplifica o trabalho com bancos de dados SQL em aplicativos modernos. Ele oferece uma interface fácil de usar para consultar e manipular bancos de dados usando uma linguagem de consulta tipada e suporta recursos avançados, como migrações de banco de dados e caching de consultas.  

* JWT "JSON Web Token" (Token Web JSON, em português) é um formato padrão de token que é usado para representar informações de forma segura entre duas partes, geralmente um servidor e um cliente.    
 
 
  
## 📋 Pré-requisitos
> Ter o NodeJS, npm, Docker e Docker Compose instalados em seu computador.


## 🔧 Instalação
NodeJS  
> https://nodejs.org/en/  
> **Observação:** No NodeJS o npm já vem instalado, para conferir digite 'npm -v' em seu terminal.

Docker
> https://docs.docker.com/engine/install/

Docker Compose
> https://docs.docker.com/compose/install/linux/  
> **Observação:** No Docker Desktop o Docker Compose já vem instalado para conferir digite 'docker compose version' em seu terminal.


## 🚀 Comandos
### Instalação
```
npm i @nestjs/jwt @nestjs/passport passport passport-jwt
```
```
npm install
```
### Inicialização
```
docker-compose up -d
```
```
npm run start:dev
```
