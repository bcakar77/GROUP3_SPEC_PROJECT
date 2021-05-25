
Feature: Student can find book by using search box with book's Name and Author.

  Background:
    Given the user is on the login page
  @wip
  Scenario: verify that student can find book by using search box with name

    Given the user enters the student information
    And the user enters book's name into search input
    Then the user should be able to see the book's name under the Name title