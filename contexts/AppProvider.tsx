"use client"

import { ReactNode } from 'react'
import { AuthContextProvider } from './Auth.context'
import { ToggleContextProvider } from './Toggle.context'
import { LangProvider } from "@skalfa/skalfa-lang"
import * as locales from '../langs/.generated'

const registerProviders = [
  AuthContextProvider,
  ToggleContextProvider,
]

export function ContextAppProvider({ children }: { children: ReactNode }) {
  const content = registerProviders.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children)
  console.log("DEBUG AppProvider locales:", Object.keys(locales), locales);
  return (
    <LangProvider locale="id" locales={locales}>
      {content}
    </LangProvider>
  )
}
