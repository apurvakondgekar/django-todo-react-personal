const { test, expect } = require('@playwright/test');

test('add a new todo item via modal', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Change URL if your app runs differently

  // 1. Click the "Add task" button
  await page.click('text=Add task');

  // 2. Wait for the modal/dialog to appear
  await expect(page.locator('text=Todo Item')).toBeVisible();

  // 3. Fill in the Title field
  await page.fill('input[placeholder="Enter Todo Title"]', 'Buy bread');

  // 4. Fill in the Description field
  await page.fill('input[placeholder="Enter Todo description"]', 'From grocery store');

  // 5. (Optional) Check Completed box
  // await page.click('text=Completed');

  // 6. Click the green "Save" button
  await page.click('button:has-text("Save")');
  
  // Wait a moment for UI update
  //await page.waitForTimeout(5000);

  // This gives you just the last matching element
   await expect(
    page.locator('span.todo-title', { hasText: 'Buy bread' }).last()
  ).toBeVisible();



});
