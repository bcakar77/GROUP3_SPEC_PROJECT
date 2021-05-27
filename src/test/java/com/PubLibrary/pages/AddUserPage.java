package com.PubLibrary.pages;

import com.PubLibrary.utilities.BrowserUtils;
import com.PubLibrary.utilities.ConfigurationReader;
import com.PubLibrary.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddUserPage{

    public AddUserPage(){
        PageFactory.initElements(Driver.get(),this);
    }


    @FindBy(css = ".portlet-title>span>a")
    public WebElement addUserButton;

    @FindBy(xpath = "//label[contains(text(),'Full Name')]")
    public WebElement fullNameTitle;

    @FindBy (css = "[name='full_name']")
    public WebElement fullNameInput;

    @FindBy(xpath = "//label[contains(text(),'Password')]")
    public WebElement passwordTitle;

    @FindBy (xpath = "//label[contains(text(),'Password')]")
    public WebElement passInput;

    @FindBy(xpath = "//label[contains(text(),'Email')]")
    public WebElement emailTitle;

    @FindBy (xpath = "//label[contains(text(),'Email')]")
    public WebElement emailInput;

    @FindBy(xpath = "//label[contains(text(),'User Group')]")
    public WebElement userGroupTitle;

    @FindBy(xpath = "//label[contains(text(),'Status')]")
    public WebElement statusTitle;

    @FindBy(xpath = "//label[contains(text(),'Start Date')]")
    public WebElement startDateTitle;

    @FindBy(xpath = "//label[contains(text(),'End Date')]")
    public WebElement endDateTitle;

    @FindBy (xpath = "//button[@class='btn btn-primary']")
    public WebElement saveChangesButton;


}
