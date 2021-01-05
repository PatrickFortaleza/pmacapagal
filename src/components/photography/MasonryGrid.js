import React, { useEffect } from 'react'
import { photos } from '../../data/photography'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function MasonryGrid({currentTab}) {
  console.log(currentTab)
  
  let filteredPhotos;
  if(currentTab === 'all'){
    filteredPhotos = photos
  }else{
    filteredPhotos = photos.filter(p => { return p.category === currentTab })
  }

  useEffect(() => {
    console.log(filteredPhotos)
    if(currentTab === 'all'){
      filteredPhotos = photos
    }
  }, [currentTab])

  return (
    <div className="MasonryGrid">
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry gutter={30}>
            {
              filteredPhotos.map((p, index) => {
                return (
                  <img key={index} src={p.url} />
                )
              })
            }
          </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
