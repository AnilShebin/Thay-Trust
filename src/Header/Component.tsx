import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import type { Header } from '@/payload-types'
import { draftMode } from 'next/headers'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()
  const { isEnabled } = await draftMode() // ✅ get preview mode status

  return <HeaderClient data={headerData} adminBarProps={{ preview: isEnabled }} />
}
