async function start(){
    const {user, pass, repo} = require('./input')
    const browser = require('./browser')
    await browser(user, pass, repo)
}
start()