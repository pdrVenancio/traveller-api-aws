// const express = require('express');
// const loginRouter = express.Router();

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();

// const bdPath = path.join(__dirname,'..', '..', 'db','banco-dados-usuario.json');
// const usuariosCadastrados = JSON.parse(fs.readFileSync(bdPath, {encoding: 'utf-8'}));

// loginRouter.post('/', async (req,res) => {

//     const {email, password} = req.body; 
//     for (let user of usuariosCadastrados){
//         if(user.email === email){
//             const passwordValidado = await bcrypt.compare(password, user.password);
//             if(passwordValidado===true){
//                 const tokenAcesso = jwt.sign(user, 'dslbakdjbasldblshdbashdbashdjlsabdhjdblasdbjdbsflhbhwlebrewhjjkfkajdç', { expiresIn: '1h' });
//                 return res.status(200).json(tokenAcesso);
//             }
//             else
//                 return res.status(422).send(`Usuario ou senhas incorretas.`);
//         }   
//     }
//     return res.status(409).send(`Usuario com email ${email} não existe!`);

// });

// module.exports = {loginRouter}
const express = require('express'); 
const loginRouter = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const bdPath = path.join(__dirname, '..', '..', 'db', 'banco-dados-usuario.json');
const usuariosCadastrados = JSON.parse(fs.readFileSync(bdPath, { encoding: 'utf-8' }));

loginRouter.post('/', async (req, res) => {
    const { email, password } = req.body;

    // Verificação de email
    const user = usuariosCadastrados.find(user => user.email == email);
    
    if (!user) {
        console.log(`Email fornecido: ${email} não encontrado!`);  // Log para depuração
        return res.status(419).send(`Usuário com email ${email} não existe! ${user}`);
    }

    // Comparação de senhas
    const passwordValidado = await bcrypt.compare(password, user.password);

    // Log para verificar se a comparação da senha está funcionando
    console.log(`Senha válida: ${passwordValidado}`);

    if (!passwordValidado) {
        console.log(`Senha incorreta para o email: ${email}`);  // Log para depuração
        return res.status(422).send('Usuário ou senha incorretos.');
    }

    // Gerar token JWT se a senha for válida
    try {
        const tokenAcesso = jwt.sign(
            { id: user.id, username: user.username, role: user.role, email: user.email }, 
            'dslbakdjbasldblshdbashdbashdjlsabdhjdblasdbjdbsflhbhwlebrewhjjkfkajdç', // Isso deve ser uma variável de ambiente
            { expiresIn: '1h' }
        );

        console.log(`Usuário autenticado: ${user.email}`);  // Log para depuração

        return res.status(200).json(tokenAcesso);
    } catch (error) {
        console.log('Erro ao gerar o token:', error);  // Log para depuração de erros na geração do token
        return res.status(500).send('Erro ao gerar o token.');
    }
});

module.exports = { loginRouter };
