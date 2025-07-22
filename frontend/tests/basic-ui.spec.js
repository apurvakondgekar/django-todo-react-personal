const { test, expect } = require('@playwright/test');

test('homepage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Replace with your app's running address!
  await expect(page).toHaveTitle(/React App/i); // Change 'Todo App' to your app's browser tab title if different
});
