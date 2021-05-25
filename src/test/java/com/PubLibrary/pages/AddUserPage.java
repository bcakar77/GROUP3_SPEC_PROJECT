package com.PubLibrary.pages;

import com.PubLibrary.utilities.BrowserUtils;
import com.PubLibrary.utilities.ConfigurationReader;
import com.PubLibrary.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddUserPage extends LoginPage{
    //This page is under the User Management page. When you click "+Add user", you enter that page
    public AddUserPage(){
        PageFactory.initElements(Driver.get(),this);
    }
    @FindBy(xpath = "//*[@id='menu_item']/li[2]")
    public WebElement usersButton;

    @FindBy(className = "btn btn-lg btn-outline btn-primary btn-sm")
    public WebElement addUserButton;

    @FindBy (name = "full_name")
    public WebElement fullNameInput;

    @FindBy (name = "password")
    public WebElement passInput;

    @FindBy (name = "email")
    public WebElement emailInput;

    @FindBy (className = "btn btn-primary")
    public WebElement saveChangesButton;

    @FindBy (className = "modal-title")
    public WebElement addUserPage;

    public void addUser(){
        signInAsLibrarian();
        usersButton.click();
        BrowserUtils.waitForVisibility(addUserButton, 3);

        addUserButton.click();
        BrowserUtils.verifyElementDisplayed(addUserPage);
        String fullName = ConfigurationReader.get("Full_Name");
        String password = ConfigurationReader.get("Librarian_Password");
        String email = ConfigurationReader.get("Librarian_Email");

        fullNameInput.sendKeys(fullName);
        passInput.sendKeys(password);
        emailInput.sendKeys(email);
        saveChangesButton.click();



    }



}
