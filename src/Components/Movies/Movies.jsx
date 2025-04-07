import React from 'react'
import './Movies.css'
import movies from '../../Assets/tv2.svg'
const Movies = () => {
  return (
    <div className='movies'>
        <div className="left"> 
            <p>
            Never miss a game, episode, or blockbuster hit! Subscribe today for unlimited access to live sports, premium channels, and on-demand libraries—all in crystal-clear HD.</p>
        </div>
        <div className="right" 
        style={{
          backgroundImage: `url(${movies})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.8s ease-in-out",
        }}
        />
    </div>
  )
}

export default Movies