import {API_URL} from './constants/';

describe("ttsoft2", () => {
    it("should visits website", () => {
        cy.visit(API_URL);
    })
    it("should not log in correctly", () => {
        cy.get("select").select("ADMIN");
        cy.get("#exampleInputPassword1").type("1234");
        cy.get("#buttonLogIn").click();
        // Assert
        cy.url().should("eq", `${API_URL}login/error`);
    })
    it("should log in correctly", () => {
        cy.get("select").select("ADMIN");
        // cy.get("#exampleInputPassword1").type("1234");
        cy.get("#buttonLogIn").click();
        // Assert
        cy.url().should("eq", `${API_URL}admin/ticket`);

        cy.get("#leftMenu .r-nav-bottom > .r-nav-other > div:last-child > a").click();
        cy.get("#btnLogout").click();
        // Assert
        cy.get(".r-margin-center-8").find(".alert.alert-success").should(function ($div) {
            expect($div).to.have.length(1);
            expect($div).to.have.text("Nastąpiło prawidłowe wylogowanie się.")
        })

    })
    it("should sell correctly in epos", () => {
        // TO BE REMOVED
        cy.get("select").select("ADMIN");
        cy.get("#buttonLogIn").click();
        // /TO BE REMOVED

        cy.get("#eposBtn").click();
        // Assert
        cy.get("#btnProductDiv").find("button.btn.col-lg-2.r-margin").should(function(produkt){
            expect(produkt).to.have.length(18);
        })
        cy.get("button[data-testid=assortBtn1]").click();
        cy.wait(1000);
        // Assert
        cy.get(".well").find(".r-karnet-block").should(function(rKarnet){
            expect(rKarnet).to.have.length(1);
        });
        cy.get("button.r-yellow-button.col-lg-6").click();
        cy.wait(500);
        cy.get(".odd:nth-of-type(1)").click();
        cy.wait(1000)
        cy.get("#payment").click();
        cy.wait(1000);
        cy.get(".confirm", {force: true}).click();
        cy.wait(500)
        cy.get("button.close")

    })
    // it("should log out correctly", () => {
    //     cy.get("#leftMenu .r-nav-bottom > .r-nav-other > div:last-child > a").click();
    //     cy.get("#btnLogout").click();
    //     // Assert
    //     cy.get("r-margin-center-8").find("alert alert-success").should(function ($div) {
    //         expect($div).to.have.length(2);
    //         expect($div).to.have.text("Nastąpiło prawidłowe wylogowanie się.")
    //     })
    // })
})