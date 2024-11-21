import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('.choose > .nav > li > a').first().click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await expect(page.locator('xpath=//*[@id="cartModal"]/div/div/div[1]/h4')).toBeVisible();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await expect (page.locator('xpath=//*[@id="cartModal"]/div/div/div[1]/h4')).toBeHidden();
});