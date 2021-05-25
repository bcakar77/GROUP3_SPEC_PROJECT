$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/StudentBooks.feature");
formatter.feature({
  "name": "Student can find book by using search box with book\u0027s Name and Author.",
  "description": "",
  "keyword": "Feature"
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
  "name": "verify that student can find book by using search box with name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user enters the student information",
  "keyword": "Given "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.loginDefs.the_user_enters_the_student_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters book\u0027s name into search input",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.StudentBooksDefs.theUserEntersBookSNameIntoSearchInput()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see the book\u0027s name under the Name title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.StudentBooksDefs.theUserShouldBeAbleToSeeTheBookSNameUnderTheNameTitle()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});