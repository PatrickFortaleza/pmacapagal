import React from 'react'
import { photos } from '../../data/photography'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function MasonryGrid() {
  return (
    <div className="MasonryGrid">
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry gutter={30}>
            {
              photos.map((p, index) => {
                return (
                  <img src={p.url} />
                )
              })
            }
          </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
