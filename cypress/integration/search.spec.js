/// <reference types="cypress" />

describe("Searching functionality and SRR", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("harry potter{enter}");
  });

  it("URL correct", () => {
    cy.url().should("eq", "http://localhost:3000/search/harry+potter");
  });

  it("Search bar is present", () => {
    cy.get("[data-cy=searchBar]")
      .its("length")
      .then((lengthOfOptions) => {
        expect(1).to.be.equals(lengthOfOptions);
      });
  });

  it("Search bar is focused", () => {
    cy.focused().then((focused) => {
      expect(focused).to.have.attr("data-cy", "searchBar");
    });
  });

  it("20 movies are present", () => {
    cy.get("[data-cy=moviecard]")
      .its("length")
      .then((lengthOfOptions) => {
        expect(20).to.be.equals(lengthOfOptions);
      });
  });
});