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
    And fill the required input boxes with valid inputs "Users full name" "12345" "email@librarian.com"
    And the user click on Save Changes
    Then "The user has been created." message should be displayed
  @addUserWithStudent
  Scenario: Student users should NOT be able to add new user
    When the user enters the student information
    Then Users button should NOT be seen on the page
  @verifyUsersParameters @wip
  Scenario: Verify the user parameters in the Add User Page
    When the user enters the librarian information
    And the user navigate to Users module
    And the user click on Add User button
    Then below user parameters should be displayed on the window
      | Full Name     |
      | Password      |
      | Email         |
      | User Group    |
      | Status        |
      | Start Date    |
      | End Date      |
  @verifyFullNameRestrictions
  Scenario Outline: Full Name should be up to 64 digits in length and only consists of letters dashes (-) space ( ) and apostrophe (')
    When the user enters the librarian information
    And the user navigate to Users module
    And the user click on Add User button
    And fill the required input boxes with valid inputs "<FullName>" "password123" "email@test.lib"
    Then "<Expected Message>" message should be displayed
    Examples:
      | FullName           | Expected Message           |
      | 123456789      | None                       |
      | 12345678901234 | None                       |
      | abcdefghij12   | None                       |
      | 123456789/     | None                       |
      | new-user       | The user has been created. |
      | name username  | The user has been created. |
      | test'user      | The user has been created. |

  @verifyUserTypes
  Scenario: Verify the user types in the Add User Page
    When the user enters the librarian information
    And the user navigate to Users module
    And the user click on Add User button
    Then following user types should be able to be selected on the dropdown menu
      | Librarian    |
      | Students     |

  @verifyStatusOptions
  Scenario: Verify the status options in the Add User Page
    When the user enters the librarian information
    And the user navigate to Users module
    And the user click on Add User button
    Then following status options should be able to be selected on the dropdown menu
      | ACTIVE    |
      | INACTIVE  |
