package com.PubLibrary.pages;

import com.PubLibrary.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class AddBookPage {

    public AddBookPage(){PageFactory.initElements(Driver.get(),this);}

    //This age is under the Book Management page. When you click "+Add Book", you enter that page
    // to locate the elements please use > @FindBy

}
