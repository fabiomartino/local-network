import { registerPlugin } from '@capacitor/core';

import { LocalNetworkPlugin } from './definitions.js';

const LocalNetwork = registerPlugin<LocalNetworkPlugin>('LocalNetwork', {
  web: () => import('./web.js').then((m) => new m.LocalNetworkWeb()),
});

export * from './definitions.js';
export { LocalNetwork };
