import {
  Given,
  When,
  Then,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";
Given("Pass value {string} to Username", (username: string) => {
  cy.xpath('//input[@name="username"]').type(username);
  cy.log("Passed Username");
});

Given("Pass value {string} to Password", (password: string) => {
  cy.get("input.oxd-input.oxd-input--active").type(password);
  cy.log("Passed Password");
});

When("User click on login button", () => {
  cy.contains(" Login ").click({ force: true });
  cy.log("Clicked Login");
});

Then("User validate error message to be {string}", (errorMessage: string) => {
  cy.contains("Invalid credentials").should("be.visible");
  cy.contains("Invalid credentials")
    .invoke("text")
    .then((value) => {
      expect(value.trim()).to.be.equal(errorMessage);
      cy.log(errorMessage);
    });
  cy.log("Validated Error Message");
});

Given("Pass value for username and password", (dataTable: DataTable) => {
  dataTable.hashes().forEach((ele: Record<string, string>) => {
    let username = ele.username;
    let password = ele.password;
    cy.xpath('//input[@name="username"]').type(username);
    cy.get("input.oxd-input.oxd-input--active").type(password);
    cy.log("Username: ", username + " | Password: ", password);
  });
});
