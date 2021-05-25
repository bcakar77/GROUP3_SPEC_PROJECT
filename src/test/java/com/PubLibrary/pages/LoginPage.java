package com.PubLibrary.pages;

import com.PubLibrary.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(),this);
    }


}
