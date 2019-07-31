import { API_URL } from "../constants/index";
import currentDate from "../../utils/currentDate";

const title = "test z " + currentDate(true); 



describe("types of days", () => {
    beforeEach(() => {
        cy.visit(API_URL);
        cy.get("select").select("KASA 1");
        cy.get("#buttonLogIn").click();
        cy.get("#administrationBtn").click();
        cy.get(".btn.btn-info.btn-block:nth(3)").click();
        cy.get("#selectTabeSize").select("100");
        cy.get("#addButton").click();
        cy.get("#dayTypeName").type(title);
        cy.get("#saveButton").click();
        cy.get("thead tr:nth(1) th:nth(1) #status").type(title);
        cy.get("thead tr:nth(1) th:nth(1) select").select("=");
        cy.get("#searchTableBtn").click();
        cy.wait(1000);
    })


    it("should correctly add new day of type of the day", () => {
        cy.get("tbody").find("tr:first td:nth(1)").should(function (assortName) {
            expect(assortName.text()).to.equal(title)
        });
    });


    it("should edit type of the day", () => {
        cy.get("tbody").find(".sorting_1").click();
        cy.get("#editButton").click();
        cy.get("#dayTypeName").type(" edit");
        cy.get("#saveButton").click();
        cy.get("thead tr:nth(1) th:nth(1) #status").type(" edit");
        cy.get("thead tr:nth(1) th:nth(1) select").select("=");
        cy.get("#searchTableBtn").click();
        cy.wait(500);
        cy.get("tbody").find("td:nth(1)").should(function (assortName) {
            expect(assortName).to.contain(title + " edit");
        });
    });

    afterEach(() => {
        cy.get("tbody").find(".sorting_1").click();
        cy.get("#deleteButton").click();
        cy.wait(500);
        cy.get(".btn.btn-lg.btn-primary:nth(1)").click();
    });
    afterEach(() => {
        cy.get("tbody").find("tr.odd").should(function (assortName) {
            expect(assortName).to.contain("Brak danych");
        });
    });
});