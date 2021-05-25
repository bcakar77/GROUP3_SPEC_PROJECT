package com.PubLibrary.step_definitions;

import com.PubLibrary.pages.LoginPage;
import com.PubLibrary.utilities.BrowserUtils;
import com.PubLibrary.utilities.ConfigurationReader;
import com.PubLibrary.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class addUserDefs {
    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("the user enters the librarian information")
    public void the_user_enters_the_librarian_information() {
        new LoginPage().signInAsLibrarian();

    }

    @Then("the user should be able to login")
    public void the_user_should_be_able_to_login() {
        BrowserUtils.waitFor(3);
        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Library",actualTitle);
    }

}
