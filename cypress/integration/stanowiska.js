import {API_URL} from './constants/index';
describe("DODAWANIE_ASORTYMENTU DO STANOWISKA", () => {
    before(() => {
        cy.request({
            method: 'POST',
            url: "http://192.168.147.30:8095/tt-rest/crud/assort/save",
            body: assort,
            headers: { "X-Auth-Oper-Token": "0,1" }
        });
    })
    it("should visit website", () => {
        cy.visit(API_URL);
    })
    it("should add and remove assortmen to position", () => {
        cy.get("select").select("ADMIN");
        cy.get("input#exampleInputPassword1").type("jb4go32w");
        cy.get("#buttonLogIn").click();
        // Assert
        cy.url().should("eq", "http://192.168.147.30:8080/EObiekt/admin/ticket");
        cy.get("#administrationBtn").click();
        cy.get("#itemName").type("Stanowiska");
        cy.get("div.col-lg-3.adminMenuItem:nth-of-type(21)").click();
        // cy.get("table#TTtableactivePlace tr.even:nth-child(6)").click();
        //cy.get("#TTtableactivePlace tbody tr:nth-child(6)").click();
        cy.get("tr.even:nth-child(2)").click();
        cy.get("button#assortButton").click();
        cy.get("table#availableAssortTable tbody tr:nth-child(1)").click().click();
        cy.get("button#saveChanges").click();
        // Assert
        cy.url().should("eq", "http://192.168.147.30:8080/EObiekt/admin/activePlace/");
        cy.get("tr.even:nth-child(2)").click();
        cy.get("button#assortButton").click();
        //  Assert
        cy.get("table#selectedAssortTable").find("tr.selectedAssort.odd td:nth-child(2)").should(function (TESTSYSTEMU) {
           expect(TESTSYSTEMU).to.contain("TEST_SYSTEMU");
        })
        cy.get("button#removeAll").click();
        cy.get("button#saveChanges").click();
         // Assert
         cy.url().should("eq", "http://192.168.147.30:8080/EObiekt/admin/activePlace/");
         cy.get("tr.even:nth-child(6)").click();
         cy.get("button#assortButton").click();
        // Assert
        cy.get("tbody").find("td.dataTables_empty").should(function (TESTSYSTEMU2) {
            expect(TESTSYSTEMU2).to.have.length(1);
            
            
        })
    })
})


const assort = JSON.parse('{"objectDb":0,"objectId":0,"status":"A","displayName":"","materialGroup":null,"unitKey":{"objectDb":0,"objectId":1,"status":"A","displayName":""},"deposit":0.0,"isforrent":false,"shape":null,"color":null,"minquantity":0.0,"maxquantity":0.0,"defaultQuantity":0.0,"minSale":0.0,"maxSale":0.0,"assorttype":"S","dayValidate":0,"exerciseGroupKey":{"objectDb":0,"objectId":0,"status":"A","displayName":""},"passtype":0,"netDuration":-2400000,"grossDuration":-1800000,"event":false,"iszone":false,"vatRate":23,"description":"","entrances":0,"passmonthentrances":0,"passdayentrances":0,"passweekentrances":0,"bookingGroup":{"objectDb":0,"objectId":0,"status":"A","displayName":""},"isExerciseSelfService":false,"name":"TEST_SYSTEMU7","price":20.0,"listPrice":20.0,"vatClassification":"","isstatdailyused":false,"zoneKey":{"objectDb":0,"objectId":0,"status":"A","displayName":""},"customerTypeIds":{"objectDb":0,"objectId":0,"status":"A","displayName":""},"passTime":1,"passDateValidTo":null,"massage":null,"roadTaxRate":0.0,"netPrice":0.0,"vatPrice":0.0,"exciseRate":0.0,"serviceKind":0,"receipPrintKind":0,"buttonCollor":"#000000","buttonLeft":null,"buttonTop":null,"buttonWidth":null,"buttonHeight":null,"value":null,"displayWebName":"","singleEntrancess":null,"templateIds":null,"sortingPriority":null,"maxQuantity":-1,"restrictions":[],"activeZones":[],"activeCustomerTypes":[],"activePayments":[],"materialGroups":[],"colors":[],"shapes":[],"activityPlaces":[]}');