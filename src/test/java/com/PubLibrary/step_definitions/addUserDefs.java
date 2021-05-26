package com.PubLibrary.step_definitions;

import com.PubLibrary.pages.AddUserPage;
import com.PubLibrary.pages.DashboardPage;
import com.PubLibrary.pages.UsersPage;
import com.PubLibrary.utilities.BrowserUtils;
import com.PubLibrary.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class addUserDefs {
    UsersPage usersPage = new UsersPage();

    @When("the user navigate to Users module")
    public void user_navigate_to_Users_module() {
        BrowserUtils.waitForClickablility(new AddUserPage().usersButton,5);
        new AddUserPage().usersButton.click();
    }
    @When("the user click on Add User button")
    public void user_click_on_Add_User_button() {
        BrowserUtils.waitForClickablility(new AddUserPage().addUserButton, 5);
        new AddUserPage().addUserButton.click();
    }
    @And("fill the required input boxes with valid inputs {string} {string} {string}")
    public void fillTheRequiredInputBoxesWithValidInputs() {
        BrowserUtils.waitForVisibility(new AddUserPage().fullNameInput,5);
        String fullName = ConfigurationReader.get("Full_Name");
        String password = ConfigurationReader.get("Librarian_Password");
        String email = ConfigurationReader.get("Librarian_Email");
        new AddUserPage().fullNameInput.sendKeys(fullName);
        new AddUserPage().passInput.sendKeys(password);
        new AddUserPage().emailInput.sendKeys(email);

    }
    @When("user clicks on Save Changes Button")
    public void user_clicks_Save_Changes_button(){
        new AddUserPage().saveChangesButton.click();
    }
    @Then("verifying message should be displayed")
    public void verifyingMessage(){
        String expectedResult = "The user has been created.";
        String displayedMessage = "The user has been created.";
        Assert.assertEquals(expectedResult,displayedMessage);
    }

}
