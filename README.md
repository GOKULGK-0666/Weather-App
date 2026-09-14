# Meteora TN — Tamil Nadu Weather

Premium, responsive weather experience for Tamil Nadu built with React, TypeScript, Vite, Framer Motion, Recharts and the Open-Meteo APIs.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL. No API key is required: weather and geocoding use Open-Meteo's public endpoints. The app defaults to Hosur and supports worldwide city search.

## Build

```bash
npm run build
npm run preview
```

## Notes

The map view is a lightweight responsive map visualization designed to avoid third-party tile credentials while retaining interactive city selection. Favorites are stored locally in the browser. The UI is prepared for a future Express/MongoDB proxy and AI endpoint; live weather data is intentionally never faked when the provider is unavailable.
