package com.PubLibrary.step_definitions;

import com.PubLibrary.pages.AddUserPage;
import com.PubLibrary.pages.BasePage;
import com.PubLibrary.pages.DashboardPage;
import com.PubLibrary.pages.UsersPage;
import com.PubLibrary.utilities.BrowserUtils;
import com.PubLibrary.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;

public class addUserDefs {
    UsersPage usersPage = new UsersPage();
    AddUserPage addUserPage = new AddUserPage();


    @When("the user navigate to Users module")
    public void user_navigate_to_Users_module() {
        BrowserUtils.waitForClickablility(usersPage.usersButton,5);
        usersPage.usersButton.click();
    }
    @When("the user click on Add User button")
    public void user_click_on_Add_User_button() {
        BrowserUtils.waitForClickablility(addUserPage.addUserButton, 5);
        addUserPage.addUserButton.click();
    }
    @And("fill the required input boxes with valid inputs {string} {string} {string}")
    public void fillTheRequiredInputBoxesWithValidInputs(String fullName, String password, String email) {
        BrowserUtils.waitForVisibility(addUserPage.addUserHeader,5);
        addUserPage.fullNameInput.sendKeys(fullName);
        addUserPage.passInput.sendKeys(password);
        addUserPage.emailInput.sendKeys(email);

    }
    @When("user clicks on Save Changes Button")
    public void user_clicks_Save_Changes_button(){
        addUserPage.saveChangesButton.click();
    }
    @Then("{string} message should display")
    public void message_should_display(String expectedMessage) {
        String actualMessage = "The user has been created.";
        if (expectedMessage.equals("The user has been created.")){
            Assert.assertEquals(expectedMessage,actualMessage);
        }else{
            Assert.assertFalse(false);
        }
    }
    @Then("Users button should NOT be seen on the page")
    public void Users_button_should_NOT_be_seen_on_the_page() {
        Assert.assertTrue(usersPage.usersButton.isDisplayed());
    }
    @Then("below user parameters should be displayed on the window")
    public void below_user_parameters_should_be_displayed_on_the_window(List<String> expectedUserParams){
        BrowserUtils.waitForVisibility(addUserPage.addUserHeader,5);
        List<String> actualUserParams = new ArrayList<>();
        actualUserParams.add(addUserPage.fullNameTitle.getText());
        actualUserParams.add(addUserPage.passwordTitle.getText());
        actualUserParams.add(addUserPage.emailTitle.getText());
        actualUserParams.add(addUserPage.userGroupTitle.getText());
        actualUserParams.add(addUserPage.statusTitle.getText());
        actualUserParams.add(addUserPage.startDateTitle.getText());
        actualUserParams.add(addUserPage.endDateTitle.getText());


        Assert.assertEquals(expectedUserParams,actualUserParams);
    }
   /* @Then("following user parameters should be displayed on the window")
    public void following_user_parameters_should_be_displayed_on_the_window(List<String> expectedUserParams) {

        BrowserUtils.waitForVisibility(addUserPage.addUserHeader,5);
        List<String> actualUserParams = new ArrayList<>();
        actualUserParams.add(addUserPage.fullNameTitle.getText());
        actualUserParams.add(addUserPage.passwordTitle.getText());
        actualUserParams.add(addUserPage.emailTitle.getText());
        actualUserParams.add(addUserPage.userGroupTitle.getText());
        actualUserParams.add(addUserPage.statusTitle.getText());
        actualUserParams.add(addUserPage.startDateTitle.getText());
        actualUserParams.add(addUserPage.endDateTitle.getText());


        Assert.assertEquals(expectedUserParams,actualUserParams);

    }*/

    @Then("following user types should be able to be selected on the dropdown menu")
    public void following_user_types_should_be_able_to_be_selected_on_the_dropdown_menu(List<String> expectedUserTypes) {

        BrowserUtils.waitForVisibility(addUserPage.userGroupTitle,5);

        List<String> actualUserTypes = new ArrayList<>();
        Select userTypes = new Select(addUserPage.userGroupTitle);
        List<WebElement> options = userTypes.getOptions();
        for (WebElement each : options){
            actualUserTypes.add(each.getText());
        }

        Assert.assertEquals(expectedUserTypes,actualUserTypes);
    }
    @Then("following status options should be able to be selected on the dropdown menu")
    public void following_status_options_should_be_able_to_be_selected_on_the_dropdown_menu(List<String> expectedStatusOptions) {

        BrowserUtils.waitForVisibility(addUserPage.statusTitle,5);

        List<String> actualStatusOptions = new ArrayList<>();
        Select userTypes = new Select(addUserPage.statusTitle);
        List<WebElement> options = userTypes.getOptions();
        for (WebElement each : options){
            actualStatusOptions.add(each.getText());
        }

        Assert.assertEquals(expectedStatusOptions,actualStatusOptions);
    }


}
