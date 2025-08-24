describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[name="email"]').type("teste2@teste.com");
    cy.get('[name="password"]').type("cruzeiro");
    cy.get(".sc-ea747762-0").click();
    cy.get(
      '.sc-26506e6-5 > .sc-c7cdb42d-0 > [href="/area_logada/disponibilizar_animal"] > .sc-c7cdb42d-1 > span'
    ).click();
    cy.get('[name="name"]').type("Ray");
    cy.get(".sc-b77a2f6d-8 > .sc-43ec2adf-0 > .sc-43ec2adf-2 > svg").click();
    cy.get(".sc-b77a2f6d-8 > .sc-43ec2adf-0");
    cy.get('[aria-labelledby="radix-:re:"]').click();
    cy.get(".sc-b77a2f6d-9 > .sc-43ec2adf-0 > .sc-43ec2adf-2").click();
    cy.get('[aria-labelledby="radix-:rt:"]').click();
    cy.get('[name="race"]').type("Vira-lata");
    cy.get('[name="description"]').type("Uma cadela muito legal que homenageia a ultima Jedi");
    cy.get("[type='file']").selectFile("cypress/e2e/rey.webp", { force: true });
    cy.get('.sc-ea747762-0').click();
  });
});
