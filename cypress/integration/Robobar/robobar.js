import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then} from "cypress-cucumber-preprocessor/steps" 
import { When } from "cypress-cucumber-preprocessor/steps"

//Functions
 colaButton() {
        return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn');
    },

    beerButton() {
        return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn');
    },

    wineButton() {
        return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn');
    },

    totalText() {
        return cy.get(':nth-child(4) > .ng-binding');
    },

    checkOut() {
        return cy.get('.col-12 > .btn');
    },

    ageInput() {
        return cy.get('#ageInput');
    },

    orderButton() {
        return cy.get('.btn-success');
    },

    confirmText() {
            return cy.get('p');
    },

    alertAge() {
        return cy.get(':nth-child(2) > :nth-child(1) > .alert');
    }

//Stuff

const url = 'http://localhost:3000/'
Given('user opens robobar website', () => {
    cy.visit(url)
})

When('user adds a cola', () => {
    robobar.colaButton().click();
})


Then('total should be {string}', (total) => {
    robobar.totalText().should("contain.text", total);
})

When('user adds a beer', () => {
    robobar.beerButton().click();
})

When('user adds {int} cola', (n) => {
    for(let i=0; i<n; i++) {
        robobar.colaButton().click();
    }
})


Then('total should be €{float}', (total) => {
    robobar.totalText().should("contain", "€"+total);
})


/*Then('total should be €{float}', (price)=>{
    cy.get(':nth-child(4) > .ng-binding')
        .should('contain', "€" + price)
})*/

