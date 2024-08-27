Feature: Login Feature
    #test login feature for the Orange HRM portal

    Background:
        Given I navigate to Website

    @focus
    Scenario: Test Negative Login Ids
        Given Pass value "Praveen" to Username
        And Pass value "Password" to Password
        When User click on login button
        Then User validate error message to be "Invalid credentials"


    Scenario Outline: Test Negative Login Ids
        Given Pass value '<username>' to Username
        And Pass value '<password>' to Password
        When User click on login button
        Then User validate error message to be '<errorMessage>'
        Examples:
            | username | password | errorMessage        |
            | admin    | Pass     | error               |
            | admin    | pass     | Invalid credentials |
            | admin    | admin123 |                     |