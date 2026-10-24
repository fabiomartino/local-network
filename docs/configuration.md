# Configuration

This plugin has a small optional configuration under `plugins.LocalNetwork` in your `capacitor.config.ts` or `capacitor.config.json`.

## Options

| Prop              | Type      | Default | Description                                      |
| ----------------- | --------- | ------- | ------------------------------------------------ |
| **`verboseLogging`** | `boolean` | `false` | Enables verbose native logging (Logcat / Xcode). |

## Example

### `capacitor.config.json`

```json
{
  "plugins": {
    "LocalNetwork": {
      "verboseLogging": true
    }
  }
}
```

### `capacitor.config.ts`

```ts
/// <reference types="@capacitor-community/local-network" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    LocalNetwork: {
      verboseLogging: true,
    },
  },
};

export default config;
```

