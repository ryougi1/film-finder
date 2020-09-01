/// <reference types="cypress" />

describe('Searching functionality and SRR', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('input').type('harry potter{enter}');
  });

  it('URL correct', () => {
    cy.url().should('contain', '/search/harry+potter/1');
  });

  it('Search bar is present', () => {
    cy.get('[data-cy=searchBar]')
      .its('length')
      .then((lengthOfOptions) => {
        expect(1).to.be.equals(lengthOfOptions);
      });
  });

  it('Search bar is focused', () => {
    cy.focused().then((focused) => {
      expect(focused).to.have.attr('data-cy', 'searchBar');
    });
  });
});

describe('Content exists', () => {
  it('movies are present', () => {
    cy.get('[data-cy=moviecard]')
      .its('length')
      .then((lengthOfOptions) => {
        expect(lengthOfOptions).to.be.greaterThan(0);
      });
  });

  it('movies have images', () => {
    cy.get('[data-cy=moviecard')
      .find('img')
      .should('have.attr', 'src')
      .should('include', '.jpg');
  });
});
