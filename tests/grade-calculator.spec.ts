import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://troyatienza.github.io/");

  // Expect a title "to contain" a substring.
  await expect(page.locator("#title")).toHaveText("ITRA");
});

test("get score for assignment 1 and 2", async ({ page }) => {
  const grades = [100, 95];
  const weights = [30, 20];

  await page.goto("https://troyatienza.github.io/");

  // Add assignment names.
  await page.getByRole("textbox").nth(0).fill("Assignment 1");
  await page.getByRole("textbox").nth(1).fill("Assignment 2");

  // Add assignment grades.
  await page.locator("tbody tr:nth-child(1) .col2").fill(grades[0].toString());
  await page.locator("tbody tr:nth-child(2) .col2").fill(grades[1].toString());

  // Add assignment weights.
  await page.locator("tbody tr:nth-child(1) .col3").fill(weights[0].toString());
  await page.locator("tbody tr:nth-child(2) .col3").fill(weights[1].toString());

  // Click equals button
  await page.getByRole("button", { name: "=" }).click();

  // Verify total
  const expectedAverage =
    (weights[0] * grades[0]) / 100 + (weights[1] * grades[1]) / 100;
  const actualAverage = parseFloat(await page.locator("#screen").innerText());

  await expect(actualAverage).toEqual(expectedAverage);
});
