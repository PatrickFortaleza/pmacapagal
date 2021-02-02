import React, { useState } from 'react'
import { photos } from '../../data/photography'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import CubePreloader from '../entity/CubePreloader'
import SmartImage from './SmartImage'

export default function MasonryGrid({currentTab}) {
  const [loaded, upLoadCounter] = useState(() => { return null })

  const incrementLoadCounter = () => {
    setTimeout(() => {
      upLoadCounter(true)
    }, 200)
    return loaded
  }
  
  return (
    <div className={`MasonryGrid ${currentTab}`}>
      {
        loaded ?
          null
        :
          <CubePreloader />
      }
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1140: 5}}>
          <Masonry >
            {
              photos.map((p, index) => {
                return (
                  <SmartImage 
                    key={index} 
                    p={p} 
                    currentTab={currentTab}
                    loadNotifier={index === 0 ? incrementLoadCounter : undefined}
                  />
                )
              })
            }
          </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
