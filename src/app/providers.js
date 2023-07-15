'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { AnimatePresence } from 'framer-motion';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST
  })
}

export function PHProvider({ children }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export function AnimationProvider({ children }) {
  return <AnimatePresence mode="wait" initial={false}> {children} </AnimatePresence>
}