
@smoke
Feature: smoketest

  Background:
    Given the user is on the login page

  Scenario: Login as a librarian

    When the user enters the librarian information
    Then the user should be able to login

  Scenario:  Login as a student

    When the user enters the student information
    Then the user should be able to login


  Scenario Outline: UnAuthorized users should not be able to login to the application
    When the user enters the invalid user "<email>""<password>"
    And the user enters the invalid passwords "<email>""<password>"
    Then the UnAuthorized user should not be able to login
    Examples:
      | email                | password |
      | librarian181@library | WwRsaD3  |
      | librarian181@librar  | WwRsaD3J |




  Scenario: Librarian users should be able to add books
    When the user enters the librarian information
    And the user navigate to Books module
    And the user click on Add Book button
    And fill the necessary input boxes with valid inputs "A Book Name" "2020" "1234567890"
    And the user click on Save Changes
    Then "The book has been created." message should be displayed


  Scenario: User should be able to logout
    When the user enters the student information
    And user is at the dashbord page
    And clicks the button with his username
    And a drowdown shows up
    And click on the logout button
    Then user should be in the logout page