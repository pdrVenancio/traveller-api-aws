# Trabalho Traveller

O projeto consiste em um site para compra de passagens de avião para diversos lugares utilizando um mapa para encontrar os lugares disponíveis.


A página inicial é uma tela de login, com possibilidade de cadastro de novos usuários. Usamos um token de autenticação para garantir segurança de senhas e outras informações pessoais.


Ao entrar no site, um mapa interativo surge, com diversos pontos marcados. Ao clicar em um ponto, uma tela de compra de passagens para esse local irá surgir, e o cliente pode comprar quantas passagens quiser.


Alternativamente, caso entre como um administrador, o usuário pode realizar um CRUD com os locais no mapa, ou seja, adicionar locais novos, atualizar locais já existentes, e deletar locais desnecessários.

Para logar como adm use: Email: adm@gmail.com senha: 1234

Para logar como usuario basta se cadastrar! Lembrando que voce pode usar dados ficticios sem problemas!

# Problema solucionado

O problema solucionado pelo código seria encontrar passagens para lugares através de um mapa, o que facilita a geolocalização do usuário para encontrar o destino mais apropriado

# Porque o problema é importante?

O site facilita a compra de passagens já que exibe em um mapa a exata localização dos lugares que possuem passagens disponíveis

# Como rodar o projeto

Em ambas pastas *Back* e *Front*, algum módulos precisam ser instalados usando o npm.

1. Certifique-se que seu computador possui a versão mais recente do nvm instalada. Você pode instalar o nvm seguindo as instruções presentes [neste link](https://github.com/nvm-sh/nvm?tab=readme-ov-file#important-notes).
2. Entrando na pasta Front, rodar o comando `npm i` na pasta Front e na pasta Back.
3. Para rodar o front use `npm run dev`  para rodar o back use `nodemon app.js` assim as funcionalidades do site ja estaram ativas!
