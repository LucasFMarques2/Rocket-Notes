# Projeto de criação de notas

Este projeto foi realizado como parte de um desafio da RocketSeat para a criação de uma aplicação notas. A aplicação foi desenvolvida utilizando React com Vite no front-end e Node.js no back-end, com integração de APIs utilizando Axios.

## Tecnologias Utilizadas

- **Front-end**: React + Vite
- **Back-end**: Node.js
- **Integração de API**: Axios
- **Estilização**: Styled-componets.css
- **Gerenciamento de Pacotes**: NPM
- **Ícones**: React-icons

## Funcionalidades

- CRUD de usuários
- CRUD de notas
- Integração com uma API para obter dados dos usuários.
- Persistência do contador em armazenamento local.


## Deploy

A aplicação está disponível em: [Notes]([https://corebiz-six.vercel.app/](https://notesrocket.vercel.app/))

## Instruções para Execução Local

Para executar a aplicação em sua máquina local, siga os seguintes passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/LucasFMarques2/Rocket-Notes
2. Abra a pasta Corebiz com a sua IDE de preferência (recomendado Visual Studio Code).
6. Certifique-se de que o Node.js está instalado em sua máquina.
3. Instale as dependências do projeto:
   ```bash
   npm install
7. Para iniciar a aplicação, execute o seguinte comando:
    ```bash
     npm run dev
#Estrutura do Projeto
--Frontend: Localizado na pasta src, contendo componentes React, estilos e integração de API.

Desenvolvido por Lucas Freitas Marques baseado no layout do [Figman](https://www.figma.com/design/6lnVpuVyI798JJFCH8qZkq/RocketNotes-(Copy)?node-id=0-1)

# Package.json

- name": "RocketNotes"
- "private": true
- "version": "0.0.1"
- "type": "module"

## scripts:
- "dev": "vite"
- "build": "vite build"
- "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
- "preview": "vite preview"

## dependencies:
- "axios": "^1.7.2",
- "react": "^18.3.1",
- "react-dom": "^18.2.0"
- "react-icons": "^5.2.1"
- "react-router-dom": "^6.23.0"
-  "styled-components": "^6.1.8"

## devDependencies:
- "@types/react": "^18.3.3"
- "@types/react-dom": "^18.3.0"
- "@vitejs/plugin-react": "^4.3.1"
- "vite": "^5.3.1"

Este README inclui uma descrição do projeto, as ferramentas utilizadas, as instruções de instalação e configuração, como rodar o projeto e as versões das depedencias com o `package.json`.
