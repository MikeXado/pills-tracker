import { createEnv } from '@t3-oss/env-core'
import { z as zod } from 'zod'

export const env = createEnv({
  server: {
    MYSQL_PRISMA_URL: zod.string().url()
  },
  runtimeEnv: process.env
})
