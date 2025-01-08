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
import { CatalogApi, catalogApiRef } from '@backstage/plugin-catalog-react';
import { renderInTestApp, TestApiProvider } from '@backstage/test-utils';
import React from 'react';

import { MaturityPage } from './MaturityPage';
import { ScoringDataApi, scoringDataApiRef } from '../../api';

const catalogApi: Partial<CatalogApi> = {
  getEntities: jest.fn().mockResolvedValue([]),
};

const scoringApi: Partial<ScoringDataApi> = {
  getBulkMaturityCheckResults: jest.fn().mockResolvedValue([]),
};

describe('<MaturityPage />', () => {
  afterEach(() => jest.resetAllMocks());

  it('shows maturity index page', async () => {
    const { getAllByText } = await renderInTestApp(
      <TestApiProvider
        apis={[
          [catalogApiRef, catalogApi],
          [scoringDataApiRef, scoringApi],
        ]}
      >
        <MaturityPage />
      </TestApiProvider>,
    );

    expect(getAllByText(/Maturity/)).toHaveLength(1);
  });
});
