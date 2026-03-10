import conexao from '../../../infra/conexao.js'

class SelecaoRepository {
    consulta(sql, valores ='', mensagemReject = 'Erro ao executar a consulta') {
        return new Promise((resolve, reject ) => {
            conexao.query(sql, valores, (erro, resultado) => {
                if (erro) return reject(mensagemReject)
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    create(selecao) {
        const sql = "INSERT INTO dbselecao.dbcopa SET ?;"
        return this.consulta(sql, selecao, 'Não foi possivel cadastrar a seleção')
    }

    findAll() {
        const sql = "INSERT INTO dbselecao.dbcopa SET ?;"
        return this.consulta(sql, '', 'Não foi possivel listar as seleções')
    }

    findById(id) {
        const sql = "SELECT * FROM dbselecao.dbcopa SET ? WHERE id=?;"
        return this.consulta(sql, id, 'Não foi possivel localizar a seleção')
    }

    update(selecao, id) {
        const sql = "UPDATE dbselecao.dbcopa SET ? WHERE id=?;"
        return this.consulta(sql, [selecao, id], 'Não foi possivel atualizar a seleção')
    }

    delete(id) {
        const sql = "DELETE FROM dbselecao.dbcopa WHERE id=?;"
        return this.consulta(sql, id, 'Não foi possivel deletar a seleção')
    }
}

export default new SelecaoRepository()
