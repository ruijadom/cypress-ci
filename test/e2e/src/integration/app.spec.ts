/// <reference types="Cypress" />

describe("app", () => {
  it("should work", () => {
    cy.visit("/");
    cy.get("div").should("be.visible");
  });
});
