require('cypress-xpath');

export class Pricing {
    getCurrencySelect(){
        return cy.xpath("//select[contains(@class,'price-currency-select')]");
    }
    
    getInputNumberOfRentals() {
        return cy.get('#scroll-prop-plan');
    }
    
    getStarterPrice(price){
        return cy.xpath(`//div[contains(@class,'starter')]/div/div[contains(.,'${price}')]`);
    }

    getProfessionalPrice(price){
        return cy.xpath(`//div[contains(@class,'pro')]//h6[contains(text(),'Professional')]/following-sibling::div[contains(.,'${price}')]`)
    }

    getUltimatePrice(price){
        return cy.xpath(`//div[contains(@class,'pro')]//h6[contains(text(),'Ultimate')]/following-sibling::div[contains(.,'${price}')]`)
    }

    enterNumberOfRentals(text) {
        this.getInputNumberOfRentals().type('{backspace}'+text);
    }

    verifyPrice(starter, professional, ultimate) {
        this.getStarterPrice(starter).should('be.visible');
        this.getProfessionalPrice(professional).should('be.visible');
        this.getUltimatePrice(ultimate).should('be.visible');
    }
}
