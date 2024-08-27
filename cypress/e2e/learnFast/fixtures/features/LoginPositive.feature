Feature: Login Feature
    #test login feature for the Orange HRM portal

    Background:
        Given I navigate to Website

    Scenario: Test Positive Login Ids
        Given Pass value for username and password
            | username | password |
            | admin    | passwo   |
            | admin    | admin123 |
        And User click on login button
