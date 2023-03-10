import React, { useState } from 'react'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar'
import './MessageSender.css'

function MessageSender () {
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    setInput('')
    setImageUrl('')
  }
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar />
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className='messageSender__input'
            placeholder={`What's on your mind`}
          />
          <input
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            placeholder='image URL (Optional)'
          />
          <button onClick={handleSubmit} type='submit'>
            Hidden submit
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <Videocam style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibrary style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
