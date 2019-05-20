module.exports = async function Browser(user, pass, repo){
    const webdriver = require('selenium-webdriver')
    const driver = new webdriver.Builder().forBrowser('chrome').build()
    await driver.get(`https://github.com/login`)
    await driver.findElement(webdriver.By.name('login')).sendKeys(user)
    await driver.findElement(webdriver.By.name('password')).sendKeys(pass)
    await driver.findElement(webdriver.By.name('commit')).click()
    await driver.get(`https://github.com/${user}/${repo}`)
}