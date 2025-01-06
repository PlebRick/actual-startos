import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const v24_12_0_1 = VersionInfo.of({
  version: '24.12.0:1',
  releaseNotes: 'Dashboards, tracking budget, summary report, batch sync for simpleFin',
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
