import { A11Y_OPTIONS } from "./constants";

context("Accessibility (A11Y)", () => {
  it("Passes accessibility tests", () => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
    cy.checkA11y(A11Y_OPTIONS);
  });
});
