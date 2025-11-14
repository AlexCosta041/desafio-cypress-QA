import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push(
            '--disable-features=PasswordManager',
            '--disable-password-manager-reauthentication'
          );
        }
        return launchOptions;
      });
    }
  }
});