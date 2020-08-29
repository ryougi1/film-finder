/// <reference types="cypress" />

describe('People page', () => {
  beforeEach(() => {
    const randId = Cypress._.random(0, 1e3);
    cy.visit(`http://localhost:3000/people/${randId}`);
  });

  it('image is present', () => {
    cy.get('div')
      .find('img')
      .should('have.attr', 'src')
      .should('include', '.jpg');
  });
});
