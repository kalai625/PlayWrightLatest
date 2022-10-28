// @ts-check
const { test, expect } = require('@playwright/test');

test('Navigate plex login page', async ({ page }) => {

  await page.goto('https://test.cloud.plex.com/');
  const ref =await page.title();  
  console.log(ref);
});

test('Navigate Linkined Home page1', async ({ page }) => {

  await page.goto('https://www.linkedin.com/');
  const ref1 =await page.title();  
  console.log(ref1);
});
