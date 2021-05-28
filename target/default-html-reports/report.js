$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/adduser.feature");
formatter.feature({
  "name": "Only librarians should be able to add users",
  "description": "  Description: The purpose of this feature is to test the add user functionality",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addUser"
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
  "name": "Verify the status options in the Add User Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addUser"
    },
    {
      "name": "@verifyStatusOptions"
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
  "name": "the user navigate to Users module",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.addUserDefs.user_navigate_to_Users_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.addUserDefs.user_click_on_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "following status options should be able to be selected on the dropdown menu",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.addUserDefs.following_status_options_should_be_able_to_be_selected_on_the_dropdown_menu(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});