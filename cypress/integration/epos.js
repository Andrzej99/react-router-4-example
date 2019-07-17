import { API_URL } from "./constants/index";

describe("EPOS", () => {
    beforeEach(() => {
        cy.visit(API_URL);
        // TO BE REMOVED
        cy.get("select").select("ADMIN");
        cy.get("#buttonLogIn").click();
        // /TO BE REMOVED

        cy.get("#eposBtn").click();
        
        cy.get("button[data-testid=assortBtn0]").click();
        cy.wait(500);
        cy.get("button.r-yellow-button.col-lg-6").click();
        cy.get("tr[data-testid=promotionModalBtn0]").click();
        cy.wait(2000);
    });
    
    it("should sell correctly in epos", () => {
        cy.get("#payment").click();
        cy.wait(500);
        cy.get(".confirm", { force: true }).click();
        cy.url().should("eq", `${API_URL}admin/epos`);
        cy.wait(1000);
        cy.get("div.modal-content").find("div.alert.alert-success").should(function (TROK) {
            expect(TROK).to.have.length(1);
        })
        cy.wait(1000);
        cy.get("#referenceDocModal button.close").click();



    });

});