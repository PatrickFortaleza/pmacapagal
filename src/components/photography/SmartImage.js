import React, { useState, useEffect, useRef } from 'react'

export default function SmartImage({p, loadNotifier, togglePreLoader, currentTab}) {
  const [loaded, toggleLoad] = useState(() => { return false })
  const [inView, toggleView] = useState(() => { return false })
  const offset = 0
  const img = useRef()

  const handleLoad = () => {
    toggleLoad(true)
    if(loadNotifier){loadNotifier(true)}
  }

  const onScroll = () => {
    if (!img.current) {
      toggleView(false)
      return
    }
    // Get bounding rectangle of the image
    const rect = img.current.getBoundingClientRect()

    // Checks if top and bottom of img has surpassed the top of viewport
    const topInViewScrollUp = rect.top + offset >= 0;
    const botInViewScrollUp = rect.bottom + offset >= 0
    // Checks if top and bottom of img has surpassed the bottom of view port
    const topInViewScrollDown = rect.top + offset <= window.innerHeight
    const botInViewScrollDown = rect.bottom + offset <= window.innerHeight

    if((!topInViewScrollUp && !botInViewScrollUp) || (!topInViewScrollDown && !botInViewScrollDown)){
      // If the image is COMPLETELY out of the viewport, toggleView false
      toggleView(false)
    }else{
      // If any part of the image is within the viewport, toggleView true
      toggleView(true)
    }
  }

  useEffect(() => {
    img.current.classList.remove('animate')
    toggleLoad(false)
    if(togglePreLoader){togglePreLoader(false)}
    if(loaded){
      if(togglePreLoader){togglePreLoader(true)}
      onScroll()
      if(loaded && inView){
        onScroll()
        img.current.classList.add('animate')
      }
    }
  }, [currentTab])

  useEffect(() => {
    onScroll()
    document.addEventListener('scroll', onScroll)
    return (() => document.removeEventListener('scroll', onScroll))
  })

  return (
    <img
      className={loaded && inView ? 'animate' : ''}
      ref={img} 
      src={p.url}
      alt={p.alt}
      onLoad={handleLoad}
    />
  )
}
