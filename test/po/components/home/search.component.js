const BaseComponent = require("../common/base.component");

class SearchComponent extends BaseComponent{
    constructor(){
        super('.gsc-wrapper');
    }
   
    item(param){
        const selectors = {
            search_result:'a[href="https://cloud.google.com/products/calculator"]',
        };
        return this.rootEl.$(selectors[param]);
    }
}

module.exports = SearchComponent;

