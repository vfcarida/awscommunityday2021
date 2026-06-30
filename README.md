# AWS Community Day Brasil 2021 🚀

![Status](https://img.shields.io/badge/Status-Modernizado-brightgreen)
![Build](https://img.shields.io/badge/Build-Vite-blueviolet)
![Test](https://img.shields.io/badge/Test-Vitest-yellow)
![Tech](https://img.shields.io/badge/Tech-Vanilla%20JS%20%7C%20Vanilla%20CSS-orange)

## 📌 Overview
O **AWS Community Day Brasil 2021** é um repositório voltado para a landing page do evento comunitário oficial. Originalmente construído com bibliotecas obsoletas como jQuery e Bootstrap 3, este projeto foi inteiramente modernizado para garantir alta performance, legibilidade e manutenibilidade.

As principais inovações técnicas incluem a adoção de **Vanilla JS (ES6+)** e **Vanilla CSS**, eliminando o acoplamento excessivo e a dívida técnica herdada de frameworks legados. A estrutura foi reescrita seguindo as melhores práticas de Engenharia de Software voltadas para um ambiente didático e coeso, sendo suportado por um ecossistema moderno baseado no bundler **Vite** e contando com suíte de testes unitários através do **Vitest**.

## 🏗 Arquitetura do Projeto

O fluxo de processamento e interação segue um modelo estático moderno, centralizado em um bundler rápido:

```mermaid
graph TD
    A[index.html] -->|Carrega| B(stylesheets/style.css)
    A -->|Carrega| C(stylesheets/mystyles.css)
    A -->|Importa| D(js/site.js - Vanilla JS Modules)
    
    E[Vite Bundler] -->|Dev Server| A
    E -->|Build Otimizado| F[Dist/ Produção]
    
    G[Vitest JSDOM] -->|Testa Manipulação DOM| D
```

## ⚙️ Guia de Instalação e Execução

Siga as instruções abaixo para executar o projeto localmente:

1. **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. **Instalação das dependências:**
   ```bash
   npm install
   ```
3. **Executando o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```
   > O Vite irá iniciar um servidor local (geralmente em `http://localhost:5173/`) com Hot Module Replacement (HMR).

4. **Executando os Testes (QA):**
   ```bash
   npm run test
   ```

5. **Gerando Build de Produção:**
   ```bash
   npm run build
   ```

## 🧠 Boas Práticas Adotadas (Didática)
- **Desacoplamento:** O comportamento JS foi totalmente separado em funções isoladas em `js/site.js` para manipulação de eventos (Clean Code).
- **Independência Visual:** CSS Grid e Flexbox nativos substituíram classes do Bootstrap, promovendo maior controle e leveza.
- **Internacionalização no Código:** Nomenclatura de métodos e variáveis mantidas no inglês internacional (ex: `initializeNavigation()`), enquanto os comentários didáticos e documentação estão em português brasileiro.
