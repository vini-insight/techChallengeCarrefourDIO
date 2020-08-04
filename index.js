const TelegramBot = require('node-telegram-bot-api'); //TELEGRAM
const dialogflow = require('./dialogflow'); //dialogflow
const token = 'TELEGRAMTOKEN'; //TELEGRAM
const bot = new TelegramBot(token, {polling: true}); //TELEGRAM
const mysql = require('mysql');
var mselect = "";

bot.on('message', async function(msg){
    const chatId = msg.chat.id;
    console.log(msg.text);    
    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text); // USA FUNÇÕA EXPORTADA AQUI    
    let responseText = dfResponse.text;
    if(dfResponse.intent == 'livros'){

        const con = mysql.createConnection({
            host: '127.0.0.1', // O host do banco. Ex: localhost
            user: 'root', // Um usuário do banco. Ex: user 
            password: 'root', // A senha do usuário. Ex: user123
            database: 'nodejs' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
        });

        con.connect((err) => {
            if (err) {
                console.log('Erro connecting to database...', err)
                return
            }
            console.log('Connection established!')
        })

        
        con.query(
            //'SELECT b.id, b.title, a.name, a.location FROM book as b INNER JOIN author as a ON b.author = a.id', 
            'SELECT * FROM livros',
            (err, rows) => {
            if (err) throw err

            rows.forEach(row => {
                //console.log(`${row.title} by ${row.name}, ${row.location}`)
                //mselect += `${row.title} by ${row.name}, ${row.location}`
                mselect += `${row.nome}, ${row.descricao}, ${row.preco}\n\n`
            });
            //console.log(mselect)
            bot.sendMessage(chatId, mselect);
        })

        con.end((err) => {
            if(err) {
                console.log('Erro to finish connection...', err)
                return 
            }
            console.log('The connection was finish...')
        })
        mselect = "";

        
    }
    if(dfResponse.intent == 'pais'){
        const con = mysql.createConnection({
            host: '127.0.0.1', // O host do banco. Ex: localhost
            user: 'root', // Um usuário do banco. Ex: user 
            password: 'root', // A senha do usuário. Ex: user123
            database: 'nodejs' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
        });

        con.connect((err) => {
            if (err) {
                console.log('Erro connecting to database...', err)
                return
            }
            console.log('Connection established!')
        })
        con.query(            
            'SELECT * FROM pais',
            (err, rows) => {
            if (err) throw err

            rows.forEach(row => {                
                mselect += `${row.nome}, ${row.descricao}, ${row.preco}\n\n`
            });            
            bot.sendMessage(chatId, mselect);
        })

        con.end((err) => {
            if(err) {
                console.log('Erro to finish connection...', err)
                return 
            }
            console.log('The connection was finish...')
        })
        mselect = "";
    }

    if(dfResponse.intent == 'tvs'){
        const con = mysql.createConnection({
            host: '127.0.0.1', // O host do banco. Ex: localhost
            user: 'root', // Um usuário do banco. Ex: user 
            password: 'root', // A senha do usuário. Ex: user123
            database: 'nodejs' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
        });

        con.connect((err) => {
            if (err) {
                console.log('Erro connecting to database...', err)
                return
            }
            console.log('Connection established!')
        })
        con.query(            
            'SELECT * FROM tvs',
            (err, rows) => {
            if (err) throw err

            rows.forEach(row => {                
                mselect += `${row.nome}, ${row.descricao}, ${row.preco}\n\n`
            });            
            bot.sendMessage(chatId, mselect);
        })

        con.end((err) => {
            if(err) {
                console.log('Erro to finish connection...', err)
                return 
            }
            console.log('The connection was finish...')
        })
        mselect = "";
    }

    if(dfResponse.intent == 'natal'){
        const con = mysql.createConnection({
            host: '127.0.0.1', // O host do banco. Ex: localhost
            user: 'root', // Um usuário do banco. Ex: user 
            password: 'root', // A senha do usuário. Ex: user123
            database: 'nodejs' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
        });

        con.connect((err) => {
            if (err) {
                console.log('Erro connecting to database...', err)
                return
            }
            console.log('Connection established!')
        })
        con.query(            
            'SELECT * FROM natal',
            (err, rows) => {
            if (err) throw err

            rows.forEach(row => {                
                mselect += `${row.nome}, ${row.descricao}, ${row.preco}\n\n`
            });            
            bot.sendMessage(chatId, mselect);
        })

        con.end((err) => {
            if(err) {
                console.log('Erro to finish connection...', err)
                return 
            }
            console.log('The connection was finish...')
        })
        mselect = "";
    }

    if(dfResponse.intent == '/start'){
        bot.sendMessage(chatId, 'Olá! Somos o Carrefour, me diga o que você deseja?');        
    }   

    if(dfResponse.intent == '/help'){
        bot.sendMessage(chatId, 'Sim, nós podemos te ajudar! Basta perguntar precisa');        
    }    
});
