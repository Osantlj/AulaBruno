import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port:  '3307',
    user: 'root',
    password:'',
    database:'dbselecao'
})

export default conexao