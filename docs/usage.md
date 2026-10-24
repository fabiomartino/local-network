# Usage

```ts
import { LocalNetwork } from '@capacitor-community/local-network';

const status = await LocalNetwork.checkPermissions();

if (status.localNetwork !== 'granted') {
  const result = await LocalNetwork.requestPermissions();
  console.log(result.localNetwork); // 'granted' | 'denied' | 'prompt'
}
```

## Notes

- A denied decision is reported as a permission state, not as a rejection.
- Rejections are reserved for real errors.
- On iOS, the system presents the local-network privacy prompt on first local-network access; this plugin cannot trigger or query it.

