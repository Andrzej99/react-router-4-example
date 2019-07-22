import {API_URL} from './constants/index';
describe("sale-of-tickets", ()=> {
    it("should visit website", ()=> {
        cy.visit(API_URL);
        cy.get("select").select("KASA 1");
        cy.get("#buttonLogIn").click();
        cy.get("div#quantityCalculator")
    })
})