import React, { useState, useEffect, useRef } from 'react'
import Lightbox from './Lightbox'

export default function SmartImage({p, loadNotifier, togglePreLoader, currentTab}) {
  const [loaded, toggleLoad] = useState(() => { return null })
  const [inView, toggleView] = useState(() => { return false })
  const [activeLightBox, toggleLightBox] = useState(() => { return false })
  const [lazyLoad, toggleLazyLoad] = useState(() => { return null }) 
  const offset = 0
  const img = useRef()
  const SmartImage = useRef()

  const handleLoad = () => {
    toggleLoad(bool => bool = true)
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

  const onScrollLazy = () => {
    if (!SmartImage.current) {
      toggleLazyLoad(false)
      return
    }
    // Get bounding rectangle of the image
    const rect = SmartImage.current.getBoundingClientRect()

    // Checks if top and bottom of img has surpassed the top of viewport
    const topInViewScrollUp = rect.top + offset >= 0;
    const botInViewScrollUp = rect.bottom + offset >= 0
    // Checks if top and bottom of img has surpassed the bottom of view port
    const topInViewScrollDown = rect.top + offset <= window.innerHeight
    const botInViewScrollDown = rect.bottom + offset <= window.innerHeight

    if((!topInViewScrollUp && !botInViewScrollUp) || (!topInViewScrollDown && !botInViewScrollDown)){
    }else{
      // If any part of the image is within the viewport, toggleView true
      toggleLazyLoad(true)
    }
  }

  const handleToggleLightBox = () => {
    toggleLightBox(true)
  }

  const handleToggleOffLightBox = (childData) => {
    toggleLightBox(childData)
  }

  useEffect(() => {
    if(img.current){
      img.current.classList.remove('animate')
      if(loaded){
        onScroll()
        if(loaded && inView){
          setTimeout(() => {
            if(!img.current) return null
            img.current.classList.add('animate')
          }, 250)
        }
        // FAIL SAFE -- incase the images don't animate.
        setTimeout(() => {
          if(!img.current) return null
          img.current.classList.add('animate')
        }, 1000)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab])

  useEffect(() => {
    onScroll()
    onScrollLazy()
    document.addEventListener('scroll', onScrollLazy)
    document.addEventListener('scroll', onScroll)
    return (() => {
      document.removeEventListener('scroll', onScroll)
      document.removeEventListener('scroll', onScrollLazy)
    })
  })

  return (
    <div ref={SmartImage} className={`SmartImage ${p.category} all`}>
      { activeLightBox ? <Lightbox toggle={handleToggleOffLightBox} url={p.hiResUrl} alt={p.alt} /> : null }
      {
        lazyLoad ?
        <img
          onClick={handleToggleLightBox}
          className={ loaded && inView ? 'animate' : '' }
          ref={img} 
          src={p.url}
          alt={p.alt}
          onLoad={handleLoad}
        />
        :
        null
      }
    </div>
  )
}
