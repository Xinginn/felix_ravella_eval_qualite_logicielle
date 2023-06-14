import { test, expect } from '@playwright/test';

/*
Error: Playwright Test did not expect test() to be called here.
*/
test('renders', async ({ page}) => {
  await page.goto('http://localhost:5173')

  await expect(page).toHaveTitle(/Vite/);
})

test('creates new grade', async ({page}) => {
  await page.goto('http://localhost:5173');

  await page.getByTestId('create-title').fill('New grade');
  await page.getByTestId('create-value').fill('14');
  await page.getByTestId('create-comment').fill('Another comment for grade');
  await page.getByTestId('create-button').click();

  const el = page.getByTestId('gradeshort-0');

  expect(el).toBeDefined();
})

test('open edit grade form', async ({page}) => {
  await page.goto('http://localhost:5173');

  await page.getByTestId('create-title').fill('New grade');
  await page.getByTestId('create-value').fill('14');
  await page.getByTestId('create-comment').fill('Another comment for grade');
  await page.getByTestId('create-button').click();

  await page.getByTestId('gradeshort-0').click;

  const el = page.getByTestId('grade-edit');


  expect(el).toBeDefined();
})