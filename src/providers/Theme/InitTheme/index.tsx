import Script from 'next/script'
import React from 'react'

import { defaultTheme, themeLocalStorageKey } from '../ThemeSelector/types'

export const InitTheme: React.FC = () => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      dangerouslySetInnerHTML={{
        __html: `
              (function () {
                function themeIsValid(theme) {
                  return theme === 'light' || theme === 'dark'
                }

                var themeToSet = '${defaultTheme}' // fallback is always light
                var preference = window.localStorage.getItem('${themeLocalStorageKey}')

                if (themeIsValid(preference)) {
                  themeToSet = preference
                }

                document.documentElement.setAttribute('data-theme', themeToSet)
                window.localStorage.setItem('${themeLocalStorageKey}', themeToSet) // ensure persistence
              })();
              `,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  )
}
