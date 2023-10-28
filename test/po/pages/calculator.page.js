const BasePage = require("./basepage");
const {CalcForm}=require('./../components');

class CalculatorPage extends BasePage{
   constructor(){
     // super("https://cloud.google.com/");
      super("https://cloud.google.com/products/calculator");
      this.calcForm = new CalcForm();    
   }
   async switchFrame(frame){
      const iframe = await this.calcForm.frame(frame);
      await browser.switchToFrame(iframe);
    }

}

module.exports = CalculatorPage;
