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
    console.log('attempt tab change')
    // if(currentTab === 'all'){
    //   filteredPhotos = photos
    // }else{
    //   filteredPhotos = photos.filter(p => { return p.category === currentTab })
    // }
  }
  
  const togglePreLoader = (childData) => {
    upLoadCounter(childData)
  }

  console.log(currentTab)

  // handleTabChange()

  return (
    <div className={`MasonryGrid ${currentTab}`}>
        {/* {
          loaded ? null : <CubePreloader />
        } */}
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry >
            {
              photos.map((p, index) => {
                return (
                  <SmartImage 
                    key={index} 
                    p={p} 
                    currentTab={currentTab}
                    loadNotifier={index === photos.length - 1 ? incrementLoadCounter : undefined}
                    togglePreLoader={index === photos.length - 1 ? togglePreLoader : undefined}
                  />
                )
              })
            }
          </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
