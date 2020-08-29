/**
 * Since using StyledComponents generate dynamic classnames:
 * https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements
 * https://docs.cypress.io/guides/core-concepts/test-runner.html#Uniqueness
 */
/// <reference types="cypress" />

describe('Landing page hydration', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
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

  it('20 trending movies are present', () => {
    cy.get('[data-cy=moviecard]')
      .its('length')
      .then((lengthOfOptions) => {
        expect(20).to.be.equals(lengthOfOptions);
      });
  });
});
