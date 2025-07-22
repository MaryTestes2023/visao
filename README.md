# Meu Projeto Cypress
Este projeto é uma aplicação vindoura do curso "Cypress, do zero a Nuvem", da escola TALKING ABOUT TESTING.

## 
- [SOBRE-O-PROJETO](#Sobre-o-projeto)
- [FUNCIONALIDADE](Funcionalidade)
- [TECNOLOGIAS-UTILIZADAS](Tecnologias-utilizadas)
- [COMMAND-LINE](Command-line)
- [ERROS-ENCONTRADOS](Erros-encontrados)

 ## Sobre o Projeto
   O projeto consiste em um treinamento relacionado ao curso "Cypress, do zero a Nuvem", da escola TALKING ABOUT TESTING.

 ## Funcionalidade
  A aplicação CAC-TAT simula o envio de mensagen para uma central de atendimento ao cliente

  ## Tecnologias Utilizadas

-   **Frontend:**
    -   HTML5
    -   CSS3
    -   JavaScript (ES6+)
-   **Backend:**
    -   Node.js
-   **Editor de Código:**
    -   Visual Code

 ## Command Line

 # Iniciando um projeto no git

git init

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/MaryTestes2023/visao.git

git push -u origin main

# Comandos para subir as atualizações do projeto

git add .

git commit -m "nome da atualização"

git push -u origin main

# Comandos para descer as atualizações do projeto

git pull origin

## Escrevendo um YML

# ci.yml simples
name: Cypress Tests

on: [push]

jobs:
  cypress-electron-tests:  
    runs-on: ubuntu-latest
    steps:
      - name: Get code
        uses: actions/checkout@v4.2.2

      - name: install dependencies
        run: yarn install

      - name: Run E2E tests
        run: yarn cypress run

# ci.yml com Dispatch

name: Cypress Tests

on:
  workflow_dispatch:
    inputs:
      cli:
        description: Run by cypress command line
        default: yarn cypress run

jobs:
  cypress-electron-tests:  
    runs-on: ubuntu-latest
    steps:
      - name: Get code
        uses: actions/checkout@v4.2.2

      - name: install dependencies
        run: yarn install

      - name: Run E2E tests
        run: ${{ github.event.input.cli }}

# cy.yml cypress cloud

name: Cypress Cloud

on:
  workflow_dispatch:
    inputs:
      spec:
        description: Run by cypress command line
        default: cypress/e2e/*

jobs:
  cypress-e2e-electron:
    runs-on: ubuntu-latest
    steps:
      - name: Get code
        uses: actions/checkout@v4

      - name: Cypress run
        uses: cypress-io/github-action@v6.5.0
        with:
          install-command: yarn install
          browser: electron
          record: true
          group: UI Electron
          spec: ${{ github.event.inputs.spec }}
        env:
          CYPRESS_RECORD_KEY: b586e511-0de4-4ad6-ba26-07c75c4d4381
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

## Erros Encontrados

Um dos erros encontrados ao subir o projeto para o Cypress Cloud, foi o de configuração de permissão de recursos, erro chamado: Resource not accessible by integration.

Como resolver?

Acesse o menu: Settings

Expanda a opção: Actions

Acesse a sub opção: General 

Acesse "Workflow permissions"

Acione a opção: Read and write permissions

Logo após a opção: Allow GitHub Actions to create and approve pull requests

Por fim, acione o botão: "Save"

![setting-git-hub](assets/screenshot.png)