import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navegar a la página
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/'); // Assert que estamos en la URL correcta

  // Interactuar con el campo de nombre de usuario
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await expect(page.locator('[data-test="username"]')).toHaveValue('standard_user'); // Assert que el nombre de usuario es correcto

  // Interactuar con el campo de contraseña
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce'); // Assert que la contraseña es correcta

  // Presionar Enter y verificar el botón de login
  await page.locator('[data-test="password"]').press('Enter');
  
  // Hacer click en el botón de login
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // Assert que la URL es la correcta después de hacer login

  // Hacer click en un artículo específico
  await page.locator('[data-test="item-4-title-link"]').click();
  await expect(page.locator('[data-test="inventory_item_title"]')).toBeVisible(); // Assert que el título del artículo es visible

  // Verificar la descripción del artículo
  await page.locator('[data-test="inventory-item-desc"]').click();
  await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible(); // Assert que la descripción del artículo es visible

  // Agregar al carrito
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="shopping_cart_container"]')).toHaveText('1'); // Assert que el carrito tiene 1 ítem

  // Volver a la página de productos
  await page.locator('[data-test="back-to-products"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // Assert que estamos de vuelta en la página de productos
});
