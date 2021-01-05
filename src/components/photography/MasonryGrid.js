import React, { useEffect, useState } from 'react'
import { photos } from '../../data/photography'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import CubePreloader from '../entity/CubePreloader'

export default function MasonryGrid({currentTab}) {
  const [loaded, upLoadCounter] = useState(() => { return false })
  let filteredPhotos;

  const incrementLoadCounter = () => {
    console.log('last image loaded')
    setTimeout(() => {
      upLoadCounter(true)
    }, 200)
  }

  const handleTabChange = () => {
    if(currentTab === 'all'){
      filteredPhotos = photos
    }else{
      filteredPhotos = photos.filter(p => { return p.category === currentTab })
    }
  }

  handleTabChange()

  useEffect(() => {
    handleTabChange()
  }, [currentTab])

  return (
    <div className="MasonryGrid">
        {
          loaded ? null : <CubePreloader />
        }
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry gutter={30}>
            {
              filteredPhotos.map((p, index) => {
                return (
                  <img 
                    key={index} 
                    src={p.url}
                    alt={p.alt}
                    onLoad={index === filteredPhotos.length - 1 ? incrementLoadCounter : undefined }
                  />
                )
              })
            }
          </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
