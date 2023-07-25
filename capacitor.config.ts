import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.test.app',
  appName: 'test-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
