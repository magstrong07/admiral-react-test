import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html', { open: 'on-failure' }]],

  use: {
    trace: 'retain-on-failure',
    baseURL: process.env.CI
      ? 'https://magstrong07.github.io/admiral-react-test'
      : process.env.DOCKER
        ? 'http://host.docker.internal:3000'
        : 'http://localhost:3000',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};
export default config;
