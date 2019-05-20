async function Browser(user, pass, repo){
    const webdriver = require('selenium-webdriver')
    const driver = new webdriver.Builder().forBrowser('chrome').build()
    await driver.get(`https://github.com/login`)
    await driver.findElement(webdriver.By.name('login')).sendKeys(user)
    await driver.findElement(webdriver.By.name('password')).sendKeys(pass)
    await driver.findElement(webdriver.By.name('commit')).click()
    await driver.get(`https://github.com/${user}/${repo}`)
    while(true){
        try {
            await driver.findElement(webdriver.By.className('btn btn-sm btn-primary float-right')).click()
            await driver.findElement(webdriver.By.className('btn btn-primary BtnGroup-item js-pull-request-button')).click()
            await driver.findElement(webdriver.By.className('btn btn-primary BtnGroup-item js-details-target'))
            break
        } catch (error) {
            console.log('Some error')
        }
    }
    
}
module.exports = Browser