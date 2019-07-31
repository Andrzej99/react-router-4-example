import { API_URL } from './constants/index';
describe("sale-of-tickets", () => {
    const quantity = 25;

    it("should sell by cash and to make out an invoice", () => {
        cy.visit(API_URL);
        cy.get("select").select("KASA 1");
        cy.get("#buttonLogIn").click();
        cy.get("#viewAssort").find(".assortMenuItem button span").then(items => {
            getButton("GRUPA ZORGANIZOWANA", items);
            cy.get("input#quantity").type(quantity);
            cy.get("a#acceptButton1").click();
            cy.get("button#sendBasket").click();
            cy.get("input#datepicker").click();
            cy.get("tr:nth-child(4) td:nth-child(4)").click();
            cy.get("a.btn.btn-lg.fa-2x").click();
            cy.get("div.input-group").find("a span:nth(2)").then(inputs => selectSpan(inputs, quantity));
            cy.wait(500);
            cy.get("a.btn.btn-info.col-lg-6.fa-2x").click();
            cy.get("#acceptButton").click();
            cy.get("button.btn.btn-primary.col-lg-4:nth(3)").click();
            cy.wait(500);
            cy.get("tr[data-testid=promotionModalBtn4").click();
            cy.wait(500);
            cy.get("button#buttonPurchaser:nth(0)").click();
            cy.get("input#customerName").type("w");
            cy.wait(500);
            cy.get("a#findCustomer").click();
            cy.wait(1500);
            cy.get("tbody tr.even:nth(0) td:nth(0)").click();
            cy.wait(500);
            cy.get("button#selectBtn").click();
            cy.wait(500);
            cy.get("button#buttonInvoice", { force: true }).click();
            cy.wait(500);
            cy.get("button.btn.btn-primary.col-lg-6.fa-2x:nth(0)").click();
            cy.get("button#buttonPayType0").click();
            cy.wait(500);
            cy.get("button.btn.btn-success.col-lg-12.fa-2x.text-center", { force: true }).click();
            cy.wait(500);
            cy.get("button.confirm").click();
            // Assert
            cy.get("tr.odd:nth(0)").find("td:nth(4)").should("be.visible");
            // //Assert
            // cy.get("tr.odd:nth(0)").find("td:nth(5)").should(function (GOTÓWKA) {
            //     expect(GOTÓWKA).to.contain("Gotówka");
            // })
            // //Assert 
            // cy.get("tr.odd:nth(0)").find("td:nth(7)").should(function (FAKTURA) {
            //     expect(FAKTURA).to.contain("Faktura");
                
            // })
            
        });
    })
})

const getButton = (text, items) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i].innerText === text) {
            cy.get(items.get(i)).trigger("contextmenu");
        }
    }
}

const selectSpan = (inputs, quantity) => {
    cy.wrap(inputs).each(span => {
        if (span[0].innerText >= quantity) {
            span[0].click();
            return false;
        }
        return true;
    });
}