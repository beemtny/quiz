const puppeteer = require('puppeteer');

var args = process.argv.slice(2,3)[0];

const posNav = {
    "B-INCOMESSF": 2,
    "BM70SSF": 3,
    "BEQSSF": 4,
    "B-FUTURESSF": 5,
}

const getNav = async (posNav) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://codequiz.azurewebsites.net/');
    await page.click('body > input[type=button]');
    var eleNav = `body > table > tbody > tr:nth-child(${posNav}) > td:nth-child(2)`
    await page.waitForSelector(eleNav)
    const nav = await page.$eval(eleNav, e => e.innerHTML)
    
    browser.close();
    
    console.log(nav)
}

if (args != "" && args != undefined) {
    var pos = posNav[args]
    if (pos != "" && pos != undefined) {
        getNav(pos)
    } else {
        console.log("Invalid Fund, Please input again.")
    }
}else {
    console.log("Please input Fund")
}
