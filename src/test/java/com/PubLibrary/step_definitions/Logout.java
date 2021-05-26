package com.PubLibrary.step_definitions;

import com.PubLibrary.pages.DashboardPage;
import com.PubLibrary.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class Logout {
    @When("user is at the dashbord page")
    public void user_is_at_the_dashbord_page() {
        // Write code here that turns the phrase above into concrete actions

        Driver.get().get("https://library3.cybertekschool.com/#dashboard");
    }



    @When("clicks the button with his username")
    public void clicks_the_button_with_his_username() {
        DashboardPage dashboardPage=new DashboardPage();
        dashboardPage.logOut();
    }


    @When("a drowdown shows up")
    public void a_drowdown_shows_up() {
        // Write code here that turns the phrase above into concrete actions
     //   throw new io.cucumber.java.PendingException();
    }



    @When("click on the logout button")
    public void click_on_the_logout_button() {
        // Write code here that turns the phrase above into concrete actions
     //   throw new io.cucumber.java.PendingException();
    }



    @Then("user should be in the logout page")
    public void user_should_be_in_the_logout_page() {
        // Write code here that turns the phrase above into concrete actions
       // throw new io.cucumber.java.PendingException();
        Assert.assertEquals("https://library3.cybertekschool.com/#dashboard", Driver.get().getCurrentUrl());
    }


}
