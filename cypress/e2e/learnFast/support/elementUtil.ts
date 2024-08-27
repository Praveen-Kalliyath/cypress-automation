/// <reference types="Cypress" />
export const click = {
  /**
   * @name: click
   * @description: Used to click an element
   * @param: elementLocator
   * @author: PK
   */
  click(element) {
    cy.get(element).click();
    cy.log("Clicked on element:", element);
  },
};
export const clearAndType = {
  /**
   * @name: clearAndType
   * @description: Used to clearAndType on an element
   * @param: elementLocator, message
   * @author: PK
   */
  clearAndType(element, message: string) {
    cy.get(element).clear();
    cy.get(element).type(message);
    cy.log("Cleared and entered text", message + " on element:", element);
  },
};
