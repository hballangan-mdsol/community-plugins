/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { convertLegacyRouteRefs } from '@backstage/core-compat-api';

import {
  projectGrowthAlertRef,
  rootRouteRef,
  unlabeledDataflowAlertRef,
} from './routes';
import { createFrontendPlugin } from '@backstage/frontend-plugin-api';
import {
  CostInsightsLabelDataflowInstructionsPage,
  CostInsightsNavItem,
  CostInsightsPage,
  CostInsightsProjectGrowthInstructionsPage,
  EntityCostInsightsContent,
} from './alpha/plugin';

export default createFrontendPlugin({
  pluginId: 'cost-insights',
  extensions: [
    CostInsightsPage,
    CostInsightsProjectGrowthInstructionsPage,
    CostInsightsLabelDataflowInstructionsPage,
    EntityCostInsightsContent,
    CostInsightsNavItem,
  ],
  routes: convertLegacyRouteRefs({
    root: rootRouteRef,
    growthAlerts: projectGrowthAlertRef,
    unlabeledDataflowAlerts: unlabeledDataflowAlertRef,
  }),
});
