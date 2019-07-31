import { API_URL } from "./constants/index";
describe("new-entry", () => {
    it("should let in to the zone", () => {
        cy.visit(API_URL);
        cy.get("select").select("KASA 1");
        cy.get("#buttonLogIn").click();
        cy.get("#newEntranceBtn").click();
        //cy.get("button.r-blue-button.col-lg-2.r-height-type1:nth(1)").click();
        cy.get("#logo").type("1", {force:true});
        cy.get("#addWristlet:nth(0) #add").click( {force: true});
        cy.wait(1500);
        // cy.get(".r-blue-button.r-height-type1.col-lg-4.r-type-font1").click();
        cy.get(".r-green-button.float-left.btn.btn-success.col-lg-3.r-font-type-1.r-height-type1").click();
        cy.wait(500);
        cy.get(".confirm",{force: true}).click({force: true});

        

    })
    it("should let out from the zone", () => {
        cy.visit(API_URL);
        cy.get("select").select("KASA 1");
        cy.get("#buttonLogIn").click();
        cy.get("#settleBillBtn").click();
        cy.get(".r-blue-button.r-height-type1.col-lg-2:nth(0)").click();
        cy.get("#logo").type("1");
        cy.get("#find").click();
        cy.wait(500);
        cy.get(".r-green-button.float-left.btn.btn-success.col-lg-3.r-font-type-1.r-height-type1").click()
        cy.wait(500);
        cy.get(".confirm").click();
    })
})
