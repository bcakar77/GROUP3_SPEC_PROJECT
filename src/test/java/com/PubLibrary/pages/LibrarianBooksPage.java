package com.PubLibrary.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LibrarianBooksPage extends BasePage{

    @FindBy(css =".portlet-title>span>a")  // it goes to "+add Book"
    public WebElement addBooks;


}
