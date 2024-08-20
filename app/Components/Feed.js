import React from 'react'
import CreatePost from './CreatePost'
import Posts from './Posts'

const Feed = () => {
  return (
    <div className='flex-grow h-screen overflow-y-auto space-y-6 no-scrollbar'>
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl space-y-6">
      <CreatePost />
      <Posts />
      </div>
    </div>
  )
}

export default Feed