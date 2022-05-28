describe("Navigate to Google", () => {
  it("check if percyCSS is applied", () => {
    cy.visit("https://www.google.com");
    cy.percySnapshot("apply percyCSS to body");
  });
})
