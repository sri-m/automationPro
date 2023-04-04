import {test, expect} from '@playwright/test'
import {Phptravels} from '../pages/phptravels.page'
//push in srini1

test('fromAutomation', async ({ page }) => {
    const phptravels = new Phptravels(page);

    await phptravels.openWebsite(phptravels.url);
    await page.waitForSelector('#inputFirstName');
    await page.waitForURL(phptravels.url);

    await phptravels.enterfirstnameTextbox(phptravels.firstname_texboxlocator, phptravels.firstname_texboxvalue);
    await phptravels.enterlastnameTextbox(phptravels.lastname_textboxlocator, phptravels.lastname_textboxvalue);
    await phptravels.enteremailIDTextbox(phptravels.emailid_textboxlocator, phptravels.emailid_textboxvalue);
    await phptravels.enterphonenumberTextbox(phptravels.phonenumber_textboxlocator, phptravels.phonenumber_textboxvalue);
    await phptravels.enterstreetaddressTextbox(phptravels.streetaddress_textboxlocator, phptravels.streetaddress_textboxvalue);
    await phptravels.enterstreetaddress2Textbox(phptravels.streetaddress2_textboxlocator, phptravels.streetaddress2_textboxvalue);
    await phptravels.entercityTextbox(phptravels.city_textboxlocator, phptravels.city_textboxvalue);
    await phptravels.enterstateTextbox(phptravels.state_textboxlocator, phptravels.state_textboxvalue);
    await phptravels.enterpostcodeTextbox(phptravels.postcode_textboxlocator, phptravels.postcode_textboxvalue);
    //phptravels.entercountryTextbox(phptravels.country_textboxlocator, phptravels.country_textboxvalue);
    await phptravels.offBtn(phptravels.offButton);
    await phptravels.entermobileTextbox(phptravels.mobile_textboxlocator, phptravels.mobile_textboxvalue);
    await phptravels.enterpasswordTextbox(phptravels.password_textboxlocator, phptravels.password_textboxvalue);
    await phptravels.enterconfirpasswordTextbox(phptravels.confirpassword_textboxlocator, phptravels.confirmpassword_textboxvalue);
    //await phptravels.checkboxSelect(phptravels.checkbox_textboxlocator);

    //await page.waitForSelector('#abc');

});

test.only('Alert testging ', async ({page}) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    await page.click('//button[@class="btn btn-danger"]')
    page.on('dialog', async (alert) => {
        //expect(alert.type()).toContain('alert');
        //expect(alert.message()).toContain('This is alert box');
        await alert.accept();

    })
    //await page.waitForSelector('#abc')
	
})
