import app from "./src/app.js";
import conexao from "./infra/conexao.js";

const port = 3000;

//realizando a conexao
conexao.connect((erro) => {

    if (erro) {
        console.log("Erro na conexão")
    } else {
        console.log("Conectado com sucesso")
        //escutando a porta
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    }
});




