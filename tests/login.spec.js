import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  // Ir a la página principal
  await page.goto('https://www.saucedemo.com/');
  
  // Validar que la página de login se haya cargado correctamente
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  
  // Ingresar el nombre de usuario
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  
  // Ingresar la contraseña
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  
  // Hacer clic en el botón de login
  await page.locator('[data-test="login-button"]').click();
  
  // Validar que el login fue exitoso, que redirige a la página principal de la tienda
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
  // Hacer clic en el nombre de la tienda (Swag Labs)
  await page.getByText('Swag Labs').click();
  
  // Abrir y cerrar el menú
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await expect(page.getByRole('button', { name: 'Close Menu' })).toBeVisible(); // Verificar que el botón de cerrar menú esté visible
  await page.getByRole('button', { name: 'Close Menu' }).click();
  
  // Añadir un producto al carrito
  const addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
  await expect(addToCartButton).toBeVisible(); // Verificar que el botón de añadir al carrito esté visible
  await addToCartButton.click();
  
  // Validar que el producto fue agregado al carrito
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); // Verificar que el carrito tiene 1 producto
});
