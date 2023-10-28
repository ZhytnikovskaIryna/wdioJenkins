const HomePage = require("./home.page");
const CalculatorPage = require("./calculator.page");

/**
 * @param name {'home'|'calc'} 
 * @returns {HomePage|CalculatorPage}
 */
function pages(name){
    const items ={
        home: new HomePage(),
        calc: new CalculatorPage(),
    }
    return items[name.toLowerCase()];
}

module.exports = {
    HomePage,
    CalculatorPage,
    pages
}