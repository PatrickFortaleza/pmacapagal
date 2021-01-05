import React from 'react'
import { photos } from '../../data/photography'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function MasonryGrid() {
  return (
    <div className="MasonryGrid">
        <p>Masonry Grid</p>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry columnsCount={4}>
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
