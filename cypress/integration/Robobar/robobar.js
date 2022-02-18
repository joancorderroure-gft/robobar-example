import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then} from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";

//Functions
    function colaButton() {
        return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn');
    }

   function beerButton() {
        return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn');
    }

   function wineButton() {
        return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn');
    }

   function totalText() {
        return cy.get(':nth-child(4) > .ng-binding');
    }

   function checkOut() {
        return cy.get('.col-12 > .btn');
    }

   function ageInput() {
        return cy.get('#ageInput');
    }

   function orderButton() {
        return cy.get('.btn-success');
    }

   function confirmText() {
            return cy.get('p');
    }

   function alertAge() {
        return cy.get(':nth-child(2) > :nth-child(1) > .alert');
    }

//Stuff

const url = 'http://localhost:3000/'
Given('user opens robobar website', () => {
    cy.visit(url)
})

When('user adds a cola', () => {
    colaButton().click();
})


Then('total should be {string}', (total) => {
    totalText().should("contain.text", total);
})

When('user adds a beer', () => {
    beerButton().click();
})

When('user adds {int} cola', (n) => {
    for(let i=0; i<n; i++) {
        colaButton().click();
    }
})


Then('total should be €{float}', (total) => {
    totalText().should("contain", "€"+total);
})


/*Then('total should be €{float}', (price)=>{
    cy.get(':nth-child(4) > .ng-binding')
        .should('contain', "€" + price)
})*/

