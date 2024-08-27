import { Before, Given } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.clearAllCookies();
  cy.clearAllSessionStorage();
  cy.clearAllLocalStorage();
});

Given("I navigate to Website", () => {
  cy.log("Navigated to page");
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});
