$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test.feature");
formatter.feature({
  "name": "Only Authorized Users should be able to login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
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
  "location": "com.PubLibrary.step_definitions.test.the_user_is_on_the_login_page()"
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
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user enters the librarian information",
  "keyword": "When "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.test.the_user_enters_the_librarian_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.test.the_user_should_be_able_to_login()"
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
  "location": "com.PubLibrary.step_definitions.test.the_user_is_on_the_login_page()"
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
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user enters the student information",
  "keyword": "When "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.test.the_user_enters_the_student_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.test.the_user_should_be_able_to_login()"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
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
  "location": "com.PubLibrary.step_definitions.test.the_user_is_on_the_login_page()"
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
      "name": "@wip"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user enters the invalid user \"librarian181@library\"\"WwRsaD3\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.test.the_user_enters_the_invalid_user(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the invalid passwords \"librarian181@library\"\"WwRsaD3\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.test.the_user_enters_the_invalid_passwords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the UnAuthorized user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.test.the_UnAuthorized_user_should_not_be_able_to_login()"
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
  "location": "com.PubLibrary.step_definitions.test.the_user_is_on_the_login_page()"
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
      "name": "@wip"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user enters the invalid user \"librarian181@librar\"\"WwRsaD3J\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.test.the_user_enters_the_invalid_user(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the invalid passwords \"librarian181@librar\"\"WwRsaD3J\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.test.the_user_enters_the_invalid_passwords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the UnAuthorized user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.PubLibrary.step_definitions.test.the_UnAuthorized_user_should_not_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});