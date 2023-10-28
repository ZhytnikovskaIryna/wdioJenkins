const BaseComponent = require("../common/base.component");

class CalculatorFormComponent extends BaseComponent{
    constructor(){
        super('.ng-scope');
    }

   // get cancelButton(){
   //     return this.rootEl.$(".e-cancel");
   // }
    input(param){
        const selectors = {
            instances:"#input_99",
            threadsPerCore:"#select_233",
            oneThreadPerCore: "#select_option_306",
        };
        return this.rootEl.$(selectors[param]);
    }

    frame(param){
        const selectors = {
            parentFrame:"[src='https://cloud.google.com/frame/products/calculator/index_d6a98ba38837346d20babc06ff2153b68c2990fa24322fe52c5f83ec3a78c6a0.frame']",
            instanceFrame: "[id='myFrame']"

        };
        return $(selectors[param]);
    }
}

module.exports = CalculatorFormComponent;

