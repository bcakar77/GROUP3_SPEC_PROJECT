package com.PubLibrary.step_definitions;

import com.PubLibrary.pages.DashboardPage;
import com.PubLibrary.pages.StudentBooksPage;
import com.PubLibrary.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class StudentBooksDefs {
    StudentBooksPage studentBooksPage= new StudentBooksPage();
    DashboardPage dashboardPage=new DashboardPage();

    @When("the user navigate to Books module")
    public void theUserNavigateToBooksModule() {
        BrowserUtils.waitForClickablility(dashboardPage.studentBooksButton,5);
        dashboardPage.studentBooksButton.click();

    }

    @Then("the user enters book's name into search input")
    public void theUserEntersBookSNameIntoSearchInput() throws InterruptedException {

        studentBooksPage.searchBox.click();
        studentBooksPage.searchBox.sendKeys("divan");

        Thread.sleep(5000);

    }

    @And("the user should be able to see the book's name under the Name title")
    public void theUserShouldBeAbleToSeeTheBookSNameUnderTheNameTitle() {
        String ActualBookName = studentBooksPage.NameText.getText();
        System.out.println("ActualBookName = " + ActualBookName);
        String ExpectedBookName = "divan";
        Assert.assertEquals(ExpectedBookName,ActualBookName);

    }
}
