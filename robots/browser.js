async function robot(user, pass, repo){
    await Browser(user, pass, repo)
}
async function Browser(user, pass, repo){
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await login(user, pass, page)
    await findRepo(user, repo, page)
}
async function login(user, pass, page){
    await page.goto('https://github.com/login', {waitUntil: 'networkidle2'})
    const username =await page.waitForSelector('input#login_field')
    await username.type(user)
    const password = await page.waitForSelector('input#password')
    await password.type(pass)
    const buttonLogin = await page.waitForSelector('input.btn')
    await buttonLogin.click()
}
async function findRepo(user, repo, page){
    await page.goto(`https://github.com/${user}/${repo}`, {waitUntil: 'networkidle2'})
}
module.exports = robot
