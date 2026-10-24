export interface PluginConfig {
  id: number;
  name: string;
  npmName: string;
  iconName: string;
  githubUrl: string;
  pathName: string;
  description: string;
  active: boolean;
  isVisible: boolean;
}

/**
 * Plugins listed on the home page.
 *
 * `pathName` must be absolute, because the router resolves relative commands
 * against the current activated route.
 */
export const PLUGINS: PluginConfig[] = [
  {
    id: 1,
    name: 'Local Network',
    npmName: '@capacitor-community/local-network',
    iconName: 'git-network-outline',
    githubUrl: 'https://github.com/capacitor-community/local-network',
    pathName: '/local-network',
    description: 'Check and request the Android 17+ local network access permission.',
    active: true,
    isVisible: true,
  },
];
