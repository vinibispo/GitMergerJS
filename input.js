const read = require('readline-sync')
const user = read.question('Digite seu nome de usuário: ')
const pass = read.question('Digite sua senha: ')
const repo = read.question('Digite o nome do seu repositório: ')
module.exports = {
    user,
    pass,
    repo
}