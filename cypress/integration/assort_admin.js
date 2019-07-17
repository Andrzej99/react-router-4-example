import {API_URL} from './constants/index';

describe("TEST_TWORZENIA_ASORTYMENTU", () => {
    it("should visit website", () => {
        cy.visit(API_URL);
    })

    it("should to add assortment", () => {
        cy.get("select").select("ADMIN");
        cy.get("#buttonLogIn").click();
        // Assert
        cy.url().should("eq", "http://192.168.147.30:8080/EObiekt/admin/ticket");
        cy.get("#administrationBtn").click();
        cy.get("#itemName").type("Asortyment");
        cy.get("div.col-lg-3.adminMenuItem:nth-of-type(9)").click();
        cy.get("a#addButton").click();
        cy.get("input#assortName1").type("TEST_SYSTEMU");
        cy.get("input#price1").clear().type(80);
        cy.get("button#send2").click();
        cy.get("button.confirm").click();
        cy.wait(500);
        cy.get("thead tr:nth-child(2) th:nth-child(4) input").type("TEST");
        cy.get("button#searchTableBtn").click();
        cy.wait(1000);
        // Assert
        cy.get("tbody").find("tr:nth-child(5) td:nth-child(4)").should(function (assortName){
            expect(assortName).to.contain("TEST_SYSTEMU");
        })

    })

})