async function start(){
    const {user, pass, repo} = require('./robots/input')
    const browser = require('./robots/browser')
    await browser(user, pass, repo)
}
start()
