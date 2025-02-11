const express = require('express');
const { sincronizarBanco } = require('./sync')
const { criarUsuarios } = require('./create')
const { listarUsuarios } = require("./read");
const { deletarUsuarioPorId } = require('./delete');


const app = express()

app.use(express.json())

//req = request // res = response
//devolve o status com a mensagem em JSON
app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'Hello World'
    })
})

//criação dos usuários
app.post('/usuarios', (req, res) => {
    // body => corpo da requisição
    criarUsuarios(
        req.body.nome,
        req.body.email,
        req.body.idade,
        req.telefone
    ).then (() => {
        res.status(200).json({
            mensagem: 'Hello World'
        })
    }).catch((error) => {
        res.status(500).json({
            error
        })
    })

})

//lista todos os usuários do banco (usando asyn/await)
app.get('/usuarios', async (req, res) => {
    const usuarios = await listarUsuarios()

    res.status(200).json({
        usuarios
    })
})

// deleta o usuário pelo ID
// app.delete('/usuarios/:id', async (req, res) => {
//     try {
//         //busca pelo ID na requisição
//         const id = req.params.id;

//         // Verifica se o usuário existe antes de deletar
//         const usuarioExistente = await listarUsuarios(id);
//         if (!usuarioExistente) {
//             return res.status(404).json({ mensagem: 'Usuário não encontrado' });
//         }

//         await deletarUsuarioPorId(id);
//         res.status(200).json({ mensagem: 'Usuário deletado com sucesso' });
//     } catch (error) {
//         console.error("Erro ao deletar usuário:", error);
//         res.status(500).json({ mensagem: 'Erro ao deletar usuário' });
//     }
// });

sincronizarBanco()
    .then(() => {
        app.listen(3000, () => {
            console.log('Aplicação rodando')
        })
    })