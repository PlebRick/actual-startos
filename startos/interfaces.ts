import { sdk } from './sdk'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.host.multi(effects, 'ui-multi')

  // Bind to port 5006 (the Actual server's port)
  const uiMultiOrigin = await uiMulti.bindPort(5006, {
    protocol: 'http',
  })

  // Define the web interface for Actual
  const ui = sdk.createInterface(effects, {
    name: 'Actual Web UI',
    id: 'ui',
    description: 'The web interface of Actual',
    type: 'ui',
    hasPrimary: true, // Set to true since this is the main interface
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    search: {},
  })

  // Export the interface
  const uiReceipt = await uiMultiOrigin.export([ui])

  return [uiReceipt]
})