## API Report File for "@backstage-community/plugin-airbrake-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
import express from 'express';
import { LoggerService } from '@backstage/backend-plugin-api';

// @public
export interface AirbrakeConfig {
  apiKey: string;
}

// @public
const airbrakePlugin: BackendFeature;
export default airbrakePlugin;

// @public @deprecated (undocumented)
export function createRouter(options: RouterOptions): Promise<express.Router>;

// @public
export function extractAirbrakeConfig(config: Config): AirbrakeConfig;

// @public @deprecated (undocumented)
export interface RouterOptions {
  airbrakeConfig: AirbrakeConfig;
  logger: LoggerService;
}
```
