$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Smoke.feature");
formatter.feature({
  "name": "smoketest",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as a librarian",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user enters the librarian information",
  "keyword": "When "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_enters_the_librarian_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as a student",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user enters the student information",
  "keyword": "When "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_enters_the_student_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "UnAuthorized users should not be able to login to the application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user enters the invalid user \"\u003cemail\u003e\"\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user enters the invalid passwords \"\u003cemail\u003e\"\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the UnAuthorized user should not be able to login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "librarian181@library",
        "WwRsaD3"
      ]
    },
    {
      "cells": [
        "librarian181@librar",
        "WwRsaD3J"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "UnAuthorized users should not be able to login to the application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user enters the invalid user \"librarian181@library\"\"WwRsaD3\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_enters_the_invalid_user(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the invalid passwords \"librarian181@library\"\"WwRsaD3\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_enters_the_invalid_passwords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the UnAuthorized user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_UnAuthorized_user_should_not_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "UnAuthorized users should not be able to login to the application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user enters the invalid user \"librarian181@librar\"\"WwRsaD3J\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_enters_the_invalid_user(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the invalid passwords \"librarian181@librar\"\"WwRsaD3J\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_enters_the_invalid_passwords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the UnAuthorized user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_UnAuthorized_user_should_not_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Librarian users should be able to add books",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user enters the librarian information",
  "keyword": "When "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_enters_the_librarian_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to Books module",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.AddBookSepDefs.the_user_navigate_to_Books_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Add Book button",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.AddBookSepDefs.the_user_click_on_Add_Book_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill the necessary input boxes with valid inputs \"A Book Name\" \"2020\" \"1234567890\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.AddBookSepDefs.fillTheNecessaryInputBoxesWithValidInputs(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Save Changes",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.AddBookSepDefs.the_user_click_on_Save_Changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"The book has been created.\" message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.AddBookSepDefs.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user enters the student information",
  "keyword": "When "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_enters_the_student_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is at the dashbord page",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.Logout.user_is_at_the_dashbord_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks the button with his username",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.Logout.clicks_the_button_with_his_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a drowdown shows up",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.Logout.a_drowdown_shows_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.Logout.click_on_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be in the logout page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.Logout.user_should_be_in_the_logout_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});