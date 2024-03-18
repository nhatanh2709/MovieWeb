import React from 'react'
import HeaderInteractive from '../components/HeaderInteractive'
import Hero from '../components/Hero'
import ListVideo from '../components/ListVideo'
import Comment from '../components/Comment'
import ShowMovie from '../components/ShowMovies'
import Footer from '../components/Footer'
import ChatWithBot from '../components/ChatWithBot'
const Interactive = () => {
  return (
    <div className='min-h-screen'>
        <div className='gradient-bg-hero' >
            <HeaderInteractive/>
            <Hero/>
        </div>
        <div>
            <ListVideo/>
            <Comment/>
            <ShowMovie/>
            <ChatWithBot/>
        </div>
        <div className="body-div">
        <Footer/>
      </div>
    </div>
  )
}

export default Interactive
