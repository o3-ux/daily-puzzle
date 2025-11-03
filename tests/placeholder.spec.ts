import { test, expect } from '@playwright/test';

test('homepage has placeholder text', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  await expect(page.getByRole('heading', { name: /daily puzzle coming soon/i })).toBeVisible();
});
