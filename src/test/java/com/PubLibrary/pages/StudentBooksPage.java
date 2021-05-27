package com.PubLibrary.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class StudentBooksPage extends BasePage{

    @FindBy(css = "[type='search']")
    public WebElement searchBox;

    @FindBy(xpath = "//tr[@role='row']/td[3]")
    public WebElement NameText;


 //An Evil Cradling      Will Rempel MD

}

