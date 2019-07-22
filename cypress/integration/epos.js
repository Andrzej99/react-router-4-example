import { API_URL } from "./constants/index";

describe("EPOS", () => {
    const messageText = "Transakcja przebiegła pomyślnie";
    beforeEach(() => {
        cy.visit(API_URL);
        // TO BE REMOVED
        cy.get("select").select("ADMIN");
        cy.get("input#exampleInputPassword1").type("jb4go32w");
        cy.get("#buttonLogIn").click();
        // /TO BE REMOVED
        cy.wait(500);
        cy.get("#eposBtn").click();
        for(let i = 0; i < 17; i++) {
            cy.get(`button[data-testid=assortBtn${i}]`).click();
        }
        cy.wait(500);

    });

    it("should sell correctly  in epos by cash", () => {
        cy.get("#payment", { force: true }).click();
        cy.wait(500);
        cy.get(".confirm", { force: true }).click();
        cy.wait(1500);
        cy.get("#referenceDocModal").find("div.alert.alert-success").should(function (TROK) {
            expect(TROK).to.contain("Transakcja przebiegła pomyślnie");
        });
        cy.get("#referenceDocModal button.close").click();
    });

    it("should sell correctly in epos by virement", () => {
        cy.get("button[data-testid=payTypeBtnT").click();
        cy.wait(500);
        cy.get("#payment", { force: true }).click();
        cy.wait(500);
        cy.get(".confirm", { force: true }).click();
        cy.wait(1500);
        cy.get("#referenceDocModal").find("div.alert.alert-success").should(function (TROK) {
            expect(TROK).contain(messageText);
        });
        cy.get("#referenceDocModal button.close").click();
    });

    it("should sell correctly in epos by agreement", () => {
        cy.get("button[data-testid=payTypeBtnA").click();
        cy.wait(500);
        cy.get("#payment", { force: true }).click();
        cy.wait(500);
        cy.get(".confirm", { force: true }).click();
        cy.wait(1500);
        cy.get("#referenceDocModal").find("div.alert.alert-success").should(function (TROK) {
            expect(TROK).to.contain(messageText);
        });
        cy.get("#referenceDocModal button.close").click();
    });

    it("should sell correctly in epos by voucher", () => {
        cy.get("button[data-testid=payTypeBtnV", { force: true }).click();
        cy.wait(500);
        cy.get("#payment", { force: true }).click();
        cy.wait(500);
        cy.get(".confirm", { force: true }).click();
        cy.wait(1500);
        cy.get("#referenceDocModal").find("div.alert.alert-success").should(function (TROK) {
            expect(TROK).to.contain(messageText);
        });
        cy.get("#referenceDocModal button.close").click();
    });

    it("should sell correctly in epos by check card", () => {
        cy.get("button[data-testid=payTypeBtnR").click();
        cy.wait(500);
        cy.get("#payment", { force: true }).click();
        cy.wait(500);
        cy.get(".confirm", { force: true }).click();
        cy.wait(1500);
        cy.get("#referenceDocModal").find("div.alert.alert-success").should(function (TROK) {
            expect(TROK).to.contain(messageText);
        });
        cy.get("#referenceDocModal button.close").click();
    });
      










});