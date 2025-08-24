describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/login");
    cy.get('a').click();
    cy.get('[name="name"]').type("MatheusPereira");
    cy.get('[name="email"]').type("matheus@craque.com");
    cy.get('[name="password"]').type("chicletinho");
    cy.get('[name="confirmPassword"]').type("chicletinho");
    cy.get('.sc-ea747762-0').click();
  })
})