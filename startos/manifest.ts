import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'actual-server',
  title: 'Actual Server',
  license: 'mit',
  wrapperRepo: 'https://github.com/PlebRick/actual-startos.git', // Replace with your actual repo URL
  upstreamRepo: 'https://github.com/actualbudget/actual',
  supportSite: 'https://actualbudget.com/support',
  marketingSite: 'https://actualbudget.com/',
  donationUrl: 'https://github.com/sponsors/actualbudget',
  description: {
    short: 'A local-first personal finance system',
    long: 'Actual is a local-first personal finance system designed to help you manage your budget with privacy and control. It runs as a self-hosted server and is accessible through your web browser.',
  },
  assets: [],
  volumes: ['data'], // Persistent data storage for Actual
  images: {
    'actual-server': {
      source: {
        dockerTag: 'actualbudget/actual-server:latest', // Using the official Docker image
      },
    },
  },
  hardwareRequirements: {}, // You can define minimum specs if known, or leave this empty
  alerts: {
    install: null,
    update: 'Ensure your budget data is backed up before updating the service.',
    uninstall: 'Uninstalling will permanently delete all server files. Ensure you have a backup.',
    restore: 'Restoring from a backup will overwrite current server data.',
    start: null,
    stop: null,
  },
  dependencies: {
    // Define StartOS dependencies if needed, e.g., a database
  },
})