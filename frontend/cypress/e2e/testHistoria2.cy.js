describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[name="email"]').type("joao@joao.com");
    cy.get('[name="password"]').type("cabuloso");
    cy.get(".sc-ea747762-0").click();
    cy.get(
      '.sc-26506e6-5 > .sc-c7cdb42d-0 > [href="/area_logada/animais_disponiveis"] > .sc-c7cdb42d-1'
    ).click();
    cy.get("a > .sc-ea747762-0").click({ multiple: true });
  });
});
