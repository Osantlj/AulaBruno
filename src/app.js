import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'
const app = express()

// ler como formato json
app.use(express.json())

app.get('/selecoes', SelecaoController.index)

app.post('/selecoes', SelecaoController.store)

app.get('/selecoes/:id', SelecaoController.show)

app.put('/selecoes/:id', SelecaoController.update)

app.delete('/selecoes/:id', SelecaoController.delete)

export default app





























// import express from "express";
// import conexao from "../infra/conexao.js";
// // // //MOCK
// // // const selecoes = [
// // //     { id: 1, selecao: "Brasil", grupo: "G" },
// // //     { id: 2, selecao: "Suíça", grupo: "G" },
// // //     { id: 3, selecao: "Camarões", grupo: "G" },
// // //     { id: 4, selecao: "Sérvia", grupo: "G" }
// // // ];

// // function buscaIndexSelecao(id) {
// //     return selecoes.findIndex(selecao => selecao.id == id);
// // }

// // function buscaSelecao(id) {
// //     return selecoes.find(selecao => selecao.id == id);
// // }

// const app = express();

// app.use(express.json());

// //Criando uma rota padrao(ou raiz) testar o funcionamento do servidor
// // app.get("/", (req, res) => {
// //     res.send("Hello World!");
// // });

// app.get("/selecoes", (req, res) => {
//     // res.status(200).send(selecoes);
//     const sql = "SELECT * FROM dbselecao.dbcopa";
//     conexao.query(sql, (erro, resultados) => {
//         if (erro) {
//             console.log(erro);
//         } else {
//             res.status(200).json(resultados);
//         }
//     })
// });

// app.post("/selecoes", (req, res) => {
//     selecoes.push(req.body);
//     res.status(201).send("Seleção cadastrada com sucesso!");
// });

// app.get("/selecoes/:id", (req, res) => {
//     // res.json(buscaSelecao(req.params.id))
//     const sql = "SELECT * FROM dbselecao.dbcopa WHERE id = ?;"
//     conexao.query(sql, [req.params.id], (erro, resultados) => {
//         if (erro) {
//             console.log(erro);
//         } else {
//             res.status(200).json(resultados);
//         }
//     })
// });

// app.delete("/selecoes/:id", (req, res) => {
//     const id = req.params.id;
//     const sql = "DELETE FROM dbselecao.dbcopa WHERE id=?;";
//     conexao.query(sql, id, (erro, resultados) => {
//         if (erro) {
//             console.log(erro);
//         } else {
//             res.status(200).json(resultados);
//         }
//     });
// });

// app.put("/selecoes/:id", (req, res) => {
//     const id = req.params.id;
//     const selecao = req.body;
//     const sql = "UPDATE dbselecao.dbcopa SET ? WHERE id=?;";
//     conexao.query(sql, [selecao, id], (erro, resultados) => {
//         if (erro) {
//             console.log(erro);
//         } else {
//             res.status(200).json(resultados);
//         }
//     });
// });

// export default app;



