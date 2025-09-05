import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
      <img
        alt="Thay Trust Logo"
        width={60}
        height={34}
        loading={loading}
        fetchPriority={priority}
        decoding="async"
        className="transition-all duration-300"
        src="/Thay-Trust.png"
      />
  )
}
