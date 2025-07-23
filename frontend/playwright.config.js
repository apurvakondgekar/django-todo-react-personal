// frontend/playwright.config.js
module.exports = {
  testDir: './tests',  // Only run tests found in frontend/tests/
 webServer: {
	command: 'npm start',
    port: 3000,
    timeout: 120 * 1000, // 2 minutes
    reuseExistingServer: !process.env.CI
  }
};
