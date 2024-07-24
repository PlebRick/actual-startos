import { setupManifest } from '@start9labs/start-sdk'

/**
 * Here we define static properties of the package to be displayed in the Marketplace and used by StartOS.
 */
export const manifest = setupManifest({
  id: 'hello-world',
  title: 'Hello World',
  version: '0.3.6:0',
  releaseNotes: 'Revamped for StartOS 0.3.6',
  license: 'mit',
  replaces: ['Hello World (hosted)', 'Goodbye World'], // A list of SaaS services/products this service is intended to replace
  wrapperRepo: 'https://github.com/Start9Labs/hello-world-wrapper',
  upstreamRepo: 'https://github.com/Start9Labs/hello-world',
  supportSite: 'https://docs.start9.com/',
  marketingSite: 'https://start9.com/',
  donationUrl: 'https://donate.start9.com/',
  description: {
    short: 'Bare bones example of a StartOS service',
    long: 'Hello World is a template service that provides examples of basic StartOS features.',
  },
  assets: [], // directories of static files you want to mount to your container
  volumes: ['main'], // IDs of persistence volumes that will be mounted to your container
  images: {
    main: {
      source: {
        dockerTag: 'start9/hello-world',
      },
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: 'Optional alert to display before installing the service',
    update: 'Optional alert to display before updating the service',
    uninstall: 'Optional alert to display before uninstalling the service',
    restore:
      'Optional alert to display before restoring the service from backup',
    start: 'Optional alert to display before starting the service',
    stop: 'Optional alert to display before stopping the service',
  },
  dependencies: {}, // See Hello Moon for an example with dependencies
})
