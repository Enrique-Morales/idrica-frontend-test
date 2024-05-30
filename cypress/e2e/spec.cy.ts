import { API_URL } from "../../src/utils/constants";

describe("App", () => {
  it("external API responds ok", () => {
    cy.request(API_URL);
  });
  it("succesfully loads app", async () => {
    cy.visit("/");
  });
  it("displays confirmation modal when delete button is clicked", async () => {
    cy.visit("/");
    const removeButton = cy.get("button[class=delete-button]").first();
    removeButton.click();
    cy.get("div[class=text-p]").should(
      "contain",
      "Are you sure you want to delete post with id"
    );
  });
  it("removes post successfuly", async () => {
    cy.visit("/");
    const removeButton = cy.get("button[class=delete-button]").first();
    removeButton.click();
    const confirmRemoveButton = cy.get("button[class=button button-danger]");
    confirmRemoveButton.click();
    cy.get("div[class=text-h6]")
      .contains(
        "Sunt Aut Facere Repellat Provident Occaecati Excepturi Optio Reprehenderit"
      )
      .should("not.exist");
  });
});
