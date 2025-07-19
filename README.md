# Meu Projeto Cypress
Este projeto é uma aplicação vindoura do curso "Cypress, do zero a Nuvem", da escola TALKING ABOUT TESTING.

## 
- [SOBRE-O-PROJETO](#Sobre-o-projeto)
- [FUNCIONALIDADE](Funcionalidade)

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

 ## command line

 # iniciando um projeto no git

git init

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/MaryTestes2023/visao.git

git push -u origin main

# comandos para subir as atualizações do projeto

git add .

git commit -m "nome da atualização"

git push -u origin main

# comandos para descer as atualizações do projeto

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