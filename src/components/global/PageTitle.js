import React from 'react'

export default function PageTitle({title, z}) {
  return (
    <h1 className={ z ? "PageTitle z" : "PageTitle" }><span>{title}</span></h1>
  )
}
