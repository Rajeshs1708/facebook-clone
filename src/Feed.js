import React from 'react'
import StoryReel from './StoryReel'
import Post from './Post'
import MessageSender from './MessageSender'
import './Feed.css'

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic='https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        message='Wow this works!'
        timestamp='This is a timestamp'
        username='Rajesh'
        image='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      />
      <Post
        profilePic='https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        message='Wow this works!'
        timestamp='This is a timestamp'
        username='Rajesh'
        image='https://media.istockphoto.com/id/1281748969/photo/south-fork-kinnickinnic-waterfall.jpg?b=1&s=170667a&w=0&k=20&c=0yX8qnreqBVfhaHe1Ohju86hajWhemSGPyXDIASC364='
        />
    </div>
  )
}

export default Feed
