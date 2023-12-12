import { createEnv } from '@t3-oss/env-core'
import { z as zod } from 'zod'

export const isEnv = !!process.env.VERCEL_ENV
export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: zod.string(),
    VERCEL_ENV: zod.string().optional()
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: zod.string(),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: zod.string(),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: zod.string(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: zod.string(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: zod.string()
  },
  runtimeEnv: {
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
  },
  skipValidation: !isEnv,
  onValidationError: (error) => {
    console.error(error)
    throw error
  }
})
