//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("src/database/database.db")

module.exports = db
//utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
    //com comandos SQL:
    //1-criar uma tabela
    /*db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2-inserir dados na tabela
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const values = [
        "Papersider",
        "http://localhost:3000/wallpapers/papel.jpg",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ]

    function afterInsertData(err) {
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    } 

    db.run(query, values, afterInsertData)

    //3-consultar dados da tabela
    //db.all(`SELECT name FROM places`, function(err, rows) {
    //    if(err){
    //        return console.log(err)
   //     }

   //     console.log("Aqui estão seus registros: ")
   //     console.log(rows)
    //})
    */
    //4-deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [10], function(err) {
        if(err){
            return console.log(err)
        }
    
        console.log("Registro deletado com sucesso!")
    })

})