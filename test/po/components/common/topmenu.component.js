const BaseComponent = require("./base.component");

class TopMenuComponent extends BaseComponent{
    constructor(){
        super('.ZUAiPc');
    }
    get inputSearch(){
        return this.rootEl.$(' [name="q"]');
    }
    
    item(param){
        const selectors = {
            search:'.E65gw',
            inputSearch:'.mb2a7b'
        }
        return this.rootEl.$(selectors[param]);
    }
}

module.exports = TopMenuComponent;

