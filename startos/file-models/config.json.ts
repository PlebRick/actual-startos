import { matches, FileHelper } from '@start9labs/start-sdk'
const { object, string } = matches

const shape = object({
  https: object({
    key: string.optional().onMismatch(undefined),
    cert: string.optional().onMismatch(undefined),
  }),
})

export const jsonFile = FileHelper.yaml(
  '/media/startos/volumes/data/config.json',
  shape,
)
