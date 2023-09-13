# playwright-test
This project is created to be a playground for Playwright exploration.

Currently, I have tested with Playwright's basic functionality and test structure. <br/>
The test utilizes one of my other projects and currently it locates elements, fills inputs, and presses buttons.

## Key Takeaways
I found Playwright's UI (which was booted up via `npx playwright test --ui`), to be very helpful in locating/selecting elements. Especially in comparison to past experience with WebdriverIO, where it doesn't offer anything similar and you have to resort to looking at the page directly in a browser. However, I found Playwright's UI to be limited when it comes to complicated elements, like elements in a table, since it defaulted to using XPath which has been deemed to be flaky and non-performant. This resulted in having to refer to a browser anyway. However, Playwright UI still provides a hint at where to start if XPath is being avoided, and seems to be generally helpful since it also suggests the many other methods that Playwright offers for locating elements, like `getByRole()`.
