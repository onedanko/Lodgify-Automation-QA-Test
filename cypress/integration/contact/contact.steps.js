import { Contact } from "../../support/pageObjects/contact.page";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

const contactPage = new Contact();

Given('I open the contact page', () => {
    cy.visit('http://localhost:8080/contact.html');
    cy.title().should('include', 'Contact');
});

When('I click on {string} element on contact page', (elementName) => {
    contactPage.getInputByName(elementName).click();
});

When('I enter {string} into {string} element', (text, elementName) => {    
    if(text.includes("testData")){
        text = text.replace("testData.", "");
        cy.fixture('testData').then(function (data) {
            this.data = data;
            contactPage.getInputByName(elementName).type(data[text]);
        })
    }
    else{
        contactPage.getInputByName(elementName).type(text);
    }
});

When('I click on Calendar element on contact page', () => {
    contactPage.getCalendar().click();
});

When('I select {string} for {string} date', (date, action) => {
    if(action === "arrival"){
        date = date.split(" ");
        contactPage.chooseLeftData(date[0], date[1]);
    }
    else{
        date = date.split(" ");
        contactPage.chooseRightData(date[0], date[1]);
    }
});

Then('I check that send button is {string} disabled', (isDisabled) => {
    if(isDisabled === "not"){
        contactPage.getSend().should('not.have.attr', 'disabled');
    }
    else{
        contactPage.getSend().should('have.attr', 'disabled');
    }
});

Then('The {string} time is {string}', (action, date) => {
    if(action === "arrival"){
        contactPage.getArrivalInput().should('have.value', date);
    }
    else{
        contactPage.getDepartureInput().should('have.value', date);
    }
});

Then('I verify that these elements are mandatory', (table) => {
    table = table.rows();
    table.forEach(element => {
        contactPage.getIsMandotoryMessageByName(element).should('be.visible');
    });    
});

