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
            break
        } catch (error) {
            console.log('First error')
        }
    }
    while(true){
        try {
            await driver.findElement(webdriver.By.className('btn btn-primary BtnGroup-item js-pull-request-button')).click()
            break
        } catch (error) {
            console.log('Second error')
        }
    }
    while(true){
        try {
            await driver.findElement(webdriver.By.className('btn btn-primary BtnGroup-item js-details-target')).click()
            break
        } catch (error) {
            console.log('Last error')
        }
    }
    
}
module.exports = Browser