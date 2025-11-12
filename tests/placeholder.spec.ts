import { test, expect } from '@playwright/test';

test('homepage no longer shows placeholder text', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  const placeholder = page.getByRole('heading', { name: /daily puzzle coming soon/i });
  await expect(placeholder).toHaveCount(0);
});
