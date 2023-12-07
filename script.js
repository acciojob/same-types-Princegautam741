// isSameType function
function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }

    // Check if the type of both values is the same
    return typeof value1 === typeof value2;
}

// Cypress tests
describe("isSameType function", () => {
    it("returns true if the values are of the same type", () => {
        const value1 = "hello";
        const value2 = "world";
        cy.visit(baseUrl, {
            onBeforeLoad(win) {
                // Stub your functions here
                cy.stub(win, "prompt").onFirstCall().returns(value1).onSecondCall().returns(value2);
            }
        });
        cy.on("window:alert", str => {
            expect(str.toString()).to.equals("true");
        });
    });

    it("returns false if the values are not of the same type", () => {
        const value1 = "hello";
        const value2 = 123;
        cy.visit(baseUrl, {
            onBeforeLoad(win) {
                // Stub your functions here
                cy.stub(win, "prompt").onFirstCall().returns(value1).onSecondCall().returns(value2);
            }
        });
        cy.on("window:alert", str => {
            expect(str.toString()).to.equals("false");
        });
    });

    it("returns true if both values are NaN", () => {
        const value1 = NaN;
        const value2 = NaN;
        cy.visit(baseUrl, {
            onBeforeLoad(win) {
                // Stub your functions here
                cy.stub(win, "prompt").onFirstCall().returns(value1).onSecondCall().returns(value2);
            }
        });
        cy.on("window:alert", str => {
            expect(str.toString()).to.equals("true");
        });
    });

    it("returns false if only one value is NaN", () => {
        const value1 = NaN;
        const value2 = 123;
        cy.visit(baseUrl, {
            onBeforeLoad(win) {
                // Stub your functions here
                cy.stub(win, "prompt").onFirstCall().returns(value1).onSecondCall().returns(value2);
            }
        });
        cy.on("window:alert", str => {
            expect(str.toString()).to.equals("false");
        });
    });
});
