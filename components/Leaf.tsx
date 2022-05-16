import React from 'react'

const Leaf = ({ className, imageUrl }) => {
  return (
    <div className={className}>
        <img className='leaf' src={imageUrl} />
    </div>
  )
}

export default Leaf