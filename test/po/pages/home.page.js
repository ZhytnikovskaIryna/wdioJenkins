const BasePage = require("./basepage");
const {Search}=require('./../components');

class HomePage extends BasePage{
   constructor(){
      super("https://cloud.google.com/");
      this.search = new Search();

   }
}

module.exports = HomePage;