import { Pricing } from "../../support/pageObjects/pricing.page";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

const pricingPage = new Pricing();

Given('I open the pricing page', () => {
    cy.visit('http://localhost:8080/pricing.html');
    cy.title().should('include', 'Pricing');
});

When('I enter {string} into number of rentals input', (number) => {
    pricingPage.enterNumberOfRentals(number);
});

Then('I select {string} currency', (currency) => {
    pricingPage.getCurrencySelect().select(currency);
});

Then('I verify that prices are', (table) => {
    table = table.rowsHash();
    pricingPage.verifyPrice(table["starter"], table["professional"], table["ultimate"]);
});

