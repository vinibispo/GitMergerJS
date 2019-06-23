async function robot(user, pass, repo){
    await Browser(user, pass, repo)
}
async function Browser(user, pass, repo){
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await login(user, pass, page)
    await page.waitFor(2000)
    await findRepo(user, repo, page)
    await page.waitFor(2000)
    await compareRepo(page)
    await page.waitFor(2000)
    await pullRequest(page)
    await mergeRepo(page)
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
async function compareRepo(page){
    const compareButton = await page.waitForSelector('a.btn')
    await compareButton.click()
}
async function pullRequest(page){
    const pullReqBtn = page.waitForSelector('button.BtnGroup-item')
    await pullReqBtn.click()
}
async function mergeRepo(page){
  const mergeBtn = await page.waitForSelector('.merge-message > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)')
  await mergeBtn.click()
  const confirmMerge = await page.waitForSelector('.commit-form-actions > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)')
  await confirmMerge.click()
  const delBch = page.waitForSelector('#partial-pull-merging > form > div > div> button')
}
module.exports = robot
