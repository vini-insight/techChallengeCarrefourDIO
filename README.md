# techChallengeCarrefourDIO
techChallengeCarrefourDIO

Jairo Vinicius (viniciusvieira.eu@gmail.com)

1 - Para que este projeto funcione, você vai precisar das seguintes dependências usando NPM:

node telegram bot api 0.50.0

dialogflow 1.2.0

mysql 2.18.1

2 - inserir o token do telegram na linha 3 do arquivo de código "index.js" (o trecho do código segue a abaixo):

const token = 'TELEGRAMTOKEN';

3 - você vai precisar baixar as credencias de aplicativo google fornecida em formato JSON. Este arquivo deve estar na mesma pasta do arquivo "dialogflow.js". Depois você deve renomear o arquivo baixado para "v-f-t-bot.json" para ser lido pelo comando que acontece na linha 2 do arquivo "dialogflow.js" (o trecho do código segue a abaixo):

const configs = require('./v-f-t-bot.json');

4 - basta executar o arquivo "index.js" pelo terminal ou na IDE de sua preferência, mas precisa estar conectado a internet para tudo funcionar.
