import React from 'react'

const TextContainer = () => {
  return (
    <div className="textContainer">
        <div className="textContainer-top">
            <span className="text-green-600">Find more juice</span>
            <span className="first-letter:text-5xl">kepac</span>
        </div>
        <div className="textContainer-middle">
            <span>ORANGE</span>
        </div>
        <div className="textContainer-bottom">
            <button>Show More</button>
            <p>delicious <span>fresh</span><br /> produce, right here</p>

        </div>
    </div>
  )
}

export default TextContainer