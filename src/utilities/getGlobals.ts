import type { Config } from "src/payload-types"

import configPromise from "@payload-config"
import { getPayload } from "payload"
import { unstable_cache } from "next/cache"

type Global = keyof Config["globals"]

async function getGlobal(slug: Global, depth = 0) {
  try {
    const payload = await getPayload({ config: configPromise })

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database query timeout")), 5000)
    })

    const queryPromise = payload.findGlobal({
      slug,
      depth,
    })

    const global = await Promise.race([queryPromise, timeoutPromise])

    return global
  } catch (error) {
    console.error(`[v0] Error fetching global ${slug}:`, error)

    // Return a minimal fallback structure
    return {
      id: "",
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    }
  }
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  })
