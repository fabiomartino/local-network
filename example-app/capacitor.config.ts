/// <reference types='@capacitor-community/local-network' />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.plugin.localnetwork',
  appName: 'Local Network Example',
  webDir: 'dist',
  plugins: {
    SystemBars: {
      insetsHandling: 'native',
    },
    LocalNetwork: {
      /**
       * Enables verbose native logging.
       * Logs are printed in Logcat (Android) and Xcode console (iOS).
       * Default: false
       */
      verboseLogging: true,
    },
  },
};

export default config;
