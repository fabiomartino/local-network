import { registerPlugin } from '@capacitor/core';

import { LocalNetworkPlugin } from './definitions';

const LocalNetwork = registerPlugin<LocalNetworkPlugin>('LocalNetwork', {
  web: () => import('./web').then((m) => new m.LocalNetworkWeb()),
});

export * from './definitions';
export { LocalNetwork };
