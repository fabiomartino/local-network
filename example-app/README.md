# Local Network — Angular example app

Angular 22 + Ionic 9 demo for `@capacitor-community/local-network`. The app has a home page with
a plugin list and a dedicated page for the Local Network plugin. It exercises every method of
the plugin:

- `checkPermissions()` / `requestPermissions()` with a live state badge
- `addListener('permissionChange', ...)` with an in-memory event log
- `removeAllListeners()`
- `getPluginVersion()`

## Development server

```bash
pnpm install
pnpm start
```

`pnpm start` regenerates `src/app/version.ts` from `package.json` via `scripts/set-version.mjs`, then
serves the app. The root route opens the home page; the plugin page is at `/local-network`.

## Build

```bash
pnpm build
```

The Angular application builder writes the browser bundle flat into `dist/`, which is the
`webDir` configured in `capacitor.config.ts`.

## Native targets

```bash
pnpm cap:sync          # copy dist/ into the native projects
pnpm open:android
pnpm open:ios
```

Both native projects were generated for the app id `com.example.plugin`. Android 17+ (API 37) is
the only platform where the permission is actually enforced; iOS and older Android versions always
report `granted`.

## Tests

```bash
pnpm test
```

Vitest with `@analogjs/vitest-angular`, no Zone.js (zoneless Angular 22).
