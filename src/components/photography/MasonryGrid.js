import React, { useState } from 'react'
import { photos } from '../../data/photography'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import CubePreloader from '../entity/CubePreloader'
import SmartImage from './SmartImage'

export default function MasonryGrid({currentTab}) {
  const [loaded, upLoadCounter] = useState(() => { return false })
  let filteredPhotos;

  const incrementLoadCounter = (childData) => {
    setTimeout(() => {
      upLoadCounter(childData)
    }, 200)
  }

  const handleTabChange = () => {
    if(currentTab === 'all'){
      filteredPhotos = photos
    }else{
      filteredPhotos = photos.filter(p => { return p.category === currentTab })
    }
  }
  
  const togglePreLoader = (childData) => {
    upLoadCounter(childData)
  }

  handleTabChange()

  return (
    <div className="MasonryGrid">
        {
          loaded ? null : <CubePreloader />
        }
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry gutter={`${30}px`} >
            {
              filteredPhotos.map((p, index) => {
                return (
                  <SmartImage 
                    key={index} 
                    p={p} 
                    currentTab={currentTab}
                    onLoad={() => { console.log(`SmartImage ${index} has loaded`)}}
                    loadNotifier={index === filteredPhotos.length - 1 ? incrementLoadCounter : undefined}
                    togglePreLoader={index === filteredPhotos.length - 1 ? togglePreLoader : undefined}
                  />
                )
              })
            }
          </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
