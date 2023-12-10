import { journey, step, monitor, expect } from '@elastic/synthetics';

journey('Data Report - Test Navigation', async ({ page, context }) => {
  monitor.use({
    schedule: 10,
  });
  step('Step 1: Navigate to the homepage', async () => {
    await page.goto('http://localhost:5173/');
  });

  step('Step 2: Change Theme', async () => {
    await page.getByLabel('Change Theme').click();
    await page.getByLabel('Change Theme').click();
    await page.getByLabel('Change Theme').click();
  });

  step('Step 3: Search and Click on an Item', async () => {
    await page.goto('http://localhost:5173/C44/01/collection');
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('TYPE A NAME OR NUMBER').fill('mw0mw13');
    await page.getByRole('button', { name: 'WCC TOMMY LOGO HOODY MW0MW13720DW5 WCC TOMMY LOGO HOODY' }).click();
  });
});
