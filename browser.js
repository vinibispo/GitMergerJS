async function Browser(user, pass, repo){
    const webdriver = require('selenium-webdriver')
    const driver = new webdriver.Builder().forBrowser('chrome').build()
    while(true){
        try {
            await driver.get(`https://github.com/login`)
            await driver.findElement(webdriver.By.name('login')).sendKeys(user)
            await driver.findElement(webdriver.By.name('password')).sendKeys(pass)
            await driver.findElement(webdriver.By.name('commit')).click()
            break
        } catch (error) {
            console.log('Login error')
        }
    }
    
    while(true){
        try {
            await driver.get(`https://github.com/${user}/${repo}`)
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
            console.log('Third error')
        }
    }
    while (true) {
        try {
            await driver.findElement(webdriver.By.className('btn btn-primary BtnGroup-item js-merge-commit-button')).click()
            break
        } catch (error) {
            console.log('Fourth error')
        }
    }
    while (true) {
        try {
            await driver.findElement(webdriver.By.className('btn float-right')).click()
            break
        } catch (error) {
            console.log('Last error')
        }
        console.log('Sucessful')
    }
    
}
module.exports = Browser