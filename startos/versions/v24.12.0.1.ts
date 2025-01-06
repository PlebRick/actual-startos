import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { sdk } from '../sdk'
import { setName } from '../actions/setName'

export const v24120 = VersionInfo.of({
  version: '24.12.0:1',
  releaseNotes: 'Dashboards, tracking budget, summary report, batch sync for simpleFin',
  migrations: {
    up: async ({ effects }) => {
      await sdk.action.requestOwn(effects, setName, 'critical')
    },
    down: IMPOSSIBLE,
  },
})
