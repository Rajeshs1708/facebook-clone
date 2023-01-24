import React from 'react'
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
      <iframe
      src='https://www.w3schools.com/'
      title='w3schools'
      width='250'
      height='100'
      style={{border:"none",overFlow:"hidden"}}
      allowTransparency='true'
      allow='encrypted-media'
      ></iframe>
    </div>
  )
}

export default Widgets
