@addUser
Feature: Only librarians should be able to add users
  Description: The purpose of this feature is to test the add user functionality
  Background:
    Given the user is on the login page
  @addUserWithLibrarian
  Scenario: Librarian users should be able to add books
    When the user enters the librarian information
    And the user navigate to Users module
    And the user click on Add User button
    And fill the necessary input boxes with valid inputs "Users full name" "password 12345" "email@librarian.com"
    And the user click on Save Changes
    Then "The user has been created." message should be displayed
