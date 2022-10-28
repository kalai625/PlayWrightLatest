// @ts-check
const { test, expect } = require('@playwright/test');

test('Navigate Annular Home page', async ({ page }) => {

  await page.goto('https://www.annulartechnologies.com/');
  const ref =await page.title();  
  console.log(ref);
});

test('Navigate Linkined Home page1', async ({ page }) => {

  await page.goto('https://www.linkedin.com/');
  const ref1 =await page.title();  
  console.log(ref1);
});
