import React, { useState, useEffect, useRef } from 'react'

export default function SmartImage({p, index, length}) {
  const [loaded, toggleLoad] = useState(() => { return false })
  const [inView, toggleView] = useState(() => { return false })
  const offset = 0
  const img = useRef()

  const handleLoad = () => {
    toggleLoad(true)
  }

  const onScroll = () => {
    if (!img.current) {
      toggleView(false)
      return
    }
    const top = img.current.getBoundingClientRect().top;
    toggleView( top + offset >= 0 && top - offset <= window.innerHeight)
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return (() => document.removeEventListener('scroll', onScroll))
  })

  return (
    <img
      ref={img} 
      src={p.url}
      alt={p.alt}
      onLoad={handleLoad}
    />
  )
}
