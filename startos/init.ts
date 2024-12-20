import { sdk } from './sdk'
import { exposedStore } from './store'
import { setDependencies } from './dependencies'
import { setInterfaces } from './interfaces'
import { versions } from './versions'
import { actions } from './actions'
import { jsonFile } from './file-models/config.json'

// **** Install ****
const install = sdk.setupInstall(async ({ effects }) => {
  // placeholder ip for hostname
  const hostnames = [await sdk.getContainerIp(effects)]
  const key = await sdk.getSslKey(effects, { hostnames })
  // full chain: leaf, intermediate, root cert
  const cert = (await sdk.getSslCerificate(effects, hostnames).const())[2]

  await jsonFile.write({ https: { key, cert } })

})

// **** Uninstall ****
const uninstall = sdk.setupUninstall(async ({ effects }) => {})

/**
 * Plumbing. DO NOT EDIT.
 */
export const { packageInit, packageUninit, containerInit } = sdk.setupInit(
  versions,
  install,
  uninstall,
  setInterfaces,
  setDependencies,
  actions,
  exposedStore,
)
