import {chromium, test, expect } from '@playwright/test';


test.describe("Suite with saucedemo page tests",()=>{
    test.beforeEach(async({page}, testInfo)=>{
       
        console.log(`Running ${testInfo.title}`);
        const userNameField  = page.locator("#user-name");
        const passwordField = page.locator("#password");
        const loginButton = page.locator("#login-button")
        await page.goto("/");
        await expect(page).toHaveTitle(/Swag Labs/);
        await userNameField.fill("standard_user");
        await passwordField.fill("secret_sauce");
        await loginButton.click();
        await expect(page).toHaveTitle(/Swag Labs/);
    })
    test.afterAll(async()=>{
        const browser = await chromium.launch();
        await browser.close();
    })
    test('access Onesie', async ({ page }) =>{
        const sauceLabsOnesie = page.locator("//img[@alt='Sauce Labs Onesie']");
        await sauceLabsOnesie.click();
        await expect(page).toHaveTitle(/Swag Labs/);
    })
    test('order products Z to A', async({page})=>{
        const filterMenu = page.locator("//select[@class='product_sort_container']");
        const itemTshirtRed = page.locator("//img[@alt='Test.allTheThings() T-Shirt (Red)']");
        await page.goto("/inventory.html");
        await filterMenu.click();
        await filterMenu.selectOption("za");
        await itemTshirtRed.isEnabled();
    })
    test('buy Sauce Labs Backpack', async({page})=>{
        await page.goto("/inventory.html");
        const addLabsBackpack = page.locator("#add-to-cart-sauce-labs-backpack");
        const cartButton = page.locator("//a[@class='shopping_cart_link']");
        const cartCheckout = page.locator("#checkout");
        const firstNameField = page.locator("#first-name");
        const lastNameField = page.locator("#last-name");
        const postalCodeField = page.locator("#postal-code");
        const continueCheckoutButton = page.locator("#continue");
        const totalCartValue = page.locator("//div[@class='summary_total_label']");
        const finishButton = page.locator("#finish");
        const checkoutComplete = page.locator("//h2[@class='complete-header']");
        await addLabsBackpack.click();
        await cartButton.click();
        await cartCheckout.click();
        await firstNameField.fill("teste");
        await lastNameField.fill("teste");
        await postalCodeField.fill("1231123");
        await continueCheckoutButton.click();
        await expect(totalCartValue).toContainText(/32.39/);
        await finishButton.click();
        await expect(checkoutComplete).toContainText(/THANK YOU FOR YOUR ORDER/);
    })
})